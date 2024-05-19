import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import Theme from "../style/Theme";
import { useNavigation, useFocusEffect} from "@react-navigation/native";

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

  const handleIndexChange = (index) => {
    setIndex(index);
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
      default:
        break;
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      switch (navigation.getState().routes[navigation.getState().index].name) {
        case "Home":
          setIndex(0);
          break;
        case "SelectCategory":
          setIndex(1);
          break;
        case "Settings":
          setIndex(2);
          break;
        default:
          break;
      }
    }, [navigation])
  );

  const renderScene = BottomNavigation.SceneMap({
    home: () => null,
    plus: () => null,
    settings: () => null,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={handleIndexChange}
      renderScene={renderScene}
      barStyle={styles.bar}
      activeColor={Theme.colors.primary}
      style={styles.fixed}
    />
  );
};

const styles = StyleSheet.create({
  bar: {
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
