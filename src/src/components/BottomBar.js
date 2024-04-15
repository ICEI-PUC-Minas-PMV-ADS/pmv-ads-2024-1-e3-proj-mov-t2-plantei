import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importando FontAwesome para os ícones

export default function BottomBar() {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.tab}>
        <FontAwesome name="home" size={20} color="#696969" />
        <Text>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <FontAwesome name="plus" size={20} color="#696969" />
        <Text>Adicionar plantas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <FontAwesome name="cog" size={20} color="#696969" />
        <Text>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
