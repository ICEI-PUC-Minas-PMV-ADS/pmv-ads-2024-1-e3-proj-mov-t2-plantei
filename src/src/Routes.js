import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Image from '../../src/assets/generica.png';

import DefinePlantName from "./pages/DefinePlantName";
import DefinePlantDescription from "./pages/DefinePlantDescription";
import DefineFrequencyOfTasks from "./pages/DefineFrequencyOfTasks";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import EmptyTasks from "./pages/EmptyTasks";
import EmptyPlants from "./pages/EmptyPlants";
import MyPlants from "./pages/MyPlants";
import ConfirmPopUp from "./components/ConfirmPopUp";
import SelectCategory from "./pages/SelectCategory";
import ListFutureTasks from "./pages/ListFutureTasks";
import ListFutureTasksDetails from "./pages/ListFutureTasksDetails";
import PlantDetails from "./pages/PlantDetails";
import PlantTasks from "./pages/PlantTasks";
import ConfirmRegistrationPopUp from "./components/ConfirmRegistrationPopUp";
import ListFutureTasksByPeriod from "./pages/ListFutureTasksbyPeriod";

import Theme from "./style/Theme";


const { Navigator, Screen } = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={Theme}>
      <Navigator
        initialRouteName="ConfirmRegistrationPopUp"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Home" component={Home} />
        <Screen name="DefinePlantName" component={DefinePlantName} />
        <Screen
          name="DefinePlantDescription"
          component={DefinePlantDescription}
        />
        <Screen
          name="DefineFrequencyOfTasks"
          component={DefineFrequencyOfTasks}
        />
        <Screen name="EmptyTasks" component={EmptyTasks} />
        <Screen name="EmptyPlants" component={EmptyPlants} />
        <Screen name="MyPlants" component={MyPlants} />
        <Screen name="ConfirmPopUp" component={ConfirmPopUp} />
        <Screen name="SelectCategory" component={SelectCategory} />
        <Screen name="ListFutureTasks" component={ListFutureTasks} />
        <Screen
          name="ListFutureTasksDetails"
          component={ListFutureTasksDetails}
        />
        <Screen name="PlantTasks" component={PlantTasks} />
        <Screen name="ConfirmRegistrationPopUp">
          {props => <ConfirmRegistrationPopUp {...props} image={Image} />} 
          </Screen>
        <Screen name="ListFutureTasksByPeriod" component={ListFutureTasksByPeriod} />
        <Screen name="PlantDetails" component={PlantDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
