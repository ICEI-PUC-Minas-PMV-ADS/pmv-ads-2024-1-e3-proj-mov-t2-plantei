import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import NavigationBar from "../../components/NavigationBar";
import ProductCardCategory from "../../components/ProductCardCategory";
import TaskService from "../../../src/services/TaskService";

import WaterAlert from "../../components/WaterAlert";
import FertilizeAlert from "../../components/FertilizeAlert";
import VaseAlert from "../../components/VaseAlert";

export default function ListFutureTasksDetails({ route }) {
  const { plant } = route.params;
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getOnGoingTasks() {
    setLoading(true);
    try {
      const response = await api.get(
        `/tasks?plantId=${plant.id}&status=1&_expand=plant&_sort=notificationDate`
      );
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getOnGoingTasks();
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <NavigationBar title="Futuras tarefas" />
      <ScrollView style={styles.container}>
        <Text style={styles.title} variant="titleLarge">
          Próximas tarefas
        </Text>
        <View style={{ marginBottom: 10 }}>
          <ProductCardCategory
            image={plant.category.image}
            text={plant.name}
            category={plant.category.name}
            showArrow={false}
          />
        </View>
        {!loading && tasks.length > 0 ? (
          <View>
            {tasks.map((task) => (
              <View key={task.id}>
                <View style={{ marginBottom: 10 }}>
                  {task.tipo == "Vaso" ? (
                    <VaseAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={TaskService.createDataString(task.notificationDate)}
                      text={task.plant.name}
                      redirect= "plant"
                    />
                  ) : task.tipo == "Fertilizar" ? (
                    <FertilizeAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={TaskService.createDataString(task.notificationDate)}
                      text={task.plant.name}
                      redirect= "plant"
                    />
                  ) : (
                    <WaterAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={TaskService.createDataString(task.notificationDate)}
                      text={task.plant.name}
                      redirect= "plant"
                    />
                  )}
                </View>
              </View>
            ))}
          </View>
        ) : (
          <></>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 30,
  },
});
