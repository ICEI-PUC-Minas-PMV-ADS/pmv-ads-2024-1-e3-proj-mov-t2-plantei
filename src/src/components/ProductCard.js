import { View, StyleSheet} from "react-native";
import { Text } from "react-native-paper";
import Theme from "../style/Theme";

import PlantCard from "../../assets/plant1.svg";

export default function ProductCard() {
  return (
    <View>
        <View style={styles.card}>
          <View>
            <View style={styles.cardImage}>
              <PlantCard />
            </View>
            <View style={styles.cardText}>
              <Text variant="labelLarge">Comigo ninguém pode</Text>
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: Theme.colors.outlineVariant,
    borderRadius: 15,
  },

  cardImage: {
    backgroundColor: Theme.colors.secondaryContainer,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    height: 120,
  },

  cardText: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    height: 70,
  },
});
