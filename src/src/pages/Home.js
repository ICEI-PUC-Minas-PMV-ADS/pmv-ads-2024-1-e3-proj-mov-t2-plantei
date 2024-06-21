import { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import api from "../services/api";
import { RegisterPlantContext } from "../contexts/RegisterPlantContext";
import ProductCard from "../components/ProductCard";
import NavigationBarBottom from "../components/NavigationBarBottom";

import Plant from "../../assets/plant-icon.svg";
import Task from "../../assets/splitscreen_add-icon";
import Article from "../../assets/article-icon.svg";
import { UserContext } from "../contexts/UserContext";

import Theme from "../style/Theme";

export default function Home() {
  const { navigate } = useNavigation();
  const { plantDataAdded, changePlantDataAdded } =
    useContext(RegisterPlantContext);
  const [categories, setCategories] = useState([]);
  const { user } = useContext(UserContext);

  async function getCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSelectingCategory(category) {
    changePlantDataAdded({
      httpMethod: "post",
      categoryId: category.id,
      category: { ...category },
    });

    navigate("DefinePlantName");
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.homeHeaderBackground}>
            <View style={styles.homeHeaderContainer}>
              <View style={styles.homeHeaderUser}>
                <Text
                  style={[styles.title, styles.textColor]}
                  variant="titleLarge"
                >
                  Olá, {user ? user.nome : "Usuário"}
                </Text>
                <Image
                  style={styles.image}
                  source={require("../../assets/user.png")}
                />
              </View>
              <View style={styles.homeHeaderNav}>
                <View style={styles.navItem} marginRight={10}>
                  <TouchableOpacity onPress={() => navigate("MyPlants")}>
                    <Plant width={24} height={24} marginBottom={10} />
                    <Text style={styles.textColor} variant="bodySmall">
                      Minhas{"\n"}plantas
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.navItem} marginRight={10}>
                  <TouchableOpacity onPress={() => navigate("ListFutureTasks")}>
                    <Task width={24} height={24} marginBottom={10} />
                    <Text style={styles.textColor} variant="bodySmall">
                      Futuras{"\n"}tarefas
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.navItem}>
                  <TouchableOpacity onPress={() => navigate("ArticlesHome")}>
                    <Article width={24} height={24} marginBottom={10} />
                    <Text style={styles.textColor} variant="bodySmall">
                      Guia{"\n"}verde
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.title} variant="titleLarge">
              Plantas para você
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
        </View>
      </ScrollView>

      <NavigationBarBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
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
  },

  textColor: {
    color: Theme.colors.onPrimary,
  },

  image: {
    width: 50,
    height: 50,
  },

  card: {
    width: "50%",
  },

  cardGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
