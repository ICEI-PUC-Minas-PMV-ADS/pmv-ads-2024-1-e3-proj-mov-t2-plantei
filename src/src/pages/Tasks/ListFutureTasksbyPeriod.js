import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";

import NavigationBar from "../../components/NavigationBar";
import NavigationBarMiddle from "../../components/NavigationBarMiddle";
import NavigationBarBottom from "../../components/NavigationBarBottom";

import { UserContext } from "../../contexts/UserContext";
import TaskService from "../../../src/services/TaskService";
import FertilizeAlert from "../../components/FertilizeAlert";
import VaseAlert from "../../components/VaseAlert";
import WaterAlert from "../../components/WaterAlert";
import api from "../../services/api";

export default function ListFutureTasksByPeriod() {
  const { user } = useContext(UserContext)
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getOnGoingTasks() {
    setLoading(true);
    try {
      const response = await api.get(`/tasks?userId=${user.id}&status=1&_expand=plant&_sort=notificationDate`);
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

      <NavigationBarMiddle />

      <ScrollView style={styles.container}>
        {!loading && tasks.length > 0 ? (
          <View style={styles.content}>
            <Text style={styles.title} variant="titleLarge">
              Próximas tarefas
            </Text>
            {tasks.map((task) => (
              <View key={task.id}>
                <View style={{ marginBottom: 10 }}>
                  {task.tipo == "Vaso" ? (
                    <VaseAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={TaskService.createDataString(task.notificationDate)}
                      text={task.plant.name}
                      redirect=""
                    />
                  ) : task.tipo == "Fertilizar" ? (
                    <FertilizeAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={TaskService.createDataString(task.notificationDate)}
                      text={task.plant.name}
                      redirect=""
                    />
                  ) : (
                    <WaterAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={TaskService.createDataString(task.notificationDate)}
                      text={task.plant.name}
                      redirect=""
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

  content: {
    paddingBottom: 110,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 30,
  },
});
