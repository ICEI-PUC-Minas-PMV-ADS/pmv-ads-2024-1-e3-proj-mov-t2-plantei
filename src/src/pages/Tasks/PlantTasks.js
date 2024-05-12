import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";

import NavigationBar from "../../components/NavigationBar";
import ProductCardCategory from "../../components/ProductCardCategory";

import Plant from "../../../assets/plant1.svg";
import Leaf from "../../../assets/leaf-icon.svg";
import Vase from "../../../assets/plant-vase-icon.svg";
import FertilizeAlert from "../../components/FertilizeAlert";
import VaseAlert from "../../components/VaseAlert";

export default function PlantTasks() {
  return (
    <>
      <NavigationBar title="Minhas plantas" />

      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title} variant="titleLarge">
            Próximas tarefas
          </Text>
          <View style={{ marginBottom: 10 }}>
            <ProductCardCategory
              image="https://i.imgur.com/pJcQkXG.png"
              text="Nome da planta"
              category="Peperômia"
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <FertilizeAlert image={<Leaf width={40} />} text="Nome da planta" />
          </View>
          <View style={{ marginBottom: 10 }}>
            <VaseAlert image={<Vase width={40} />} text="Trocar vaso" />
          </View>
        </View>
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
