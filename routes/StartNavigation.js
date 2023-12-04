import * as React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LargeTitleScreen,
  MediumTitleScreen,
  SmallTitleScreen,
} from "../src/screens/home/HomeScreen";

const StartStack = createNativeStackNavigator();

function StartStackGroup() {
  return (
    <StartStack.Navigator
      initialRouteName="Small"
      screenOptions={{ headerShown: false }}
    >
      <StartStack.Screen name="Large" component={LargeTitleScreen} />
      <StartStack.Screen name="Medium" component={MediumTitleScreen} />
      <StartStack.Screen name="Small" component={SmallTitleScreen} />
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
