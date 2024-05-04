import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListFutureTasks from "../pages/ListFutureTasks";
import ListFutureTasksDetails from "../pages/ListFutureTasksDetails";
import EmptyTasks from "../pages/EmptyTasks";
import PlantTasks from "../pages/PlantTasks";
import ListFutureTasksbyPeriod from "../pages/ListFutureTasksbyPeriod";

const { Screen, Group } = createNativeStackNavigator();

export default function TasksRoutes() {
  return (
    <Group>
      <Screen name="PlantTasks" component={PlantTasks} />
      <Screen name="EmptyTasks" component={EmptyTasks} />
      <Screen name="ListFutureTasks" component={ListFutureTasks} />
      <Screen
        name="ListFutureTasksDetails"
        component={ListFutureTasksDetails}
      />
      <Screen name="ListFutureTasksByPeriod" component={ListFutureTasksbyPeriod} />
    </Group>
  )
}