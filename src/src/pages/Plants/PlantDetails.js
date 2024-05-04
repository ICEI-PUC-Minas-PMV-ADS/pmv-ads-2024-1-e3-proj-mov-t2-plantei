import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-paper";

import Theme from "../../style/Theme";
import NavigationBarPlantDetails from "../../components/NavigationBarPlantDetails";

import Plant from "../../../assets/plant1.svg";
import WaterIcon from "../../../assets/water-icon.svg";
import LeafIcon from "../../../assets/leaf-icon.svg";
import PlantVaseIcon from "../../../assets/plant-vase-icon.svg";

export default function PlantDetails() {
  return (
    <>
      <NavigationBarPlantDetails title="Minhas plantas" />
      <View>
        <View style={styles.headerBackground}>
          <View style={styles.content}>
            <Plant style={{ marginBottom: 20 }} width={130} height={130} />
            <Text
              style={[styles.title, { marginBottom: 10 }]}
              variant="titleLarge"
            >
              Nome da planta
            </Text>
            <Text
              style={{ textAlign: "center" }}
              variant="bodyLarge"
            >
              Adora uma temperatura amena{"\n"}e iluminação indireta.
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={[styles.card, { marginBottom: 10 }]}>
            <WaterIcon style={{ marginRight: 10 }} />
            <Text style={{ color: '#006874' }}>A rega deve ser feita {"\n"}a cada 7 dias</Text>
          </View>
          <View style={[styles.card, { marginBottom: 10 }]}>
            <LeafIcon style={{ marginRight: 10 }} />
            <Text style={{ color: '#795900' }}>A fertilização deve ser feita {"\n"}a cada 4 semanas</Text>
          </View>
          <View style={[styles.card, { marginBottom: 30 }]}>
            <PlantVaseIcon style={{ marginRight: 10 }} />
            <Text style={{ color: '#1C5129' }} >A troca de vaso deve ser feita {"\n"}a cada 2 anos</Text>
          </View>
          <Button
            style={styles.buttonPrimary}
            icon=""
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Visualizar tarefas dessa planta
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  headerBackground: {
    backgroundColor: Theme.colors.secondaryContainer,
  },

  content: {
    paddingVertical: 30,
    marginTop: -20,
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: Theme.colors.background,
    borderWidth: 1,
    borderColor: Theme.colors.outlineVariant,
    borderRadius: 15,
  },
});
