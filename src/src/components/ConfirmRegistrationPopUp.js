import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from '@react-navigation/native';

import Theme from "../style/Theme";

export default function ConfirmRegistrationPopUp({
  image,
  onChangeModalVisible,
  modalVisible,
  methodHttp,
  plantName,
  additionalText,
  onConfirmDeletion
}) {
  const { dispatch } = useNavigation()

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        onChangeModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {image && (
            <View style={styles.imageContainer} resizeMode="contain">
              <Image
                style={[styles.plantImage, { width: 70, height: 70 }]}
                source={{ uri: image }}
                resizeMode="contain"
              />
            </View>
          )}

          {methodHttp === 'post' && (
            <>
              <Text style={styles.title}>Planta cadastrada com sucesso!</Text>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={() => {
                    onChangeModalVisible(!modalVisible)

                    dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [
                          { name: 'MyPlants' }
                        ],
                      })
                    );
                  }}
                >
                  Tudo certo!
                </Button>
              </View>
            </>
          )}

          {methodHttp === 'edit' && (
            <>
              <Text style={styles.title}>Planta atualizada com sucesso!</Text>
              {additionalText && <Text style={styles.additionalText}>{additionalText}</Text>}
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={() => {
                    onChangeModalVisible(!modalVisible)

                    dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [
                          { name: 'MyPlants' }
                        ],
                      })
                    );
                  }}
                >
                  Tudo certo!
                </Button>
              </View>
            </>
          )}

          {methodHttp === 'delete' && (
            <>
              <Text style={styles.title}>Deseja mesmo excluir{"\n"}{plantName}?</Text>
              <View style={styles.buttonContainer}>
                <Button
                  style={styles.button}
                  mode="contained-tonal"
                  onPress={() => onChangeModalVisible(!modalVisible)}
                >
                  Cancelar
                </Button>
                <Button
                  style={styles.button}
                  mode="contained"
                  onPress={() => {
                    onConfirmDeletion()
                  }}
                >
                  Apagar
                </Button>
              </View>
            </>
          )}

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
    width: 144,
    height: 144,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F2FBF2',
    borderRadius: 15
  },

  plantImage: {
    aspectRatio: 1,
    margin: '0 auto'
  },

  title: {
    color: Theme.colors.secondary,
    textAlign: "center",
    marginHorizontal: 30,
    marginVertical: 12,
    fontSize: 16,
  },

  additionalText: {
    color: Theme.colors.secondary,
    textAlign: "center",
    marginBottom: 12
  },

  buttonContainer: {
    flexDirection: "row",
    columnGap: 9,
    width: "100%",
    alignSelf: "center",
  },

  button: {
    flex: 1,
  },
});
