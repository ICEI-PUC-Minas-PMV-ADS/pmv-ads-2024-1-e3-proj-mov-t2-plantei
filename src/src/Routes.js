import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefinePlantName from "./pages/DefinePlantName";
import DefinePlantDescription from "./pages/DefinePlantDescription";
import DefineFrequencyOfTasks from "./pages/DefineFrequencyOfTasks";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import EmptyTasks from "./pages/EmptyTasks";
import EmptyPlants from "./pages/EmptyPlants";
import MyPlants from "./pages/MyPlants";
import ConfirmPopUp from "./components/ConfirmPopUp";

import Theme from "./style/Theme";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={Theme}>
      <Navigator
        initialRouteName="MyPlants"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Home" component={Home} />
        <Screen name="DefinePlantName" component={DefinePlantName} />
        <Screen name="DefinePlantDescription" component={DefinePlantDescription} />
        <Screen name="DefineFrequencyOfTasks" component={DefineFrequencyOfTasks} />
        <Screen name="EmptyTasks" component={EmptyTasks} />
        <Screen name="EmptyPlants" component={EmptyPlants} />
        <Screen name="MyPlants" component={MyPlants} />
        <Screen name="ConfirmPopUp" component={ConfirmPopUp} />
      </Navigator>
    </NavigationContainer>
  )
}