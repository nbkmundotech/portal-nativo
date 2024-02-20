import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={{ fontSize: 16 }}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
