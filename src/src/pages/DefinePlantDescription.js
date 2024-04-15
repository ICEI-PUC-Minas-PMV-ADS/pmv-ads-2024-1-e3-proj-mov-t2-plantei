import { View, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import NavigationBar from '../components/NavigationBar';
import ThreeSteps from '../components/ThreeSteps';
import NextAndPreviousPageButtons from '../components/NextAndPreviousPageButtons';

import Theme from '../style/Theme';

export default function DefinePlantDescription() {
  return (
    <>
      <NavigationBar title="Cadastrar planta personalizada" />

      <View style={styles.container}>
        <View style={styles.content}>
          <ThreeSteps currentStep={2} />
          <Text style={styles.title}>Defina uma boa descrição para sua planta</Text>
          <TextInput
            style={styles.input}
            outlineStyle={styles.input}
            multiline
            mode="outlined"
            placeholder="Descrição"
          />
          <Text style={styles.exampleText}>Exemplo: Adora uma temperatura amena e iluminação indireta.</Text>
        </View>
        <NextAndPreviousPageButtons nextPage={'DefineFrequencyOfTasks'} />
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
    maxWidth: 256,
    paddingVertical: 26,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  input: {
    height: 140,
    borderColor: Theme.colors.outlineVariant,
  },

  exampleText: {
    paddingTop: 4,
    paddingHorizontal: 16
  }
});
