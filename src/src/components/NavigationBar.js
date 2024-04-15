import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function NavigationBar({ title }) {
  const { goBack, canGoBack } = useNavigation()

  return (
    <Appbar.Header statusBarHeight={0} style={styles.header} >
      <Appbar.BackAction onPress={() => canGoBack() && goBack()} />
      <Appbar.Content titleStyle={styles.titleHeader} title={title} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 20,
  },

  titleHeader: {
    fontSize: 14
  },
});
