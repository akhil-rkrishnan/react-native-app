import { TextInputStyle } from "react-native";
import { StyleSheet } from "react-native";
import { Color } from "../../../color/Colors";

const InputStyle = (params) => {
  var backgroundColor = params.backgroundColor || Color.white;
  var textColor = params.textColor || Color.black;
  var top = params.top || 0;
  var bottom = params.bottom || 0;
  var left = params.left || 0;
  var right = params.right || 0;
  var flex = params.flex || 1;
  var alignItems = params.alignItems || "start";
  var justifyContent = params.justifyContent || "center";
  var width = params.width || "auto";
  var height = params.height || "auto";
  var borderWidth = params.borderWidth || 1;
  var borderRadius = params.borderRadius || 10;
  var borderColor = params.borderColor || Color.black;
  var padding = params.padding || 10;
  return StyleSheet.create({
    default: {
      flex: flex,
      color: textColor,
      backgroundColor: backgroundColor,
      alignItems: alignItems,
      width: width,
      height: height,
      marginTop: top,
      marginLeft: left,
      marginRight: right,
      marginBottom: bottom,
      padding: padding,
      justifyContent: justifyContent,
      borderWidth: borderWidth,
      borderRadius: borderRadius,
      borderColor: borderColor,
    },
  });
};

export { InputStyle };
