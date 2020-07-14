import React, { useEffect } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
import LoginScreen from "./app/screens/welcome/LoginScreen";
import RegisterScreen from "./app/screens/welcome/RegisterScreen";
import DashboardScreen from "./app/screens/dashboard/DashboardScreen";
import SalaryScreen from "./app/screens/salary/SalaryScreen";
import UserScreen from "./app/screens/user/UserScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RetriveTokenSuccess } from "./redux/index";
import DrawerContent from "./app/screens/DrawerContent";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function Index(props) {
  const dispatch = useDispatch();
  const companydata = useSelector((state) => state.login);
  console.log("The value of token is" + companydata.token);
  useEffect(() => {
    console.log("app mounting...");
    dispatch(RetriveTokenSuccess());
  }, []);

  return (
    <NavigationContainer>
      {companydata.token == null ? (
        <HomeScreen />
      ) : (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
          <Drawer.Screen name="SalaryScreen" component={SalaryScreen} />
          <Drawer.Screen name="UserScreen" component={UserScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
export default App;
