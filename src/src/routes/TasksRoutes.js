import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListFutureTasks from "../pages/Tasks/ListFutureTasks";
import ListFutureTasksDetails from "../pages/Tasks/ListFutureTasksDetails";
import EmptyTasks from "../pages/Tasks/EmptyTasks";
import PlantTasks from "../pages/Tasks/PlantTasks";
import ListFutureTasksbyPeriod from "../pages/Tasks/ListFutureTasksbyPeriod";

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