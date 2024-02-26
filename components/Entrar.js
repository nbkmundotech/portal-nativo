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

  React.useEffect(() => {
    if (props.route.params && props.route.params.email) {
      setState({ ...state, email: props.route.params.email });
    }
  }, [props.route.params && props.route.params.email]);

  return (
    <View>
      <LoginForm
        fields={state}
        setFields={setState}
        submitTitle="Entrar"
        onSubmitPress={onEntrarPress}
      />

      <Button title="Cadastrar" onPress={() => props.navigation.navigate(ScreenName.FormularioDeCadastro)} />
    </View>
  );
}
