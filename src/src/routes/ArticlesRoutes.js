import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ArticlesHome from "../pages/Articles/ArticlesHome";
import ArticlesView from "../pages/Articles/ArticlesView";

const { Screen, Group } = createNativeStackNavigator();

export default function ArticlesRoutes() {
  return (
    <Group>
      <Screen name="ArticlesHome" component={ArticlesHome} />
      <Screen name="ArticlesView" component={ArticlesView} />
    </Group>
  )
}