import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Theme from "../../style/Theme";

import NavigationBarBottom from "../../components/NavigationBarBottom";
import Arrow from "../../../assets/arrow.svg";

export default function Settings() {
  const { navigate } = useNavigation();

  return (
    <>
      <ScrollView>
        <View>
          <View style={styles.homeHeaderBackground}>
            <View style={styles.homeHeaderContainer}>
              <View style={styles.homeHeaderUser}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/photo-home.png")}
                />
                <Text
                  style={[styles.title, styles.textColor]}
                  variant="titleLarge"
                >
                  Isabella Silva
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
              <TouchableOpacity onPress={() => navigate("")}>
                <View style={styles.navItem} marginRight={10}>
                  <Text variant="bodyLarge">Lembretes</Text>
                  <Arrow />
                </View>
              </TouchableOpacity>
              <View style={styles.navLink}>
                <TouchableOpacity onPress={() => navigate("")}>
                  <Text variant="bodyLarge" style={{ fontWeight: "bold" }}>
                    Sair
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.navLink}>
                <TouchableOpacity onPress={() => navigate("")}>
                  <Text variant="bodyLarge" style={{ fontWeight: "bold" }}>
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

  title: {
    fontWeight: "bold",
  },

  textColor: {
    color: Theme.colors.onPrimary,
  },
});
