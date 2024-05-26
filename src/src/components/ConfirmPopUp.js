import React, { useState } from "react";
import { Modal, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";

const ConfirmPopUp = ({onConfirm}) => {
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
            <Text
              style={[{ fontWeight: "bold" }, { marginBottom: 10 }]}
              variant="titleLarge"
            >
              Tarefa concluída!
            </Text>
            <Text style={{ marginBottom: 10 }} variant="bodyMedium">
              Uma nova tarefa foi gerada com uma próxima data.
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => onConfirm()}
                style={styles.button}
                mode="contained"
              >
                Tudo certo, entendi!
              </Button>
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
    marginHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    padding: 30,
    alignItems: "flex-start",
  },

  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    columnGap: 9,
    width: "100%",
    alignSelf: "center",
  },

  button: {
    flex: 1,
  },
});

export default ConfirmPopUp;
