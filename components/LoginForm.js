import React from 'react';
import styles from '../styles/styles-global';
import { Button, View, Text, TextInput } from 'react-native';

export default function LoginForm(props) {
  function onChangeTextField(fieldName) {
    return (text) => {
      props.setFields({
        ...props.fields,
        [fieldName]: text
      })
    };
  }

  return (
    <React.Fragment>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={props.fields.email}
          onChangeText={onChangeTextField('email')}
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
          value={props.fields.senha}
          onChangeText={onChangeTextField('senha')}
          maxLength={15}
        />
      </View>

      <View style={{ padding: 8 }}>
        <Button
          title={props.submitTitle}
          onPress={props.onSubmitPress}
        />
      </View>
    </React.Fragment>
  );
}
