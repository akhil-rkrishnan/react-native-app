import * as React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../src/screens/login/Login";

const StartStack = createNativeStackNavigator();

function StartStackGroup() {
  return (
    <StartStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <StartStack.Screen name="Login" component={LoginScreen} />
    </StartStack.Navigator>
  );
}

const StartNavigation = () => {
  return (
    <NavigationContainer>
      <StartStackGroup />
    </NavigationContainer>
  );
};

export default StartNavigation;
