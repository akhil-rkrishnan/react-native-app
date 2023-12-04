import React from "react";
import { Text, Button, TextInput } from "react-native";
import TitleSyle from "./CommonStyles";

console.log(TitleSyle);

const LargeTitle = (params) => {
  return <Text style={TitleSyle(params.options).large}>{params.text}</Text>;
};

const SmallTitle = (params) => {
  return <Text style={TitleSyle(params.options).small}>{params.text}</Text>;
};

const MediumTitle = (params) => {
  return <Text style={TitleSyle(params.options).medium}>{params.text}</Text>;
};

export { LargeTitle, SmallTitle, MediumTitle };
