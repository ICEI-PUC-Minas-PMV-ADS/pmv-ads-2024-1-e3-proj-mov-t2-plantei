import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DefinePlantName from "./pages/DefinePlantName";
import DefinePlantDescription from "./pages/DefinePlantDescription";
import DefineFrequencyOfTasks from "./pages/DefineFrequencyOfTasks";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import MyFutureTasks from "./pages/MyFutureTasks";

import Theme from "./style/Theme";

const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={Theme}>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Home" component={Home} />
        <Screen name="DefinePlantName" component={DefinePlantName} />
        <Screen name="DefinePlantDescription" component={DefinePlantDescription} />
        <Screen name="DefineFrequencyOfTasks" component={DefineFrequencyOfTasks} />
        <Screen name="MyFutureTasks" component={MyFutureTasks} />
      </Navigator>
    </NavigationContainer>
  )
}