import * as Font from "expo-font";

const getFonts = () =>
  Font.loadAsync({
    "roboto-italic": require("./assets/fonts/roboto-Italic.ttf"),
    "roboto-thin": require("./assets/fonts/roboto-thin.ttf"),
    "roboto-medium": require("./assets/fonts/roboto-medium.ttf"),
  });

export { getFonts };
