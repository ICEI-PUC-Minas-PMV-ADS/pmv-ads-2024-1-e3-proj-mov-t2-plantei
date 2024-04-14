import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function TwoButtonsHorizontally() {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="contained-tonal"
        onPress={() => console.log('Pressed')}>
        Voltar
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Próximo
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 37.5,
    flexDirection: 'row',
    columnGap: 9,
    width: '100%'
  },

  button: {
    flex: 1,
  }
});
