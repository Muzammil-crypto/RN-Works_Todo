import React from 'react';
import {TextInput} from 'react-native';
interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: Function;
  stylings: any;
}

export const InputField = ({placeholder, value}: InputProps) => {
  return (
    <>
      <TextInput placeholder={placeholder} value={value} />
    </>
  );
};
