import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

import Emoji from "../../assets/emoji-crying.svg";
import NavigationBarBottom from "../components/NavigationBarBottom";
import NavigationBar from "../components/NavigationBar";


export default function EmptyPlant() {
  return (
    <>
      <NavigationBar title="Minhas plantas" />

      <View style={styles.container}>
        <View style={styles.img}>
        <Emoji/>
        </View>
        <Text variant="headlineLarge" style={styles.title}>
          Você ainda{"\n"}não possui plantas{"\n"}cadastradas
        </Text>
        <Text variant="bodyLarge" style={styles.subtitle}>
          Comece seu jardim!{"\n"}Descubra a alegria de cuidar{"\n"}de plantas
          em seu lar.
        </Text>
        <Button
          style={styles.buttonPrimary}
          icon=""
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Quero cadastrar uma planta
        </Button>
      </View>

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

  img: {
    alignItems: 'center',
    marginBottom: 30,
  },

  title: {
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    marginBottom: 30,
    textAlign: "center",
  },
});
