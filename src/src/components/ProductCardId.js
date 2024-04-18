import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Theme from "../style/Theme";
import Arrow from "../../assets/arrow.svg";

export default function ProductCardId({ image, text, id }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={{ marginRight: 12 }}>{image}</View>
        <Text style={{ marginRight: 12 }} variant="titleMedium">
          {text}
        </Text>
        <Text style={styles.cardTag} variant="labelSmall">
          {id}
        </Text>
      </View>
      <Arrow />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Theme.colors.secondaryContainer,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Theme.colors.outlineVariant,
    justifyContent: "space-between",
  },

  cardImg: {
    width: 40,
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  cardTag: {
    backgroundColor: Theme.colors.onPrimary,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 15,
  },
});
