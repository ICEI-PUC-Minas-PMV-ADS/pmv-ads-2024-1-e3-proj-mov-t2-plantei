import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmptyPlants from "../pages/EmptyPlants";
import MyPlants from "../pages/MyPlants";
import DefinePlantName from "../pages/DefinePlantName";
import DefinePlantDescription from "../pages/DefinePlantDescription";
import DefineFrequencyOfTasks from "../pages/DefineFrequencyOfTasks";
import PlantDetails from "../pages/PlantDetails";
import SelectCategory from "../pages/SelectCategory";

const { Screen, Group } = createNativeStackNavigator();

export default function PlantRoutes() {
  return (
    <Group>
      <Screen name="EmptyPlants" component={EmptyPlants} />
      <Screen name="MyPlants" component={MyPlants} />
      <Screen name="SelectCategory" component={SelectCategory} />
      <Screen name="DefinePlantName" component={DefinePlantName} />
      <Screen
        name="DefinePlantDescription"
        component={DefinePlantDescription}
      />
      <Screen
        name="DefineFrequencyOfTasks"
        component={DefineFrequencyOfTasks}
      />
      <Screen name="PlantDetails" component={PlantDetails} />
    </Group>
  )
}