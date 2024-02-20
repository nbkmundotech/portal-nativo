import React from 'react';
import { View, Text, Image } from 'react-native';

const LeftArticle = props => (
  <View style={{ flex: 1, borderRightWidth: 3 }}>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Title 1</Text>
    </View>

    <View style={{ flex: 6, padding: 8 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          source={require('../imagens/Leopard.png')}
          style={{ flex: 1, width: undefined, height: undefined }}
        />
        <View style={{ flex: 1, paddingLeft: 8 }}>
          <Text>{props.textoArtigo1.slice(0, 60)}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text>
          {props.textoArtigo1.slice(60, 180)}{props.textoArtigo1.length > 180 ? '...' : ''}
        </Text>
      </View>
    </View>
  </View>
);

export default LeftArticle;
