import React from 'react';
import { Button, View } from "react-native";
import ScreenName from '../constants/ScreenName';
import useAuth from '../hooks/useAuth';

export default function Home(props) {
  const { sair } = useAuth();

  return (
    <View>
      <Button title="Arco Iris" onPress={() => props.navigation.navigate(ScreenName.ArcoIris)} />
      <Button title="Revvista Nativva" onPress={() => props.navigation.navigate(ScreenName.RevvistaNativva)} />
      <Button title="Sair" onPress={() => sair()} />
    </View>
  );
}
