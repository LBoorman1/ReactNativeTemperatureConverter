import {styles} from "./ButtonConvert.styles";

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonConvert = ({unit, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Convert To {unit}</Text>
    </TouchableOpacity>
  )
}

export default ButtonConvert