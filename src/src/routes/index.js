import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserRoutes from "./UserRoutes";
import PlantRoutes from "./PlantRoutes";
import TasksRoutes from "./TasksRoutes";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import ConfirmPopUp from "../components/ConfirmPopUp";
import ConfirmRegistrationPopUp from "../components/ConfirmRegistrationPopUp";

import Image from '../../assets/generica.png';

import Theme from "../style/Theme";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={Theme}>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Group>
          <Screen name="Welcome" component={Welcome} />
          <Screen name="Home" component={Home} />
          <Screen name="ConfirmPopUp" component={ConfirmPopUp} />
          <Screen name="ConfirmRegistrationPopUp">
            {props => <ConfirmRegistrationPopUp {...props} image={Image} />}
          </Screen>
        </Group>
        {UserRoutes()}
        {PlantRoutes()}
        {TasksRoutes()}
      </Navigator>
    </NavigationContainer>
  );
}
