import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditProfile from "../pages/EditProfile";
import EditPassword from "../pages/EditPassword";

const { Screen, Group } = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <Group>
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="EditPassword" component={EditPassword} />
    </Group>
  )
}