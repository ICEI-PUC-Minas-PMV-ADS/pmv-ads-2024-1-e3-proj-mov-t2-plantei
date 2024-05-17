import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import EmptyPlants from "./EmptyPlants";
import NavigationBarBottom from "../../components/NavigationBarBottom";
import NavigationBar from "../../components/NavigationBar";
import ProductCardCategory from "../../components/ProductCardCategory";

export default function MyPlants({ route }) {
  const parametersToReload = route.params;
  const [myPlants, setMyPlants] = useState([])
  const [isLoadingPlants, setIsLoadingPlants] = useState(true)
  const { navigate } = useNavigation()

  async function getMyPlants() {
    setIsLoadingPlants(true)
    try {
      const { data } = await api.get('/plants?_embed=category');
      setMyPlants(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoadingPlants(false)
  }

  function handleSelectingPlant(plant) {
    navigate('PlantDetails', { plantId: plant.id })
  }

  useEffect(() => {
    getMyPlants()
  }, [parametersToReload])

  if (isLoadingPlants) {
    return <></>
  }

  return (
    <>
      <NavigationBar title="Minhas plantas" />

      <ScrollView style={styles.container}>
        {!isLoadingPlants && myPlants.length > 0 ? (
          <View>
            <Text style={styles.title} variant="titleLarge">
              Lista das minhas plantas
            </Text>
            <View style={styles.plantsContainer}>
              {myPlants.map((plant) => (
                <TouchableOpacity
                  key={plant.id}
                  activeOpacity={0.6}
                  onPress={() => handleSelectingPlant(plant)}
                >
                  <ProductCardCategory
                    image={plant.category.image}
                    text={plant.name}
                    category={plant.category.name}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <EmptyPlants />
        )}
      </ScrollView>

      <NavigationBarBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    paddingBottom: 110,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 30,
  },

  plantsContainer: {
    rowGap: 10
  }
});
