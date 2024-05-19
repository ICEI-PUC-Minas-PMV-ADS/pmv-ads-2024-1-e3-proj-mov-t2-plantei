import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { format, parseISO } from "date-fns";

import NavigationBar from "../../components/NavigationBar";
import NavigationBarMiddle from "../../components/NavigationBarMiddle";
import NavigationBarBottom from "../../components/NavigationBarBottom";

import FertilizeAlert from "../../components/FertilizeAlert";
import VaseAlert from "../../components/VaseAlert";
import WaterAlert from "../../components/WaterAlert";
import api from "../../services/api";

export default function ListFutureTasksByPeriod() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getOnGoingTasks() {
    setLoading(true);
    try {
      const response = await api.get("/tasks?userId=1&status=1&_embed=plant&_sort=notificationDate");
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
          <View>
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
                      date={createDataString(task.notificationDate)}
                      text={task.plant.name}
                    />
                  ) : task.tipo == "Fertilizar" ? (
                    <FertilizeAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={createDataString(task.notificationDate)}
                      text={task.plant.name}
                    />
                  ) : (
                    <WaterAlert
                      id={task.id}
                      plantId={task.plant.id}
                      date={createDataString(task.notificationDate)}
                      text={task.plant.name}
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

const isDateOlderThanNow = (date) => {
  const now = new Date();
  return new Date(date) < now;
};

const createDataString = (date) => {
  return format(
    parseISO(date),
    "dd/MM/yyyy"
  ) + (isDateOlderThanNow(date) ? ' - Atrasado' : '')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    marginBottom: 80,
  },

  title: {
    fontWeight: "bold",
    marginBottom: 30,
  },
});
