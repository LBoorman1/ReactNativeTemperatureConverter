import { View, Text } from 'react-native'
import React from 'react'
import { styles } from "./DisplayTemperature.styles"

const DisplayTemperature = ({temperature, unit}) => {
  return (
      <Text style={styles.temperatureText}>{temperature} {unit}</Text>
  )
}

export default DisplayTemperature