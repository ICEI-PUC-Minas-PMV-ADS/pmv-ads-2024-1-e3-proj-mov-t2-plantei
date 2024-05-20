import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../style/Theme";

const FirstStepOfPasswordReset = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleResetPassword = () => {
    Alert.alert(
      "Email enviado",
      "Verifique seu e-mail para redefinir sua senha."
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("../../../assets/redefsenha.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Insira seu endereço de email</Text>
        <Text style={styles.subtitle}>
          Digite o e-mail associado à sua conta para redefinir sua senha.
        </Text>

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.smallButtonText}>Voltar para entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  topContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomContainer: {
    justifyContent: "flex-end",
    width: "100%",
    marginVertical: 30,
  },
  input: {
    color: Theme.colors.secondary,
    width: "100%",
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 130,
  },
  title: {
    fontWeight: "bold",
    color: Theme.colors.secondary,
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    color: Theme.colors.secondary,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  smallButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  smallButtonText: {
    color: Theme.colors.primary,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  img: {
    marginBottom: 20,
  },
});

export default FirstStepOfPasswordReset;
