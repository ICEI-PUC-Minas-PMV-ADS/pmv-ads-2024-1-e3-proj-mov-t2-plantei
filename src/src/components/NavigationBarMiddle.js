import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NavigationBarMiddle = () => {
  const [activeButton, setActiveButton] = useState("Planta");

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.buttonContainer,
          activeButton === "Planta" && styles.activeButton,
        ]}
      >
        <Button
          title="Planta"
          color="#516351"
          onPress={() => setActiveButton("Planta")}
        />
      </View>
      <View
        style={[
          styles.buttonContainer,
          activeButton === "Período" && styles.activeButton,
        ]}
      >
        <Button
          title="Período"
          color="#516351"
          onPress={() => setActiveButton("Período")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  activeButton: {
    borderBottomWidth: 1.5,
    borderColor: "#41A259",
  },
});

export default NavigationBarMiddle;
