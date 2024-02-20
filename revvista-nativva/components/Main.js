import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Main = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 3 }}>
        <Text style={{ fontSize: 16 }}>
          {props.textoPrincipal.slice(0, 256) + ' ...'}
        </Text>
      </View>
      <Image
        source={require('../imagens/Burlwood.png')}
        style={{ flex: 2, width: undefined, height: undefined }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 6,
    backgroundColor: '#f8ecc2',
    flexDirection: 'row',
    padding: 8,
  },
});

export default Main;
