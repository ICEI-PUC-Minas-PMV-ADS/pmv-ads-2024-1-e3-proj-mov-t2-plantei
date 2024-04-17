import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import Theme from "../style/Theme";

import Plant from "../../assets/plant-icon.svg";
import Task from "../../assets/splitscreen_add-icon";
import Article from "../../assets/article-icon.svg";

import PlantCard from "../../assets/plant1.svg";
import ProductCard from "../components/ProductCard";
import NavigationBarBottom from "../components/NavigationBarBottom";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.homeHeaderBackground}>
            <View style={styles.homeHeaderContainer}>
              <View style={styles.homeHeaderUser}>
                <Text
                  style={[styles.title, styles.textColor]}
                  variant="titleLarge"
                >
                  Olá, Isabella
                </Text>
                <Image
                  style={styles.image}
                  source={require("../../assets/photo-home.png")}
                />
              </View>
              <View style={styles.homeHeaderNav}>
                <View style={styles.navItem} marginRight={10}>
                  <TouchableOpacity onPress={() => console.log("Pressed")}>
                    <Plant width={24} height={24} marginBottom={10} />
                    <Text style={styles.textColor} variant="bodySmall">
                      Minhas{"\n"}plantas
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.navItem} marginRight={10}>
                  <TouchableOpacity onPress={() => console.log("Pressed")}>
                    <Task width={24} height={24} marginBottom={10} />
                    <Text style={styles.textColor} variant="bodySmall">
                      Minhas{"\n"}plantas
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.navItem}>
                  <TouchableOpacity onPress={() => console.log("Pressed")}>
                    <Article width={24} height={24} marginBottom={10} />
                    <Text style={styles.textColor} variant="bodySmall">
                      Guia{"\n"}verde
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.title} variant="titleLarge">
              Plantas para você
            </Text>
            <View style={[styles.cardGroup, { marginTop: 30 }]}>
              <View style={[styles.card, { marginRight: 10 }]}>
                <ProductCard image={<PlantCard />} text="Nova Planta" />
              </View>
              <View style={styles.card}>
                <ProductCard image={<PlantCard />} text="Nova Planta" />
              </View>
            </View>
            <View style={[styles.cardGroup, { marginTop: 10 }]}>
              <View style={[styles.card, { marginRight: 10 }]}>
                <ProductCard image={<PlantCard />} text="Nova Planta" />
              </View>
              <View style={styles.card}>
                <ProductCard image={<PlantCard />} text="Nova Planta" />
              </View>
            </View>
            <View style={[styles.cardGroup, { marginTop: 10 }]}>
              <View style={[styles.card, { marginRight: 10 }]}>
                <ProductCard image={<PlantCard />} text="Nova Planta" />
              </View>
              <View style={styles.card}>
                <ProductCard image={<PlantCard />} text="Nova Planta" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <NavigationBarBottom/>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
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
