import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import Theme from "../style/Theme";

export default function ProductCard({ image, text }) {
  return (
    <View>
      <View style={styles.card}>
        <View>
          <View style={styles.cardImage}>
            <Image
              style={{ width: 75, height: 75 }}
              source={{ uri: image }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardText}>
            <Text variant="labelLarge" style={styles.plantName}>{text}</Text>
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

  plantName: {
    textAlign: 'center'
  }
});
