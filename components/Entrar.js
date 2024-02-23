import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import ScreenName from '../constants/ScreenName';
import useAuth from '../hooks/useAuth';
import styles from '../styles/styles-global';
import LoginForm from './LoginForm';

export default function Entrar(props) {
  const [state, setState] = React.useState({
    email: '',
    senha: '',
  });

  const { entrar } = useAuth();

  function onEntrarPress() {
    entrar({
      email: state.email,
      senha: state.senha,
    });
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Entrar</Text>
      </View>

      <LoginForm
        fields={state}
        setFields={setState}
      />

      <View style={{ padding: 8 }}>
        <Button
          title="Entrar"
          onPress={onEntrarPress}
        />
      </View>

      <Button title="Cadastrar" onPress={() => props.navigation.navigate(ScreenName.FormularioDeCadastro)} />
    </View>
  );
}
