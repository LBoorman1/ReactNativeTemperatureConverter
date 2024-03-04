import { View, TextInput, Text } from "react-native";
import React from "react";
import { styles } from "./Input.styles";

const Input = ({ defaultValue, onChange, unit }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={4}
        placeholder="Type your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={(text) => onChange(text)}
      />
      <Text style={styles.unit}>{unit}</Text>
    </View>
  );
};

export default Input;
