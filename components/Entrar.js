import React from 'react';
import { Button, View, Text } from 'react-native';
import ScreenName from '../constants/ScreenName';

export default function Entrar(props) {
  return (
    <View>
      <Text>Entrar</Text>
      <Button title="Cadastrar" onPress={() => props.navigation.navigate(ScreenName.FormularioDeCadastro)} />
    </View>
  );
}
