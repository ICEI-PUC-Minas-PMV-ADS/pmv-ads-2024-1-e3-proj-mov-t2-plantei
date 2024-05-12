import { View, StyleSheet } from 'react-native';
import { useContext, useState } from 'react';
import { Text } from 'react-native-paper';

import { RegisterPlantContext } from '../../contexts/RegisterPlantContext';
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
  const { plantDataAdded, changePlantDataAdded } = useContext(RegisterPlantContext)

  const [modalVisible, setModalVisible] = useState(false);

  const [wateringFrequencyInput, setWateringFrequencyInput]
    = useState(plantDataAdded.category.watering_frequency_days)
  const [fertilizationFrequencyInput, setFertilizationFrequencyInput]
    = useState(plantDataAdded.category.fertilization_frequency_days)
  const [vaseChangeFrequencyInput, setVaseChangeFrequencyInput]
    = useState(plantDataAdded.category.vase_change_frequency_days)

  function handleFrequencySubmit() {
    changePlantDataAdded({
      ...plantDataAdded,
      watering_frequency_days: wateringFrequencyInput,
      fertilization_frequency_days: fertilizationFrequencyInput,
      vase_change_frequency_days: vaseChangeFrequencyInput
    })

    plantDataAdded.httpMethod === 'post' ? (
      registerPlant()
    ) : (
      editPlant()
    )
  }

  async function registerPlant() {
    try {
      const { data } = await api.post('/plants', {
        userId: "1",
        categoryId: plantDataAdded.category.id,
        name: plantDataAdded.name,
        description: plantDataAdded.description
      });
      registerFirstTasks(data.id)
    } catch (error) {
      console.error(error);
    }
  }

  function setNotificationDate(extraDays, weight) {
    const currentDate = new Date()
    let totalDays = 0

    plantDataAdded.category.name === "Personalizada" ? (
      totalDays = extraDays * weight
    ) : (
      totalDays = extraDays
    )

    return new Date(currentDate.setDate(currentDate.getDate() + totalDays))
  }

  async function registerFirstTasks(plantId) {
    const tasks = {
      wateringTask: {
        userId: "1",
        plantId: plantId,
        tipo: 'Rega',
        status: 'Em andamento',
        notificationDate: setNotificationDate(wateringFrequencyInput, 1)
      },
      fertilizationTask: {
        userId: "1",
        plantId: plantId,
        tipo: 'Fertilizar',
        status: 'Em andamento',
        notificationDate: setNotificationDate(fertilizationFrequencyInput, 7)
      },
      potChangeTask: {
        userId: "1",
        plantId: plantId,
        tipo: 'Vaso',
        status: 'Em andamento',
        notificationDate: setNotificationDate(vaseChangeFrequencyInput, 365)
      }
    }

    try {
      await api.post('/tasks', tasks.wateringTask);
      await api.post('/tasks', tasks.fertilizationTask);
      await api.post('/tasks', tasks.potChangeTask);
      plantDataAdded.category.name === 'Personalizada' ? (
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
        fertilization_frequency_days: fertilizationFrequencyInput * 7,
        vase_change_frequency_days: vaseChangeFrequencyInput * 365,
      });
      setModalVisible(!modalVisible)
    } catch (error) {
      console.error(error);
    }
  }

  async function editPlant() {
    try {
      const { data } = await api.patch(`/plants/${plantDataAdded.id}`, {
        categoryId: "1",
        name: plantDataAdded.name,
        description: plantDataAdded.description
      });

      editOngoingTasks()

      plantDataAdded.category.name === "Personalizada" ? (
        editCustomFrequency()
      ) : (
        registerTaskFrequencies(data.id)
      )

    } catch (error) {
      console.error(error);
    }
  }

  async function editOngoingTasks() {
    try {
      const { data } = await api.get(`/tasks?plantId=${plantDataAdded.id}&status=Em%20andamento`);

      data.forEach(async (task) => {
        let days = 0
        let weight = 1

        if (task.tipo === 'Rega') {
          days = wateringFrequencyInput
        } else if (task.tipo === 'Fertilizar') {
          days = fertilizationFrequencyInput
          weight = 7
        } else if (task.tipo === 'Vaso') {
          days = vaseChangeFrequencyInput
          weight = 365
        }

        await api.patch(`/tasks/${task.id}`, {
          notificationDate: setNotificationDate(days, weight)
        });
      })

    } catch (error) {
      console.error(error);
    }
  }

  async function editCustomFrequency() {
    try {
      const plantsFrequency = await api.get(`/plants_frequency?plantId=${plantDataAdded.id}`);
      await api.patch(`/plants_frequency/${plantsFrequency.data[0].id}`, {
        watering_frequency_days: wateringFrequencyInput,
        fertilization_frequency_days: fertilizationFrequencyInput * 7,
        vase_change_frequency_days: vaseChangeFrequencyInput * 365,
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
          {plantDataAdded.category.name === 'Personalizada' || plantDataAdded.httpMethod === "edit" ? (
            <Text style={styles.title}>Defina a frequência das tarefas abaixo</Text>
          ) : (
            <Text style={styles.title}>Saiba como cuidar da sua planta</Text>
          )}

          {plantDataAdded.category.name === 'Personalizada' || plantDataAdded.httpMethod === "edit" ? (
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
          ) : (
            <TaskDetailsCard
              taskName="rega"
              daysForTheTask={wateringFrequencyInput}
              icon={<WaterIcon />}
              color="#006874"
            />
          )}

          {plantDataAdded.category.name === 'Personalizada' || plantDataAdded.httpMethod === "edit" ? (
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
          ) : (
            <TaskDetailsCard
              taskName="fertilização"
              daysForTheTask={fertilizationFrequencyInput}
              icon={<LeafIcon />}
              color="#795900"
            />
          )}

          {plantDataAdded.category.name === 'Personalizada' || plantDataAdded.httpMethod === "edit" ? (
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
          ) : (
            <TaskDetailsCard
              taskName="troca de vaso"
              daysForTheTask={vaseChangeFrequencyInput}
              icon={<PlantVaseIcon />}
              color="#1C5129"
            />
          )}

        </View>
        <ButtonsToAdvanceAndReturnForm onSubmit={handleFrequencySubmit} />
      </View>

      {modalVisible && <ConfirmRegistrationPopUp
        image={plantDataAdded.category.image}
        modalVisible={modalVisible}
        onChangeModalVisible={setModalVisible}
        methodHttp={plantDataAdded.httpMethod}
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