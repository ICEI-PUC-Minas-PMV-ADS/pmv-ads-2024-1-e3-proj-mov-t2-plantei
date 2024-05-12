import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// buttons to advance and return form -- alterar nome componente
export default function NextAndPreviousPageButtons({ onSubmit }) {
  const { canGoBack, goBack } = useNavigation()

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        mode="contained-tonal"
        onPress={() => canGoBack() && goBack()}>
        Voltar
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => onSubmit()}>
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
