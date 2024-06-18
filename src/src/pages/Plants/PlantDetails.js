import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Appbar } from "react-native-paper";

import api from "../../services/api";
import { RegisterPlantContext } from "../../contexts/RegisterPlantContext";
import TaskDetailsCard from "../../components/TaskDetailsCard";
import ConfirmRegistrationPopUp from "../../components/ConfirmRegistrationPopUp";

import WaterIcon from "../../../assets/water-icon.svg";
import LeafIcon from "../../../assets/leaf-icon.svg";
import PlantVaseIcon from "../../../assets/plant-vase-icon.svg";

import Theme from "../../style/Theme";

export default function PlantDetails({ route }) {
  const { changePlantDataAdded } = useContext(RegisterPlantContext)
  const { plantId } = route.params;
  const [myPlant, setMyPlant] = useState({})
  const [isLoadingPlant, setIsLoadingPlant] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const { navigate, goBack, canGoBack, dispatch } = useNavigation()

  async function getPlant() {
    setIsLoadingPlant(true)
    try {
      const { data } = await api.get(`/plants/${plantId}?_expand=category`);
      const plantDataRequest = data
      setMyPlant({ ...plantDataRequest })

      if (plantDataRequest.category.name === "Personalizada") {
        const { data } = await api.get(`/plants_frequency?plantId=${plantId}`);
        const frequencyDataRequest = data[0]
        setMyPlant(oldState => ({
          ...oldState,
          category: {
            ...oldState.category,
            watering_frequency_days: frequencyDataRequest.watering_frequency_days,
            fertilization_frequency_days: frequencyDataRequest.fertilization_frequency_days,
            vase_change_frequency_days: frequencyDataRequest.vase_change_frequency_days,
          }
        }))
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoadingPlant(false)
  }

  function handleClickEdit() {
    changePlantDataAdded({
      ...myPlant,
      httpMethod: 'edit',
      category: {
        ...myPlant.category,
        watering_frequency_days: myPlant.category.watering_frequency_days,
        fertilization_frequency_days: myPlant.category.fertilization_frequency_days,
        vase_change_frequency_days: myPlant.category.vase_change_frequency_days,
      }
    })

    navigate("DefinePlantName")
  }

  async function handleConfirmDeletion() {
    async function deleteTasks() {
      try {
        const { data: tasks } = await api.get(`/tasks?plantId=${plantId}`);

        tasks.forEach(async (task) => {
          await api.delete(`/tasks/${task.id}`);
        })

        deleteFrequency()
      } catch (error) {
        console.error(error);
      }
    }

    async function deleteFrequency() {
      try {
        if (myPlant.category.name === "Personalizada") {
          const { data: plantsFrequency } = await api.get(`/plants_frequency?plantId=${plantId}`);
          await api.delete(`/plants_frequency/${plantsFrequency[0].id}`);
        }

        deletePlant()
      } catch (error) {
        console.error(error);
      }
    }

    async function deletePlant() {
      try {
        await api.delete(`/plants/${plantId}`);

        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'MyPlants' }
            ],
          })
        );
      } catch (error) {
        console.error(error);
      }
    }

    deleteTasks()
  }

  useEffect(() => {
    getPlant()
  }, [])

  if (isLoadingPlant) {
    return <></>
  }

  return (
    <>
      <Appbar.Header statusBarHeight={0} style={styles.header} >
        <Appbar.BackAction onPress={() => canGoBack() && goBack()} />
        <Appbar.Content titleStyle={styles.titleHeader} title="Minhas plantas" />
        <Appbar.Action icon="playlist-edit" onPress={handleClickEdit} />
        <Appbar.Action icon="trash-can-outline" onPress={() => { setModalVisible(!modalVisible) }} />
      </Appbar.Header>

      <View>
        <View style={styles.headerBackground}>
          <View style={styles.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={{ uri: myPlant.category.image }}
              resizeMode="contain"
            />
            <Text
              style={styles.title}
              variant="titleLarge"
            >
              {myPlant.name}
            </Text>
            <Text
              style={styles.description}
              variant="bodyLarge"
            >
              {myPlant.description}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <TaskDetailsCard
            taskName="rega"
            daysForTheTask={myPlant.category.watering_frequency_days}
            icon={<WaterIcon />}
            color="#006874"
          />
          <TaskDetailsCard
            taskName="fertilização"
            daysForTheTask={myPlant.category.fertilization_frequency_days}
            icon={<LeafIcon />}
            color="#795900"
          />
          <TaskDetailsCard
            taskName="troca de vaso"
            daysForTheTask={myPlant.category.vase_change_frequency_days}
            icon={<PlantVaseIcon />}
            color="#1C5129"
          />
          <Button
            style={styles.buttonPrimary}
            icon=""
            mode="contained"
            onPress={() => navigate('ListFutureTasksDetails', { plant: myPlant })
            }>
            Visualizar tarefas dessa planta
          </Button>
        </View>
      </View>

      {modalVisible && <ConfirmRegistrationPopUp
        image={myPlant.category.image}
        modalVisible={modalVisible}
        onChangeModalVisible={setModalVisible}
        methodHttp="delete"
        plantName={myPlant.name}
        onConfirmDeletion={handleConfirmDeletion}
      />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  header: {
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 20,
    backgroundColor: Theme.colors.secondaryContainer,
  },

  titleHeader: {
    fontSize: 14
  },

  headerBackground: {
    backgroundColor: Theme.colors.secondaryContainer,
  },

  content: {
    paddingVertical: 30,
    marginTop: -20,
    alignItems: "center",
  },

  title: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },

  description: {
    width: "60%",
    textAlign: "center"
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: Theme.colors.background,
    borderWidth: 1,
    borderColor: Theme.colors.outlineVariant,
    borderRadius: 15,
  },
});
