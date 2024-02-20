import React from 'react';
import { View, Text, Image } from 'react-native';

const RightArticle = ({ textoArtigo2 }) => (
  <View style={{ flex: 1, borderLeftWidth: 3 }}>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Title 2</Text>
    </View>
    <View style={{ flex: 6, padding: 8 }}>
      <View style={{ flex: 1 }}>
        <Text>{textoArtigo2.slice(0, 120)}</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          source={require('../imagens/Sky.png')}
          style={{ flex: 2, width: undefined, height: undefined }}
        />
        <View style={{ flex: 3, paddingLeft: 8 }}>
          <Text>
            {textoArtigo2.slice(120, 180)}
            {textoArtigo2.length > 180 ? '...' : ''}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default RightArticle;
