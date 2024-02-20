import React from 'react';
import { Button, View } from "react-native";

export default function Home(props) {
  return (
    <View>
      <Button title="Arco Iris" onPress={() => props.navigation.navigate('ARCO_IRIS')} />
    </View>
  );
}
