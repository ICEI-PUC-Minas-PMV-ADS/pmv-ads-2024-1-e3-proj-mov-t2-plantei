import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import Theme from "../style/Theme";

export default function TaskDetailsCard({ icon, color, daysForTheTask, taskName }) {
  function checkTheNumberOfDays(days, taskName) {
    let text = ''

    if (days === 0) {
      text = 'Valor inválido!'
    } else if (days === 7) {
      text = `A ${taskName} deve ser feita uma vez por semana`
    } else if (days === 1) {
      text = `A ${taskName} deve ser feita todos os dias`
    } else if (days === 30) {
      text = `A ${taskName} deve ser feita uma vez por mês`
    } else if (days === 365) {
      text = `A ${taskName} deve ser feita uma vez por ano`
    } else if (days < 30) {
      text = `A ${taskName} deve ser feita a cada ${days} dias`
    } else if (days < 365) {
      text = `A ${taskName} deve ser feita a cada ${Math.floor(days / 30)} meses`
    } else if (days > 365) {
      text = `A ${taskName} deve ser feita a cada ${Math.floor(days / 365)} anos`
    }

    return text
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={[styles.text, { color: color }]}>
        {checkTheNumberOfDays(daysForTheTask, taskName)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: Theme.colors.background,
    borderWidth: 1,
    borderColor: Theme.colors.outlineVariant,
    borderRadius: 15,
    marginBottom: 10
  },

  iconContainer: {
    marginRight: 10,
  },

  text: {
    maxWidth: "75%"
  }
});