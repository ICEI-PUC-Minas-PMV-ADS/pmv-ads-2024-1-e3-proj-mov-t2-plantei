import { View, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import { Text } from 'react-native-paper';

import { RegisterPlantContext } from '../../contexts/RegisterPlantContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../services/api';
import NavigationBar from '../../components/NavigationBar';
import ThreeSteps from '../../components/ThreeSteps';
import InputNumberSpinner from '../../components/InputNumberSpinner';
import ButtonsToAdvanceAndReturnForm from '../../components/ButtonsToAdvanceAndReturnForm';
import TaskDetailsCard from '../../components/TaskDetailsCard';
import ConfirmRegistrationPopUp from '../../components/ConfirmRegistrationPopUp';

import WaterIcon from "../../../assets/water-icon.svg";
import LeafIcon from "../../../assets/leaf-icon.svg";
import PlantVaseIcon from "../../../assets/plant-vase-icon.svg";

import Theme from "../../style/Theme"

export default function DefineFrequencyOfTasks() {
  const { user } = useContext(UserContext)
  const { plantDataAdded } = useContext(RegisterPlantContext)

  const {
    watering_frequency_days: wateringFrequencyContext,
    fertilization_frequency_days: fertilizationFrequencyContext,
    vase_change_frequency_days: vaseChangeFrequencyContext
  } = plantDataAdded.category

  const { name: categoryName } = plantDataAdded.category
  const { httpMethod } = plantDataAdded
  const customPlantOrPlantEdit =
    categoryName === 'Personalizada' || httpMethod === "edit"

  let fertilizationFrequency = 0
  let vaseChangeFrequency = 0

  const [modalVisible, setModalVisible] = useState(false);

  const [wateringFrequencyInput, setWateringFrequencyInput]
    = useState(wateringFrequencyContext)
  const [fertilizationFrequencyInput, setFertilizationFrequencyInput]
    = useState(fertilizationFrequencyContext > 1 ? Math.floor(fertilizationFrequencyContext / 7) : 1)
  const [vaseChangeFrequencyInput, setVaseChangeFrequencyInput]
    = useState(vaseChangeFrequencyContext > 1 ? Math.floor(vaseChangeFrequencyContext / 365) : 1)

  function handleFrequencySubmit() {
    fertilizationFrequency
      = fertilizationFrequencyContext % 7 + fertilizationFrequencyInput * 7

    vaseChangeFrequency
      = vaseChangeFrequencyContext % 365 + vaseChangeFrequencyInput * 365

    httpMethod === 'post' ? (
      registerPlant()
    ) : (
      editPlant()
    )
  }

  async function registerPlant() {
    try {
      const { data } = await api.post('/plants', {
        userId: user.id,
        categoryId: plantDataAdded.category.id,
        name: plantDataAdded.name,
        description: plantDataAdded.description
      });
      registerFirstTasks(data.id)
    } catch (error) {
      console.error(error);
    }
  }

  async function registerFirstTasks(plantId) {
    function calculateNotificationDate(extraDays) {
      const currentDate = new Date()
      return new Date(currentDate.setDate(currentDate.getDate() + extraDays))
    }

    const tasks = {
      wateringTask: {
        userId: user.id,
        plantId: plantId,
        tipo: 'Rega',
        status: 1,
        notificationDate: calculateNotificationDate(wateringFrequencyInput)
      },
      fertilizationTask: {
        userId: user.id,
        plantId: plantId,
        tipo: 'Fertilizar',
        status: 1,
        notificationDate: calculateNotificationDate(fertilizationFrequency)
      },
      potChangeTask: {
        userId: user.id,
        plantId: plantId,
        tipo: 'Vaso',
        status: 1,
        notificationDate: calculateNotificationDate(vaseChangeFrequency)
      }
    }

    try {
      await api.post('/tasks', tasks.wateringTask);
      await api.post('/tasks', tasks.fertilizationTask);
      await api.post('/tasks', tasks.potChangeTask);
      categoryName === 'Personalizada' ? (
        registerTaskFrequencies(plantId)
      ) : (
        setModalVisible(!modalVisible))
    } catch (error) {
      console.error(error);
    }
  }

  async function registerTaskFrequencies(plantId) {
    try {
      await api.post('/plants_frequency', {
        plantId: plantId,
        watering_frequency_days: wateringFrequencyInput,
        fertilization_frequency_days: fertilizationFrequency,
        vase_change_frequency_days: vaseChangeFrequency,
      });
      setModalVisible(!modalVisible)
    } catch (error) {
      console.error(error);
    }
  }

  function haveAnyFrequenciesBeenEdited() {
    if (wateringFrequencyContext !== wateringFrequencyInput ||
      Math.floor(fertilizationFrequencyContext / 7) !== fertilizationFrequencyInput ||
      Math.floor(vaseChangeFrequencyContext / 365) !== vaseChangeFrequencyInput) {
      return true
    } else {
      return false
    }
  }

  async function editPlant() {
    try {
      const { data } = await api.patch(`/plants/${plantDataAdded.id}`, {
        categoryId: haveAnyFrequenciesBeenEdited() ? "1" : plantDataAdded.category.id,
        name: plantDataAdded.name,
        description: plantDataAdded.description
      });

      if (categoryName === "Personalizada") {
        editCustomFrequency()
      } else if (haveAnyFrequenciesBeenEdited()) {
        registerTaskFrequencies(data.id)
      } else {
        setModalVisible(!modalVisible)
      }

    } catch (error) {
      console.error(error);
    }
  }

  async function editCustomFrequency() {
    try {
      const plantsFrequency = await api.get(`/plants_frequency?plantId=${plantDataAdded.id}`);
      await api.patch(`/plants_frequency/${plantsFrequency.data[0].id}`, {
        watering_frequency_days: wateringFrequencyInput,
        fertilization_frequency_days: fertilizationFrequency,
        vase_change_frequency_days: vaseChangeFrequency,
      });
      setModalVisible(!modalVisible)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <NavigationBar title="Cadastrar planta personalizada" />

      <View style={styles.container}>
        <View style={styles.content}>
          <ThreeSteps currentStep={3} />

          {customPlantOrPlantEdit ? (
            <>
              <Text style={styles.title}>Defina a frequência das tarefas abaixo</Text>

              <View style={styles.containerFunctionality}>
                <View style={styles.containerTaskType}>
                  <WaterIcon />
                  <Text style={styles.wateringTaskText}>Rega</Text>
                </View>
                <View style={styles.controlContainer}>
                  <Text>Em dias</Text>
                  <InputNumberSpinner
                    value={wateringFrequencyInput}
                    onChangeValue={setWateringFrequencyInput}
                  />
                </View>
              </View>

              <View style={styles.containerFunctionality}>
                <View style={styles.containerTaskType}>
                  <LeafIcon />
                  <Text style={styles.fertilizerTaskText}>Adubo</Text>
                </View>
                <View style={styles.controlContainer}>
                  <Text>Em semanas</Text>
                  <InputNumberSpinner
                    value={fertilizationFrequencyInput}
                    onChangeValue={setFertilizationFrequencyInput}
                  />
                </View>
              </View>

              <View style={styles.containerFunctionality}>
                <View style={styles.containerTaskType}>
                  <PlantVaseIcon />
                  <Text style={styles.taskTextToChangeTheVase}>Vaso</Text>
                </View>
                <View style={styles.controlContainer}>
                  <Text>Em anos</Text>
                  <InputNumberSpinner
                    value={vaseChangeFrequencyInput}
                    onChangeValue={setVaseChangeFrequencyInput}
                  />
                </View>
              </View>
            </>
          ) : (
            <>
              <Text style={styles.title}>Saiba como cuidar da sua planta</Text>

              <TaskDetailsCard
                taskName="rega"
                daysForTheTask={wateringFrequencyInput}
                icon={<WaterIcon />}
                color="#006874"
              />

              <TaskDetailsCard
                taskName="fertilização"
                daysForTheTask={fertilizationFrequencyContext % 7 + fertilizationFrequencyInput * 7}
                icon={<LeafIcon />}
                color="#795900"
              />

              <TaskDetailsCard
                taskName="troca de vaso"
                daysForTheTask={vaseChangeFrequencyContext % 365 + vaseChangeFrequencyInput * 365}
                icon={<PlantVaseIcon />}
                color="#1C5129"
              />
            </>
          )}
        </View>
        <ButtonsToAdvanceAndReturnForm onSubmit={handleFrequencySubmit} />
      </View>

      {modalVisible && <ConfirmRegistrationPopUp
        image={plantDataAdded.category.image}
        modalVisible={modalVisible}
        onChangeModalVisible={setModalVisible}
        methodHttp={httpMethod}
        additionalText={haveAnyFrequenciesBeenEdited() ? (
          'As próximas tarefas criadas usarão a nova frequência definida por você.'
        ) : null}
      />}
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