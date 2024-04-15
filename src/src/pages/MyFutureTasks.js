import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

import NavigationBar from '../components/NavigationBar';
import BottomBar from '../components/BottomBar';

export default function MyFutureTasks() {
  return (
    <View style={styles.container}>
      {/* Navigation bar */}
      <NavigationBar title="Minhas Tarefas" />
      
      {/* Main content */}
      <View style={styles.content}>
        <View style={styles.innerContent}>
          <Text variant="displayLarge" style={styles.title}>😭</Text>
          <Text variant="headlineSmall" style={styles.title}>
            Você ainda não possui{'\n'}plantas cadastradas
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>Comece seu jardim!{'\n'}Descubra a alegria de cuidar de{'\n'}plantas em seu lar.</Text>
          <View style={styles.button}>
            <Button
              style={styles.buttonPrimary}
              icon=""
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Quero cadastrar!
            </Button>
          </View>
        </View>
      </View>

      {/* Bottom bar */}
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  innerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    width: '100%',
  },
  buttonPrimary: {
    marginBottom: 10,
  },
});
