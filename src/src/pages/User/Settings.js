import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../style/Theme";
import { UserContext } from "../../contexts/UserContext";
import NavigationBarBottom from "../../components/NavigationBarBottom";
import Arrow from "../../../assets/arrow.svg";

export default function Settings() {
  const { navigate } = useNavigation();
  const { user, logout, deleteUser } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("Login");
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza de que deseja deletar sua conta? Esta ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          onPress: async () => {
            try {
              await deleteUser();
              Alert.alert(
                "Conta deletada",
                "Sua conta foi deletada com sucesso."
              );
              navigate("Login");
            } catch (error) {
              Alert.alert("Erro", "Houve um erro ao deletar a conta.");
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.homeHeaderBackground}>
            <View style={styles.homeHeaderContainer}>
              <View style={styles.homeHeaderUser}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/user.png")}
                />
                <Text
                  style={[styles.title, styles.textColor]}
                  variant="titleLarge"
                >
                  {user ? user.nome : "Usuário"}
                </Text>
              </View>
              <View style={styles.homeHeaderNav}></View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.nav}>
              <TouchableOpacity onPress={() => navigate("EditProfile")}>
                <View style={styles.navItem} marginRight={10}>
                  <Text variant="bodyLarge">Editar perfil</Text>
                  <Arrow />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate("EditPassword")}>
                <View style={styles.navItem} marginRight={10}>
                  <Text variant="bodyLarge">Editar senha</Text>
                  <Arrow />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log("Rota para lembretes")}>
                <View style={styles.navItem} marginRight={10}>
                  <Text variant="bodyLarge">Lembretes</Text>
                  <Arrow />
                </View>
              </TouchableOpacity>
              <View style={styles.navLink}>
                <TouchableOpacity onPress={handleLogout}>
                  <Text variant="bodyLarge" style={styles.navLinkText}>
                    Sair
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navLink}>
                <TouchableOpacity onPress={handleDeleteAccount}>
                  <Text variant="bodyLarge" style={styles.navLinkText}>
                    Deletar conta
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <NavigationBarBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 110,
  },

  homeHeaderBackground: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.onPrimaryprimary,
  },

  homeHeaderContainer: {
    padding: 30,
  },

  homeHeaderUser: {
    alignItems: "center",
    gap: 10,
  },

  homeHeaderNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nav: {
    gap: 12,
  },

  navItem: {
    flex: 1,
    backgroundColor: Theme.colors.inverseOnSurface,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  navLink: {
    flex: 1,
    alignItems: "center",
  },

  navLinkText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  title: {
    fontWeight: "bold",
  },

  textColor: {
    color: Theme.colors.onPrimary,
  },
});
