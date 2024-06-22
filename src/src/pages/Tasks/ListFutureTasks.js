import { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";
import api from "../../services/api";
import EmptyTasks from "./EmptyTasks";
import NavigationBarBottom from "../../components/NavigationBarBottom";
import NavigationBar from "../../components/NavigationBar";
import NavigationBarMiddle from "../../components/NavigationBarMiddle";
import ProductCardCategory from "../../components/ProductCardCategory";

export default function ListFutureTasks({ route }) {
  const { user } = useContext(UserContext)
  const parametersToReload = route.params;
  const [myPlants, setMyPlants] = useState([])
  const [isLoadingPlants, setIsLoadingPlants] = useState(true)
  const { navigate } = useNavigation()

  async function getMyPlants() {
    setIsLoadingPlants(true)
    try {
      const { data } = await api.get(`/plants?userId=${user.id}&_expand=category`);
      setMyPlants(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoadingPlants(false)
  }

  function handleSelectingPlant(plant) {
    navigate('ListFutureTasksDetails', { plant: plant })
  }

  useEffect(() => {
    getMyPlants()
  }, [parametersToReload])

  if (isLoadingPlants) {
    return <></>
  }

  return (
    <>
      <NavigationBar title="Minhas tarefas" />
      <NavigationBarMiddle />

      <ScrollView style={styles.container}>
        {!isLoadingPlants && myPlants.length > 0 ? (
          <View style={styles.plantContent}>
            <Text style={styles.title} variant="titleLarge">
              Próximas tarefas
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
          <EmptyTasks />
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
  },

  plantContent: {
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
