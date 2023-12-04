import React from "react";
import { Text, Button, TextInput } from "react-native";
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
  return <Text style={TextStyle(params.options).large}>{params.text}</Text>;
};

const SmallTitle = (params) => {
  return <Text style={TextStyle(params.options).small}>{params.text}</Text>;
};

const MediumTitle = (params) => {
  return <Text style={TextStyle(params.options).medium}>{params.text}</Text>;
};

const NormalTextInput = (params) => {
  return (
    <TextInput
      style={InputStyle(params.options).default}
      placeholder={params.hint}
      keyboardType={textInputMap.normal}
    ></TextInput>
  );
};

const EmailTextInput = (params) => {
  return (
    <TextInput
      style={InputStyle(params.options).default}
      placeholder={params.hint}
      keyboardType={textInputMap.email}
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
    ></TextInput>
  );
};

const DefaultButton = (params) => {
  return (
    <Button
      style={ButtonStyle(params.options).default}
      title={params.text}
    ></Button>
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
};
