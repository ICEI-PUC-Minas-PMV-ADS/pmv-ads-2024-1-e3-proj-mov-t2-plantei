import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import Theme from "../style/Theme";

import Plant from "../../assets/plant1.svg";
import ProductCard from "../components/ProductCard";
import NavigationBarBottom from "../components/NavigationBarBottom";
import NavigationBar from "../components/NavigationBar";

export default function SelectCategory() {
  return (
    <>
          <NavigationBar title="Adicionar Planta" />

      <ScrollView>
        <View>
          <View style={styles.container}>
            <Text style={styles.title} variant="titleLarge">
              Selecione uma categoria{"\n"}para sua planta
            </Text>
            <View style={[styles.cardGroup, { marginTop: 30 }]}>
              <View style={[styles.card, { marginRight: 10 }]}>
                <ProductCard image={<Plant />} text="Nova Planta" />
              </View>
              <View style={styles.card}>
                <ProductCard image={<Plant />} text="Nova Planta" />
              </View>
            </View>
            <View style={[styles.cardGroup, { marginTop: 10 }]}>
              <View style={[styles.card, { marginRight: 10 }]}>
                <ProductCard image={<Plant />} text="Nova Planta" />
              </View>
              <View style={styles.card}>
                <ProductCard image={<Plant />} text="Nova Planta" />
              </View>
            </View>
            <View style={[styles.cardGroup, { marginTop: 10 }]}>
              <View style={[styles.card, { marginRight: 10 }]}>
                <ProductCard image={<Plant />} text="Nova Planta" />
              </View>
              <View style={styles.card}>
                <ProductCard image={<Plant />} text="Nova Planta" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <NavigationBarBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 0,
  },

  homeHeaderBackground: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.onPrimaryprimary,
  },

  homeHeaderContainer: {
    padding: 30,
  },

  homeHeaderUser: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  homeHeaderNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navItem: {
    flex: 1,
    backgroundColor: Theme.colors.surfaceTint,
    padding: 20,
    borderRadius: 15,
  },

  title: {
    fontWeight: "bold",
  },

  textColor: {
    color: Theme.colors.onPrimary,
  },

  image: {
    width: 50,
    height: 50,
  },

  card: {
    flex: 1,
  },

  cardGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
