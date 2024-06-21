import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { RegisterPlantContext } from "../../contexts/RegisterPlantContext";
import api from "../../services/api"
import ProductCard from "../../components/ProductCard";
import NavigationBarBottom from "../../components/NavigationBarBottom";
import NavigationBar from "../../components/NavigationBar";

import Theme from "../../style/Theme";

export default function SelectCategory() {
  const { navigate } = useNavigation()
  const { plantDataAdded, changePlantDataAdded } = useContext(RegisterPlantContext)
  const [categories, setCategories] = useState([])

  async function getCategories() {
    try {
      const { data } = await api.get('/categories');
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSelectingCategory(category) {
    changePlantDataAdded({
      httpMethod: 'post',
      categoryId: category.id,
      category: { ...category }
    })

    navigate("DefinePlantName")
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <NavigationBar title="Adicionar Planta" />

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title} variant="titleLarge">
            Selecione uma categoria{"\n"}para sua planta
          </Text>
          <View style={[styles.cardGroup, { marginTop: 30 }]}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.card}
                activeOpacity={0.6}
                onPress={() => handleSelectingCategory(category)}
              >
                <View style={{ padding: 6 }}>
                  <ProductCard image={category.image} text={category.name} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <NavigationBarBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 0,
    paddingBottom: 110,
  },

  homeHeaderBackground: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.onPrimaryprimary,
  },

  homeHeaderContainer: {
    padding: 30,
  },

  homeHeaderUser: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  homeHeaderNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navItem: {
    flex: 1,
    backgroundColor: Theme.colors.surfaceTint,
    padding: 20,
    borderRadius: 15,
  },

  title: {
    fontWeight: "bold",
    paddingLeft: 6
  },

  textColor: {
    color: Theme.colors.onPrimary,
  },

  image: {
    width: 50,
    height: 50,
  },

  card: {
    width: '50%'
  },

  cardGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: 'wrap'
  },
});
