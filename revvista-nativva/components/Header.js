import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return (
    <View style={{ flex: 2 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: '#832a0d' }}>
        </View>
        <View style={{ flex: 1, backgroundColor: '#f4a460' }}>
        </View>
        <View style={{ flex: 1, backgroundColor: '#bc8f8f' }}>
        </View>
        <View style={{ flex: 1, backgroundColor: '#cd853f' }}>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 24 }}>Revvista Nativva</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: '#f8ecc2',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
  },
});

export default Header;
