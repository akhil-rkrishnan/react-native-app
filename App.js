import React, { useEffect, useState } from "react";
import StartNavigation from "./routes/StartNavigation";
import AppLoading from "expo-app-loading";
import { getFonts } from "./FontLoader";
import { MediumTitle } from "./src/screens/common/CommonComponents";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    const fetchFonts = async () => {
      try {
        console.log("Waiting to load fonts...");
        await getFonts();
        setFontLoaded(true);
        console.log("fonts loaded");
      } catch (exception) {
        console.log(exception);
        console.log("fonts load failed");
      }
    };
    fetchFonts();
  }, []);
  if (fontLoaded) {
    return <StartNavigation />;
  } else {
    return <MediumTitle options={{}} text={"Loading fonts ..."} />;
  }
};

export default App;
