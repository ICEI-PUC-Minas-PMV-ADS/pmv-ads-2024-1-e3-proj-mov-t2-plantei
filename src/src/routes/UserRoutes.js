import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditProfile from "../pages/User/EditProfile";
import EditPassword from "../pages/User/EditPassword";

const { Screen, Group } = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <Group>
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="EditPassword" component={EditPassword} />
    </Group>
  )
}