import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/dice_1.png'
import DiceTwo from '../assets/dice_2.png'
import DiceThree from '../assets/dice_3.png'
import DiceFour from '../assets/dice_4.png'
import DiceFive from '../assets/dice_5.png'
import DiceSix from '../assets/dice_6.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  ignoreAndroidSystemSettings: false,
  enableVibrateFallback: true,
}

const Dice = ({ imageUrl }: DiceProps) => {
  return (
    <View style={styles.dice}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  )
}

export default function App() {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const handleRoledice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break
      case 2:
        setDiceImage(DiceTwo)
        break
      case 3:
        setDiceImage(DiceThree)
        break
      case 4:
        setDiceImage(DiceFour)
        break
      case 5:
        setDiceImage(DiceFive)
        break
      case 6:
        setDiceImage(DiceSix)
        break
      default:
        setDiceImage(DiceOne)
        break
    }

    ReactNativeHapticFeedback.trigger("impactLight", options)
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
        style={styles.buttonContainer}
        onPress={handleRoledice}
      >
        <Text style={styles.buttonText}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  dice: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40bcf1',
  },
  buttonContainer: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46f140',
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#46f140',
    elevation: 2,
    shadowColor: '#46f140',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,

  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
})