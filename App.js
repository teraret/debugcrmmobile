import React from "react";
import { StatusBar } from "expo-status-bar";
import store from "./redux/store";
import { Provider } from "react-redux";
import WelcomeScreen from "./app/screens/welcome/WelcomeScreen";
import LoginScreen from "./app/screens/welcome/LoginScreen";
import RegisterScreen from "./app/screens/welcome/RegisterScreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// const HomeScreen = createStackNavigator({
//   WelcomeScreen: WelcomeScreen,
//   LoginScreen: LoginScreen,
//   RegisterScreen: RegisterScreen,
// });

const screens = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  LoginScreen: LoginScreen,
  RegisterScreen: RegisterScreen,
});

const Index = createAppContainer(screens);

export default function App() {
  return (
    <Provider store={store}>
      <Index />
      <StatusBar style="auto" />
    </Provider>
  );
}
