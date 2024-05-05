import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Theme from "../style/Theme";

const NavigationBarMiddle = () => {
  const [activeButton, setActiveButton] = useState("Planta");
  const navigation = useNavigation(); // Get navigation reference

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.buttonContainer,
          activeButton === "Planta" && styles.activeButton,
        ]}
        underlayColor="transparent"
        onPress={() => {setActiveButton("Planta");
        navigation.navigate('ListFutureTasks');
      }}
      >
        <Text
          style={[
            styles.buttonText,
            { color: activeButton === "Planta" ? "#41A259" : "black" },
          ]}
        >
          Planta
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.buttonContainer,
          activeButton === "Período" && styles.activeButton,
        ]}
        underlayColor="transparent"
        onPress={() => {setActiveButton("Período");
        navigation.navigate('ListFutureTasksByPeriod');
      }}
      >
        <Text
          style={[
            styles.buttonText,
            { color: activeButton === "Período" ? "#41A259" : "black" },
          ]}
        >
          Período
        </Text>
      </TouchableHighlight>
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
    backgroundColor: Theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    marginBottom: 10,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderColor: Theme.colors.primary,
  },
});

export default NavigationBarMiddle;