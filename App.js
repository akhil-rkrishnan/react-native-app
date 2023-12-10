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
        await getFonts();
        setFontLoaded(true);
      } catch (exception) {
        console.log(exception);
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
