import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";

import NavigationBarBottom from "../components/NavigationBarBottom";
import NavigationBar from "../components/NavigationBar";
import ProductCardId from "../components/ProductCardId";

import PlantCard from "../../assets/plant1.svg";

export default function MyPlants() {
  return (
    <>
      <NavigationBar title="Minhas plantas" />

      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title} variant="titleLarge">
            Lista das minhas plantas
          </Text>
          <View style={{ marginBottom: 10 }}>
            <ProductCardId image={<PlantCard />} text="Nova Planta" id="#001" />
          </View>
          <View style={{ marginBottom: 10 }}>
            <ProductCardId image={<PlantCard />} text="Nova Planta" id="#001" />
          </View>
          <View style={{ marginBottom: 10 }}>
            <ProductCardId image={<PlantCard />} text="Nova Planta" id="#001" />
          </View>
          <View style={{ marginBottom: 10 }}>
            <ProductCardId image={<PlantCard />} text="Nova Planta" id="#001" />
          </View>
        </View>
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

  title: {
    fontWeight: "bold",
    marginBottom: 30,
  },
});
