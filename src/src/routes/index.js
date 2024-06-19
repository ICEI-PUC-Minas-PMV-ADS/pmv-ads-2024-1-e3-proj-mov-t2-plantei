import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserRoutes from "./UserRoutes";
import PlantRoutes from "./PlantRoutes";
import TasksRoutes from "./TasksRoutes";
import ArticlesRoutes from "./ArticlesRoutes";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import ConfirmPopUp from "../components/ConfirmPopUp";

import Theme from "../style/Theme";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={Theme}>
      <Navigator
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Group>
          <Screen name="Welcome" component={Welcome} />
          <Screen name="Home" component={Home} />
          <Screen name="ConfirmPopUp" component={ConfirmPopUp} />
        </Group>
        {UserRoutes()}
        {PlantRoutes()}
        {TasksRoutes()}
        {ArticlesRoutes()}
      </Navigator>
    </NavigationContainer>
  );
}
