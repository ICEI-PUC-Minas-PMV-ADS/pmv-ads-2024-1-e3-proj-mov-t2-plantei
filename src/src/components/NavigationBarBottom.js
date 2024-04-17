import * as React from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import Theme from "../style/Theme";
import { BoxShadow } from "react-native-shadow";

const HomeRoute = () => <Text></Text>;

const PlusRoute = () => <Text></Text>;

const SettingsRoute = () => <Text></Text>;

const NavigationBarBottom = () => {
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

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    plus: PlusRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: Theme.colors.secondaryContainer }}
      activeColor={Theme.colors.primary}
      style={styles.fixed}
    />
  );
};

const styles = StyleSheet.create({
  fixed: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default NavigationBarBottom;
