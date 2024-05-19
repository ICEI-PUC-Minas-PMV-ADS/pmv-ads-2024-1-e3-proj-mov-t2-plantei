import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import Theme from "../style/Theme";

const NavigationBarMiddle = () => {
  const [activeButton, setActiveButton] = useState("Planta");
  const navigation = useNavigation();
  const route = useRoute();

  // Function to handle button press
  const handlePress = (button) => {
    setActiveButton(button);
    if (button === "Planta") {
      navigation.navigate('ListFutureTasks');
    } else if (button === "Período") {
      navigation.navigate('ListFutureTasksByPeriod');
    }
  };

  // Effect to update active button based on route
  useFocusEffect(
    React.useCallback(() => {
      if (route.name === 'ListFutureTasks') {
        setActiveButton('Planta');
      } else if (route.name === 'ListFutureTasksByPeriod') {
        setActiveButton('Período');
      }
    }, [route])
  );

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.buttonContainer,
          activeButton === "Planta" && styles.activeButton,
        ]}
        underlayColor="transparent"
        onPress={() => handlePress("Planta")}
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
        onPress={() => handlePress("Período")}
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
