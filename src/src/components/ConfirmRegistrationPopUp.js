import React, { useState } from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
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
                <Image source={image} style={styles.plantImage}resizeMode="contain"/>
              </View>
            )}
            <Text style={styles.title}>
              Planta cadastrada com sucesso!
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={[styles.button, { backgroundColor: "#41A259" }]}
              >
                <Text style={styles.buttonText}>Tudo certo!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    marginHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 35,
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
    marginBottom: 20
  },
  title: {
    color: Theme.colors.secondary,
    alignSelf: "flex-start",
    marginHorizontal: 31,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
  },
  button: {
    paddingVertical: 13,
    paddingHorizontal: 70,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
