import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import Theme from "../style/Theme";

export default function ConfirmRegistrationPopUp({ image }) {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {image && (
              <View style={styles.imageContainer} resizeMode="contain">
                <Image
                  source={image}
                  style={styles.plantImage}
                  resizeMode="contain"
                />
              </View>
            )}
            <Text style={styles.title}>Planta cadastrada com sucesso!</Text>
            <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  mode="contained-tonal"
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  Cancelar
                </Button>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={() => setModalVisible(!modalVisible)}
                  >
                  Confirmar
                </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    marginHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    padding: 30,
  },

  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  plantImage: {
    width: "144",
    alignSelf: "flex-start",
    aspectRatio: 1,
    marginBottom: 20,
  },
  title: {
    color: Theme.colors.secondary,
    textAlign: "center",
    marginHorizontal: 30,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    columnGap: 9,
    width: "100%",
    alignSelf: "center",
  },

  button: {
    flex: 1,
  },
});
