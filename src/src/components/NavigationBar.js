import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function NavigationBar() {
  return (
    <Appbar.Header statusBarHeight={0} style={styles.header} >
      <Appbar.BackAction onPress={() => { }} />
      <Appbar.Content titleStyle={styles.titleHeader} title="Cadastrar planta personalizada" />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },

  titleHeader: {
    fontSize: 14
  },
});
