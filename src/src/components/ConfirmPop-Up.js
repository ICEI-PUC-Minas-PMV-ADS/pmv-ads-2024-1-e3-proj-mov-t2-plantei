import React, { useState } from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Theme from '../style/Theme';
const PopupExample = () => {
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
            <Text style={styles.titleConfirm}>Confirmar conclusão da tarefa</Text>
            <Text style={styles.title}>
            Ao confirmar, uma nova tarefa será gerada com uma próxima data.
            </Text>
            <Text style={styles.titlebold2}>Essa ação é irreversível.</Text>
            <Text style={styles.titlebold}>Deseja realmente concluir a tarefa?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={[styles.button, { backgroundColor: "#f5f5f5" }]}
              >
                <Text style={styles.buttonTextC}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={[styles.button, { backgroundColor: "#5bb551" }]}
              >
                <Text style={styles.buttonText}>Confirmar</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal:15,
    borderRadius: 25,
    alignItems: 'center',
    paddingVertical: 35,
  },
  titleConfirm: {
    textAlign: 'left',
    color: 'grey',
    fontSize: 24,
    marginVertical:10,
    fontWeight: 'bold',
  },
  title: {
    color: Theme.colors.secondary,
    alignSelf: 'flex-start',
    marginHorizontal:31,
    fontSize:14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    paddingVertical: 13,
    paddingHorizontal: 33,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonTextC: {
    color: 'gray',
    fontSize: 16,
  },
  titlebold2: {
    fontSize:14,
    fontWeight: 'bold',
    color: 'gray',
    marginVertical: 10,
    marginHorizontal:31,
    textAlign:'left',
    alignSelf:'flex-start',
  },
  titlebold: {
    fontWeight:'bold',
    color:'grey',
    alignSelf:'flex-start',
    marginHorizontal:31,
  },
});

export default PopupExample;
