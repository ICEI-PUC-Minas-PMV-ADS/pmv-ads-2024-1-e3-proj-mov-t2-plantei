import React, { useState, useCallback } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Text, Button } from "react-native-paper";
import Theme from "../../style/Theme";
import api from "../../services/api";
import { generateHash } from "../../services/AuthService";

export default function Register({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");

  const handleRegister = async () => {
    if (senha !== confirmeSenha) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    let password = generateHash(senha);

    try {
      const response = await api.post('/users', {
        nome,
        email,
        password
      });
      if (response.status === 201 || response.status === 200) {
        Alert.alert("Sucesso", "Usuário registrado com sucesso!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Erro", "Falha ao registrar usuário.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao registrar o usuário.");
    }
  };

  useFocusEffect(
    useCallback(() => {
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmeSenha("");
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../../assets/ilustrationRegister.png")}
        />
        <Text variant="headlineLarge" style={styles.title}>
          Chegou a{"\n"}hora de se divertir!
        </Text>

        <TextInput
          placeholder="Nome"
          style={styles.input}
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirme sua Senha"
          style={styles.input}
          onChangeText={setConfirmeSenha}
          value={confirmeSenha}
          secureTextEntry
        />

        <View style={styles.button}>
          <Button
            style={styles.buttonPrimary}
            mode="contained"
            onPress={handleRegister}
          >
            Criar conta
          </Button>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>
            Já possui uma conta?{" "}
            <Text style={styles.loginLink}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  content: {
    alignItems: "center",
  },
  title: {
    marginBottom: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
    lineHeight: 26,
  },
  image: {
    width: "80%",
    height: 320,
    resizeMode: "contain",
    marginBottom: -20,
  },
  input: {
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: Theme.colors.secondary,
  },
  button: {
    width: "100%",
  },
  buttonPrimary: {
    marginBottom: 10,
  },
  loginText: {
    marginTop: 10,
    fontSize: 14,
    color: Theme.colors.secondary,
    textAlign: "center",
    marginBottom:30,
  },
  loginLink: {
    color: Theme.colors.primary,
    textDecorationLine: "underline",
  },
});
