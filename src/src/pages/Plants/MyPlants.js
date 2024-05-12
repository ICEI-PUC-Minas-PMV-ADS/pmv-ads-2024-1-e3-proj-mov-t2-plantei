import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import { RegisterPlantContext } from "../../contexts/RegisterPlantContext";
import EmptyPlants from "./EmptyPlants";
import NavigationBarBottom from "../../components/NavigationBarBottom";
import NavigationBar from "../../components/NavigationBar";
import ProductCardCategory from "../../components/ProductCardCategory";

export default function MyPlants() {
  const { navigate } = useNavigation()
  const { changePlantDataAdded } = useContext(RegisterPlantContext)
  const [myPlants, setMyPlants] = useState([])

  async function getMyPlants() {
    try {
      const { data } = await api.get('/plants?_embed=category');
      setMyPlants(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getCustomFrequency(plant) {
    try {
      const { data } = await api.get(`/plants_frequency?plantId=${plant.id}`);
      changePlantDataAdded({
        ...plant,
        category: {
          ...plant.category,
          watering_frequency_days: data[0].watering_frequency_days,
          fertilization_frequency_days: data[0].fertilization_frequency_days / 7,
          vase_change_frequency_days: data[0].vase_change_frequency_days / 365
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  function handleSelectingPlant(plant) {
    plant.category.name === "Personalizada" ? (
      getCustomFrequency(plant)
    ) : (
      changePlantDataAdded({
        ...plant,
        category: {
          ...plant.category,
          watering_frequency_days: plant.category.watering_frequency_days,
          fertilization_frequency_days: plant.category.fertilization_frequency_days / 7,
          vase_change_frequency_days: plant.category.vase_change_frequency_days / 365
        }
      })
    )

    navigate('PlantDetails')
  }

  useEffect(() => {
    getMyPlants()
  }, [])

  return (
    <>
      <NavigationBar title="Minhas plantas" />

      <ScrollView style={styles.container}>
        {myPlants.length > 0 ? (
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
