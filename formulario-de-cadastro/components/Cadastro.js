import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import validator from 'validator';
import { baseUrl } from '../../constants';
import styles from '../../styles/styles-global';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      mensagem: null,
      erros: [],
    };

    this.onCadastrarPress = this.onCadastrarPress.bind(this);
  }

  validarFormulario() {
    const erros = [];

    if (!this.state.email) {
      erros.push('O email não pode ficar em branco');
    }
    if (!validator.isEmail(this.state.email)) {
      erros.push('O formato do email está inválido');
    }
    if (!this.state.senha) {
      erros.push('A senha não pode ficar em branco');
    }
    if (this.state.senha.length < 6) {
      erros.push('A senha deve ter no mínimo 6 caracteres');
    }

    return erros;
  }

  onCadastrarPress() {
    this.setState({ mensagem: '', erros: [] }, () => {
      const erros = this.validarFormulario();

      if (erros.length > 0) {
        this.setState({ erros });
        return;
      }

      fetch(`${baseUrl}/usuarios`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          senha: this.state.senha,
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            mensagem: 'Muito obrigado por se cadastrar! Verique o seu email para os próximos passos',
            email: '',
            senha: '',
          });
        })
        .catch(error => {
          this.setState({
            erros: [error.message]
          });
        });
    });
  }

  renderErros() {
    if (this.state.erros.length > 0) {
      const listaDeErros = this.state.erros.map((erro, index) =>
        <Text key={index} style={{ color: 'red', fontSize: 18 }}>* {erro}</Text>
      );

      return (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 18 }}>O seu cadastro falhou:</Text>
          {listaDeErros}
        </View>
      );
    }
  }

  renderMensagem() {
    if (this.state.mensagem) {
      return (
        <Text style={{ alignSelf: 'center', color: 'green', fontSize: 18 }}>{this.state.mensagem}</Text>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Nova Conta</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              value={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Senha</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="rgba(0, 0, 0, 0)"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              value={this.state.senha}
              onChangeText={(text) => this.setState({ senha: text })}
              maxLength={15}
            />
          </View>

          <View style={{ padding: 8 }}>
            <Button
              title="Cadastrar"
              onPress={this.onCadastrarPress}
            />
          </View>
        </View>

        {this.renderErros()}
        {this.renderMensagem()}
      </View>
    );
  }
}

export default Cadastro;
