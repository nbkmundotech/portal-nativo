import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import LeftArticle from './LeftArticle';
import RightArticle from './RightArticle';

const Secondary = (props) => {
  return (
    <View style={styles.secondaryContainer}>
      <LeftArticle textoArtigo1={props.textoArtigo1} />

      <RightArticle textoArtigo2={props.textoArtigo2} />
    </View>
  );
};

const styles = StyleSheet.create({
  secondaryContainer: {
    flex: 7,
    backgroundColor: '#f8ecc2',
    borderTopWidth: 6,
    borderBottomWidth: 6,
    flexDirection: 'row',
  },
});

export default Secondary;
