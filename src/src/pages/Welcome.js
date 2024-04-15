import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Text, Button } from 'react-native-paper';


export default function Welcome() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineLarge" style={styles.title}>
          Cuide{'\n'}de suas plantas{'\n'}de forma fácil!
        </Text>
        <Image
          style={styles.image}
          source={require('../../assets/ilustrationWelcome.png')}
        />
        <Text variant="bodyLarge" style={styles.subtitle}>
          Conectando você aos cuidados{'\n'}ideais para suas plantas
        </Text>
        <View style={styles.button}>
          <Button
            style={styles.buttonPrimary}
            icon=""
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Criar conta
          </Button>
          <Button
            icon=""
            mode="contained-tonal"
            onPress={() => console.log('Pressed')}>
            Entrar
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

    content: {
    alignItems: 'center',
  },

  title: {
    marginBottom: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: 320,
    resizeMode: 'contain',
    marginBottom: 40,
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
