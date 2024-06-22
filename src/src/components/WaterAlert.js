import React, { useContext, useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { Text, Divider } from "react-native-paper";
import Water from "../../assets/water-icon.svg";
import TaskService from "../../src/services/TaskService";
import ConfirmPopUp from "../components/ConfirmPopUp";
import { useNavigation } from "@react-navigation/native";
import api from "../../src/services/api";
import { UserContext } from "../contexts/UserContext";

export default function WaterAlert({ id, plantId, date, text, redirect }) {
  const { user } = useContext(UserContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
    setModalVisible(true);
    await TaskService.updateStatus(id, 2, plantId, "Rega", user);
  };

  return (
    <>
      <View style={styles.card}>
        <View>
          <Text style={{ marginRight: 12 }} variant="titleSmall">
            {date}
          </Text>
          <View style={styles.cardContent}>
            <View
              style={{
                gap: 22,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              <Water width={40} />
              <View>
                <Text style={{ marginRight: 12 }} variant="titleMedium">
                  Regar {"\n"}
                  {text}
                </Text>
              </View>
            </View>
          </View>
          <Divider />
          <View style={styles.cardContent}>
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Switch
                trackColor={{ false: "#ebf1eb", true: "#ebf1eb" }}
                thumbColor={isEnabled ? "#42a259" : "#f4f3f4"}
                ios_backgroundColor="#ebf1eb"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text style={{ marginRight: 12 }} variant="bodySmall">
                Marque como concluído quando{"\n"}finalizar a tarefa!
              </Text>
            </View>
          </View>
        </View>
      </View>

      {modalVisible && (
        <ConfirmPopUp
          modalVisible={modalVisible}
          onChangeModalVisible={setModalVisible}
          onConfirm={async () => {
            if (redirect == "plant") {
              const { data } = await api.get(
                `/plants/${plantId}?_expand=category`
              );
              const plant = data;
              navigation.push("ListFutureTasksDetails", { plant: plant });
            } else {
              navigation.push("ListFutureTasksByPeriod");
            }
          }}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#C1C9BE",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: "space-between",
  },

  cardImg: {
    width: 40,
  },

  cardContent: {
    alignItems: "start",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
  },
});
