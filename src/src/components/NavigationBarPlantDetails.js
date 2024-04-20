import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Theme from "../style/Theme";

export default function NavigationBarPlantDetails({ title }) {
  const { goBack, canGoBack } = useNavigation()
  const goEdit = () => console.log('edit');
  const goDelete = () => console.log('delete');

  return (
    <Appbar.Header statusBarHeight={0} style={styles.header} >
      <Appbar.BackAction onPress={() => canGoBack() && goBack()} />
      <Appbar.Content titleStyle={styles.titleHeader} title={title} />
      <Appbar.Action icon="playlist-edit" onPress={goEdit} />
      <Appbar.Action icon="trash-can-outline" onPress={goDelete} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.secondaryContainer,
  },

  titleHeader: {
    fontSize: 14
  },
});
