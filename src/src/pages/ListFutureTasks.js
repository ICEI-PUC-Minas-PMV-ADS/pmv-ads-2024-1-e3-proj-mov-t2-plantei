import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native-paper";

import NavigationBarBottom from "../components/NavigationBarBottom";
import NavigationBar from "../components/NavigationBar";
import NavigationBarMiddle from "../components/NavigationBarMiddle";
import ProductCardCategory from "../components/ProductCardCategory";

import Plant from "../../assets/plant1.svg";

export default function ListFutureTasks() {
  return (
    <>
      <NavigationBar title="Futuras tarefas" />

      <NavigationBarMiddle />

      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title} variant="titleLarge">
            Próximas tarefas
          </Text>
          <View style={{ marginBottom: 10 }}>
            <ProductCardCategory
              image={<Plant width={40} />}
              text="Nome da planta"
              category="Peperômia"
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <ProductCardCategory
              image={<Plant width={40} />}
              text="Nome da planta"
              category="Peperômia"
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <ProductCardCategory
              image={<Plant width={40} />}
              text="Nome da planta"
              category="Peperômia"
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <ProductCardCategory
              image={<Plant width={40} />}
              text="Nome da planta"
              category="Peperômia"
            />
          </View>
          <View style={{ marginBottom: 10 }}>
            <ProductCardCategory
              image={<Plant width={40} />}
              text="Nome da planta"
              category="Peperômia"
            />
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
