import React from "react";
import { Text, Button, TextInput, View } from "react-native";
import TextStyle from "./TextStyle";
import { InputStyle } from "./TextInputStyle";
import { ButtonStyle } from "./ButtonStyle";

const textInputMap = {
  number: "numeric",
  email: "email-address",
  password: "password",
  normal: "text",
};

const LargeTitle = (params) => {
  return (
    <Text style={TextStyle(params.options).large} onPress={params.onClick}>
      {params.text}
    </Text>
  );
};

const SmallTitle = (params) => {
  return (
    <Text style={TextStyle(params.options).small} onPress={params.onClick}>
      {params.text}
    </Text>
  );
};

const MediumTitle = (params) => {
  return (
    <Text style={TextStyle(params.options).medium} onPress={params.onClick}>
      {params.text}
    </Text>
  );
};

const NormalTextInput = (params) => {
  return (
    <TextInput
      style={InputStyle(params.options).default}
      placeholder={params.hint}
      keyboardType={textInputMap.normal}
      onPress={params.onClick}
      onChangeText={params.onTextChange}
    ></TextInput>
  );
};

const EmailTextInput = (params) => {
  return (
    <TextInput
      style={InputStyle(params.options).default}
      placeholder={params.hint}
      keyboardType={textInputMap.email}
      onPress={params.onClick}
      onChangeText={params.onTextChange}
    ></TextInput>
  );
};

const PasswordTextInput = (params) => {
  return (
    <TextInput
      style={InputStyle(params.options).default}
      placeholder={params.hint}
      secureTextEntry={true}
      keyboardType={textInputMap.password}
      onPress={params.onClick}
      onChangeText={params.onTextChange}
    ></TextInput>
  );
};

const DefaultButton = (params) => {
  return (
    <View style={ButtonStyle(params.options).parent} onPress={params.onClick}>
      <Button title={params.text} onPress={params.onClick} />
    </View>
  );
};

const DefaultText = (params) => {
  return (
    <Text style={TextStyle(params.options).default} onPress={params.onClick}>
      {params.text}
    </Text>
  );
};

export {
  LargeTitle,
  SmallTitle,
  MediumTitle,
  NormalTextInput,
  PasswordTextInput,
  EmailTextInput,
  DefaultButton,
  DefaultText,
};
