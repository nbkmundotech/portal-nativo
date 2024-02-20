import React from 'react';
import { Button, View } from "react-native";
import ScreenName from '../constants/ScreenName';

export default function Home(props) {
  return (
    <View>
      <Button title="Arco Iris" onPress={() => props.navigation.navigate(ScreenName.ArcoIris)} />
      <Button title="Revvista Nativva" onPress={() => props.navigation.navigate(ScreenName.RevvistaNativva)} />
    </View>
  );
}
