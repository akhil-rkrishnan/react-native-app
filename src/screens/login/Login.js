import { Color } from "../../../color/Colors";
import {
  NormalTextInput,
  PasswordTextInput,
  LargeTitle,
  MediumTitle,
  SmallTitle,
  EmailTextInput,
  DefaultButton,
} from "../common/CommonComponents";
import { View, StyleSheet } from "react-native";

const LoginScreen = (params) => {
  return (
    <View style={style.parent}>
      <View style={style.center_style}>
        <LargeTitle
          options={{ top: 20, justifyContent: "center" }}
          text={"Welcome to my login"}
        />
      </View>
      <SmallTitle options={{ top: 20 }} text={"Username"} />
      <EmailTextInput options={{ top: 10 }} hint={"Enter your email"} />
      <SmallTitle options={{ top: 10 }} text={"Password"} />
      <PasswordTextInput options={{ top: 10 }} hint={"Enter your password"} />
      <DefaultButton options={{ top: 10 }} text={"Login"} />
    </View>
  );
};

const style = StyleSheet.create({
  parent: {
    flexDirection: "column", // 'column' for vertical layout
    padding: 20,
    top: 45,
    backgroundColor: Color.white,
    borderColor: Color.green,
    borderRadius: 10,
    borderWidth: 1,
    width: 400,
    alignContent: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  center_style: {
    justifyContent: "center", // 'flex-start', 'center', 'flex-end', 'space-between', 'space-around'
    alignItems: "center", // 'flex-start', 'center', 'flex-end', 'stretch'
  },
});

export { LoginScreen };
