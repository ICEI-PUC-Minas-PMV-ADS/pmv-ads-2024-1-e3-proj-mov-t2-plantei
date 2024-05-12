import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Appbar } from "react-native-paper";

import { RegisterPlantContext } from "../../contexts/RegisterPlantContext";
import TaskDetailsCard from "../../components/TaskDetailsCard";
import ConfirmRegistrationPopUp from "../../components/ConfirmRegistrationPopUp";

import WaterIcon from "../../../assets/water-icon.svg";
import LeafIcon from "../../../assets/leaf-icon.svg";
import PlantVaseIcon from "../../../assets/plant-vase-icon.svg";

import Theme from "../../style/Theme";

export default function PlantDetails() {
  const { navigate, goBack, canGoBack } = useNavigation()
  const { plantDataAdded, changePlantDataAdded } = useContext(RegisterPlantContext)

  const [modalVisible, setModalVisible] = useState(false);

  function handleClickEdit() {
    navigate("DefinePlantName")
    changePlantDataAdded({ ...plantDataAdded, httpMethod: 'edit' })
  }

  function handleClickDelete() {
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <Appbar.Header statusBarHeight={0} style={styles.header} >
        <Appbar.BackAction onPress={() => canGoBack() && goBack()} />
        <Appbar.Content titleStyle={styles.titleHeader} title="Minhas plantas" />
        <Appbar.Action icon="playlist-edit" onPress={handleClickEdit} />
        <Appbar.Action icon="trash-can-outline" onPress={handleClickDelete} />
      </Appbar.Header>

      <View>
        <View style={styles.headerBackground}>
          <View style={styles.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={{ uri: plantDataAdded.category.image }}
              resizeMode="contain"
            />
            <Text
              style={styles.title}
              variant="titleLarge"
            >
              {plantDataAdded.name}
            </Text>
            <Text
              style={styles.description}
              variant="bodyLarge"
            >
              {plantDataAdded.description}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <TaskDetailsCard
            taskName="rega"
            daysForTheTask={plantDataAdded.category.watering_frequency_days}
            icon={<WaterIcon />}
            color="#006874"
          />
          <TaskDetailsCard
            taskName="fertilização"
            daysForTheTask={plantDataAdded.category.fertilization_frequency_days}
            icon={<LeafIcon />}
            color="#795900"
          />
          <TaskDetailsCard
            taskName="troca de vaso"
            daysForTheTask={plantDataAdded.category.vase_change_frequency_days}
            icon={<PlantVaseIcon />}
            color="#1C5129"
          />
          <Button
            style={styles.buttonPrimary}
            icon=""
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Visualizar tarefas dessa planta
          </Button>
        </View>
      </View>

      {modalVisible && <ConfirmRegistrationPopUp
        image={plantDataAdded.category.image}
        modalVisible={modalVisible}
        onChangeModalVisible={setModalVisible}
        methodHttp="post"
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
