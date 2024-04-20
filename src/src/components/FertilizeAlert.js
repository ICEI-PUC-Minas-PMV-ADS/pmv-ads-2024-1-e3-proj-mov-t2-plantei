import React, { useState } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { Text, Divider } from "react-native-paper";
import Theme from "../style/Theme";

export default function FertilizeAlert({
  image,
  text,
  category,
  showArrow = true,
}) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.card}>
      <View>
        <Text style={{ marginRight: 12 }} variant="titleSmall">
          24/05/2024
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
            {image}
            <Text style={{ marginRight: 12 }} variant="titleMedium">
              {text}
            </Text>
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
            <Text style={{ marginRight: 12 }} variant="titleSmall">
              Marque como concluído quando{"\n"}finalizar a tarefa!
            </Text>
          </View>
        </View>
      </View>
    </View>
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
    flexDirection: "row",
    alignItems: "center",
  },
});
