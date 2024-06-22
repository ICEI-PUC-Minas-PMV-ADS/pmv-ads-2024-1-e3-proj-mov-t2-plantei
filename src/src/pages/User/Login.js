import React, { useState, useContext, useCallback } from "react";
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Text, Button } from "react-native-paper";
import { UserContext } from "../../contexts/UserContext";
import { login } from "../../services/AuthService";
import Theme from "../../style/Theme";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const user = await login(email, senha);
      setUser(user);
      Alert.alert("Login bem-sucedido", `Bem-vindo(a), ${user.nome}`);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro de Login", error.message);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setEmail("");
      setSenha("");
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={require("../../../assets/ilustrationLogin.png")}
        />
        <Text variant="headlineLarge" style={styles.title}>
          Que bom{"\n"}que você está aqui!
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          style={styles.input}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          style={styles.input}
          onChangeText={setSenha}
          secureTextEntry
        />
        <View style={styles.button}>
          <Button
            style={styles.buttonPrimary}
            mode="contained"
            onPress={handleLogin}
          >
            Entrar
          </Button>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.loginText}>
            Ainda não possui uma conta?{" "}
            <Text style={styles.loginLink}>Se cadastre</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginBottom: -30,
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
  },
  loginLink: {
    color: Theme.colors.primary,
    textDecorationLine: "underline",
  },
});

export default Login;
