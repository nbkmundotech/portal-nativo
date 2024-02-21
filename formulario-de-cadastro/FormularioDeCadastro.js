import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

import Cadastro from './components/Cadastro';
import ScreenName from '../constants/ScreenName';

class FormularioDeCadastro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cadastro />
        <Button title="Voltar para Entrar" onPress={() => this.props.navigation.navigate(ScreenName.Entrar)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default FormularioDeCadastro;
