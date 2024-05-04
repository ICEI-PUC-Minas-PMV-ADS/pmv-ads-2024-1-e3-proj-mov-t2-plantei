import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmptyPlants from "../pages/Plants/EmptyPlants";
import MyPlants from "../pages/Plants/MyPlants";
import DefinePlantName from "../pages/Plants/DefinePlantName";
import DefinePlantDescription from "../pages/Plants/DefinePlantDescription";
import DefineFrequencyOfTasks from "../pages/Plants/DefineFrequencyOfTasks";
import PlantDetails from "../pages/Plants/PlantDetails";
import SelectCategory from "../pages/Plants/SelectCategory";

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