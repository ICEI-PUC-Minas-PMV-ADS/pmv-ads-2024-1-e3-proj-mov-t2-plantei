import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";
import Theme from "../style/Theme";
import Arrow from "../../assets/arrow.svg";

export default function ProductCardCategory({
  image,
  text,
  category,
  showArrow = true,
}) {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.cardContent}>
          <View style={{ marginRight: 12 }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: image }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={{ marginRight: 12 }} variant="titleMedium">
              {text}
            </Text>
            <Text style={{ marginRight: 12 }} variant="bodySmall">
              {category}
            </Text>
          </View>
        </View>
      </View>
      {showArrow && <Arrow />}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Theme.colors.secondaryContainer,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: "space-between",
  },

  cardImg: {
    width: 40,
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
