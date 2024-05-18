import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import Theme from "../style/Theme";
import { useNavigation } from "@react-navigation/native";


const HomeRoute = () => <></>;

const PlusRoute = () => <></>;

const SettingsRoute = () => <></>;


const NavigationBarBottom = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "plus", title: "Adicionar plantas", focusedIcon: "plus" },
    {
      key: "settings",
      title: "Settings",
      focusedIcon: "cog",
      unfocusedIcon: "cog-outline",
    },
  ]);

  React.useEffect(() => {
    switch (routes[index].key) {
      case "home":
        navigation.navigate("Home");
        break;
      case "plus":
        navigation.navigate("SelectCategory");
        break;
      case "settings":
        navigation.navigate("Settings");
        break;
    }
  }, [index, navigation, routes]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => null,
    plus: () => null,
    settings: () => null,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bar}
      activeColor={Theme.colors.primary}
      style={styles.fixed}
    />
  );
};

const styles = StyleSheet.create({

  bar:{
    backgroundColor: Theme.colors.background,
    borderTopWidth: 1,
    borderColor: Theme.colors.outlineVariant,
  },

  fixed: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default NavigationBarBottom;
