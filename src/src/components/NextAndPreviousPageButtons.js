import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function NextAndPreviousPageButtons({ nextPage }) {
  const { navigate, canGoBack, goBack } = useNavigation()

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
        onPress={() => nextPage && navigate(nextPage)}>
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
