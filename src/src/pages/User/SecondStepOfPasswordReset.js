import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import Theme from '../../style/Theme';

const SecondStepOfPasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (password.length < 8) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 8 caracteres.');
    } else if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem. Por favor, digite novamente.');
    } else {
      Alert.alert('Senha Redefinida', 'Sua senha foi redefinida com sucesso.');

    }
  };

  return (
    <ScrollView>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.content}>
        <View style={styles.topContainer}>
          <Image source={require('../../../assets/redefsenha.png')} style={styles.img} />
          <Text style={styles.title}>Insira sua nova senha</Text>     
          <Text style={styles.subtitle}>Crie uma nova senha forte e segura para proteger sua conta.</Text>

          <TextInput 
            placeholder="Senha"
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TextInput 
            placeholder="Confirme sua senha"
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Redefinir senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text style={styles.smallButtonText}>Voltar para entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 90,
  },
  topContainer: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end', 
    width: '100%',
    marginVertical: 30,
  },
  input: {
    color: Theme.colors.secondary,
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    color: Theme.colors.secondary,
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    color: Theme.colors.secondary,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 5,
    marginVertical:60,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  smallButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  smallButtonText: {
    color: Theme.colors.primary,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine:'underline',
  },
  img: {
    marginBottom: 20,
  },
});

export default SecondStepOfPasswordReset;
