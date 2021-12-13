import React from 'react';
import {TextInput, Text} from 'react-native';
import styles from '../../screen/Auth/style';

export default function Input(props) {
  return (
    <>
      <Text style={styles.label}>{props.text}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        keyboardType={props.isNumber ? 'numeric' : 'default'}
        secureTextEntry={props.isPassword ? true : false}
        onChangeText={text => props.handleChangeForm(text, props.name)}
      />
    </>
  );
}
