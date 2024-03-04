import { View, ImageBackground } from "react-native";
import { styles } from "./App.styles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import Input from "./components/Input/Input";
import { useEffect, useState } from "react";
import DisplayTemperature from "./components/DisplayTemperature/DisplayTemperature";
import {
  convertTemperatureTo,
  getOppositeUnit,
  isTemperatureCold,
} from "./utils/temperature";
import ButtonConvert from "./components/Button/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground, setCurrentBackground] = useState(coldBackground);

  useEffect(() => {
    const isCold = isTemperatureCold(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  return (
    <ImageBackground style={styles.backgroundImage} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.container}>
            <DisplayTemperature
              unit={oppositeUnit}
              temperature={getConvertedTemperature()}
            />
            <Input
              onChange={setInputValue}
              defaultValue={0}
              unit={currentUnit}
            />
            <ButtonConvert
              unit={currentUnit}
              onPress={() => {
                setCurrentUnit(oppositeUnit);
              }}
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
