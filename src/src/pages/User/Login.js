import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { Text, Button } from "react-native-paper";
import Theme from "../../style/Theme";

const screenWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    // Adicione a lógica de login aqui
    Alert.alert("Login", "Login efetuado com sucesso!");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require("../../../assets/ilustrationLogin.png")}
          />
          <Text variant="headlineLarge" style={styles.title}>
            Que bom que você está aqui!
          </Text>

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

          <TouchableOpacity
            onPress={() => navigation.navigate("FirstStepOfPasswordReset")}
          >
            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
            <Text style={styles.resetLink}>Clique aqui para redefinir</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Button
            style={[styles.buttonPrimary, { width: screenWidth - 60 }]}
            mode="contained"
            onPress={handleLogin}
          >
            Fazer Login
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupText}>
              Não possui uma conta?{" "}
              <Text style={styles.signupLink}>Cadastre-se</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
  content: {
    alignItems: "center",
  },
  title: {
    marginBottom: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
    lineHeight: 26,
  },
  image: {
    width: "80%",
    height: 320,
    resizeMode: "contain",
    marginBottom: 0,
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
  forgotPasswordText: {
    marginTop: 10,
    fontSize: 14,
    color: Theme.colors.secondary,
    textAlign: "center",
  },
  resetLink: {
    color: Theme.colors.primary,
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 20,
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 30,
  },
  buttonPrimary: {
    marginBottom: 10,
  },
  signupText: {
    marginTop: 10,
    fontSize: 14,
    color: Theme.colors.secondary,
    textAlign: "center",
  },
  signupLink: {
    color: Theme.colors.primary,
    textDecorationLine: "underline",
  },
});
