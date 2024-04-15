import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import NavigationBar from '../components/NavigationBar';
import ThreeSteps from '../components/ThreeSteps';
import NextAndPreviousPageButtons from '../components/NextAndPreviousPageButtons';

import Plant from "../../assets/generic-plant.svg";

import Theme from '../style/Theme';

export default function DefinePlantName() {
  return (
    <>
      <NavigationBar title="Cadastrar planta personalizada" />

      <View style={styles.container}>
        <View style={styles.content}>
          <ThreeSteps currentStep={1} />
          <Text style={styles.title}>Como sua planta irá se chamar?</Text>

          <TextInput
            style={styles.input}
            outlineStyle={styles.input}
            mode="outlined"
            placeholder="Nome da planta"
          />

          <View style={styles.containerImage}>
            <Plant width={91} height={198} />
          </View>
        </View>
        <NextAndPreviousPageButtons nextPage={'DefinePlantDescription'} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 37.5,
    paddingTop: 0,
    justifyContent: 'space-between',
  },

  content: {
    flexGrow: 1,
  },

  title: {
    maxWidth: 170,
    paddingVertical: 26,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  input: {
    paddingVertical: 4,
    borderColor: Theme.colors.outlineVariant,
  },

  containerImage: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 37.5,
    borderRadius: 15,
    backgroundColor: '#F2FBF2'
  },
});
