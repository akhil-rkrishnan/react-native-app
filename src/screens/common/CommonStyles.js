import React from "react";
import { StyleSheet } from "react-native";
import { exp } from "react-native-reanimated";
import "../../../assets/fonts";

const TitleStyle = (params) => {
  var backgroundColor = params.backgroundColor || "#fff";
  var textColor = params.textColor || "#000";
  var top = params.top || 0;
  var bottom = params.bottom || 0;
  var left = params.left || 0;
  var right = params.right || 0;
  var flex = params.flex || 1;
  var alignItems = params.alignItems || "center";
  var justifyContent = params.justifyContent || "top";
  var width = params.width || "auto";
  var height = params.height || "auto";
  return StyleSheet.create({
    large: {
      flex: flex,
      color: textColor,
      backgroundColor: backgroundColor,
      alignItems: alignItems,
      width: width,
      height: height,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      justifyContent: justifyContent,
      fontSize: 30,
    },
    medium: {
      flex: flex,
      color: textColor,
      backgroundColor: backgroundColor,
      alignItems: alignItems,
      width: width,
      height: height,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      justifyContent: justifyContent,
      fontSize: 25,
    },
    small: {
      flex: flex,
      color: textColor,
      backgroundColor: backgroundColor,
      alignItems: alignItems,
      width: width,
      height: height,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      justifyContent: justifyContent,
      fontSize: 18,
    },
  });
};

export default TitleStyle;
