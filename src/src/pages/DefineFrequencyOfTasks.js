import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import NavigationBar from '../components/NavigationBar';
import ThreeSteps from '../components/ThreeSteps';
import InputNumberSpinner from '../components/InputNumberSpinner';
import NextAndPreviousPageButtons from '../components/NextAndPreviousPageButtons';

import WaterIcon from "../../assets/water-icon.svg";
import LeafIcon from "../../assets/leaf-icon.svg";
import PlantVaseIcon from "../../assets/plant-vase-icon.svg";

import Theme from "../style/Theme"

export default function DefineFrequencyOfTasks() {
  return (
    <>
      <NavigationBar title="Cadastrar planta personalizada" />
      
      <View style={styles.container}>
        <View style={styles.content}>
          <ThreeSteps currentStep={3} />
          <Text style={styles.title}>Defina a frequência das tarefas abaixo</Text>

          <View>
            <View style={styles.containerFunctionality}>
              <View style={styles.containerTaskType}>
                <WaterIcon />
                <Text style={styles.wateringTaskText}>Rega</Text>
              </View>
              <View style={styles.controlContainer}>
                <Text>Em dias</Text>
                <InputNumberSpinner />
              </View>
            </View>

            <View style={styles.containerFunctionality}>
              <View style={styles.containerTaskType}>
                <LeafIcon />
                <Text style={styles.fertilizerTaskText}>Adubo</Text>
              </View>
              <View style={styles.controlContainer}>
                <Text>Em dias</Text>
                <InputNumberSpinner />
              </View>
            </View>

            <View style={styles.containerFunctionality}>
              <View style={styles.containerTaskType}>
                <PlantVaseIcon />
                <Text style={styles.taskTextToChangeTheVase}>Vaso</Text>
              </View>
              <View style={styles.controlContainer}>
                <Text>Em dias</Text>
                <InputNumberSpinner />
              </View>
            </View>
          </View>
        </View>
        <NextAndPreviousPageButtons />
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
    maxWidth: 200,
    paddingVertical: 26,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  containerFunctionality: {
    flexDirection: 'row',
    columnGap: 28,
    marginBottom: 30
  },

  containerTaskType: {
    width: 91,
    height: 87,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 2,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Theme.colors.outlineVariant,
  },

  wateringTaskText: {
    color: '#006874',
  },

  fertilizerTaskText: {
    color: '#795900',
  },

  taskTextToChangeTheVase: {
    color: '#1C5129',
  },

  controlContainer: {
    flex: 1,
    rowGap: 5,
    justifyContent: 'center',
  },
});