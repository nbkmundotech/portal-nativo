import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import ScreenName from '../constants/ScreenName';

export default function Entrar(props) {
  const [state, setState] = React.useState({
    email: '',
    senha: '',
  });

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Entrar</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={state.email}
          onChangeText={(text) => setState({ ...state, email: text })}
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
          value={state.senha}
          onChangeText={(text) => setState({ ...state, senha: text })}
          maxLength={15}
        />
      </View>

      <Button title="Cadastrar" onPress={() => props.navigation.navigate(ScreenName.FormularioDeCadastro)} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: 'rgb(130, 149, 174)',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  inputText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
  },
});
