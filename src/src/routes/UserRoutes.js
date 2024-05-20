import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditProfile from "../pages/User/EditProfile";
import EditPassword from "../pages/User/EditPassword";
import Settings from "../pages/User/Settings";
import Register from "../pages/User/Register";
import Login from "../pages/User/Login";
import RedefinePassword from "../pages/User/RedefinePassword";

const { Screen, Group } = createNativeStackNavigator();

export default function UserRoutes() {
  return (
    <Group>
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="EditPassword" component={EditPassword} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Register" component={Register} />
      <Screen name="Login" component={Login} />
      <Screen name="RedefinePassword" component={RedefinePassword} />
    </Group>
  );
}
