import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import {
  LargeTitle,
  SmallTitle,
  MediumTitle,
} from "../common/CommonComponents";
import { Color } from "../../../color/Colors";

var isAlreadyLoggedIn = false;

const LargeTitleScreen = () => {
  let titleParams = {
    textColor: Color.black,
    backgroundColor: Color.transparent,
    top: 20,
    width: 100,
  };
  return (
    <View>
      <LargeTitle options={titleParams} text={"This is a large title"} />
    </View>
  );
};
const MediumTitleScreen = () => {
  let titleParams = {
    textColor: Color.black,
    backgroundColor: Color.white,
    top: 35,
  };
  return (
    <View>
      <SmallTitle options={titleParams} text={"This is a medium title"} />
    </View>
  );
};
const SmallTitleScreen = () => {
  let titleParams = {
    textColor: Color.green,
    backgroundColor: Color.transparent,
    top: 45,
  };
  return (
    <View>
      <MediumTitle options={titleParams} text={"This is a small title"} />
    </View>
  );
};

export { LargeTitleScreen, MediumTitleScreen, SmallTitleScreen };
