import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Constants from 'expo-constants';

class RevvistaNativva extends Component {
  render() {
    const textoPrincipal = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel lacus vel justo luctus viverra id vitae urna. Duis condimentum sollicitudin turpis, molestie mattis mauris feugiat ac. Praesent gravida ultricies ante, vel rutrum nulla dapibus non. In non lacus id odio lacinia suscipit. Nulla blandit dolor elit, pharetra ultricies tortor tortor tortor convallis eget.';
    const textoArtigo1 = 'Mauris vel tincidunt odio. Donec eget eros ut lorem vehicula pellentesque. Cras ac metus viverra sapien eleifend auctor. Nulla porta lacus in nibh imperdiet, vitae tempus urna consectetur. Etiam pharetra finibus nulla nec auctor. Vivamus et varius ipsum. Nullam ornare augue a neque posuere tincidunt.';
    const textoArtigo2 = 'In elit odio, dapibus vel pharetra vitae, semper in magna. Phasellus luctus faucibus eros. Sed molestie ut dolor molestie fermentum. Donec vitae ex nisi. Aliquam erat volutpat. Praesent sapien nunc, commodo nec libero quis, dignissim mollis turpis. Nulla tortor tellus, vulputate eget tincidunt vel, semper quis nunc. Nulla facilisi. Integer commodo vehicula vehicula. Donec sit amet eleifend nulla, id tincidunt mi. Sed at risus quis augue facilisis consectetur. Suspendisse lectus tortor, accumsan nec hendrerit ut, rutrum sed sapien. Suspendisse ornare nulla eu leo facilisis pellentesque.';

    return (
      <View style={styles.container}>
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

        <View style={styles.mainContainer}>
          <View style={{ flex: 3 }}>
            <Text style={{ fontSize: 16 }}>
              {textoPrincipal.slice(0, 256) + ' ...'}
            </Text>
          </View>
          <Image
            source={require('./imagens/Burlwood.png')}
            style={{ flex: 2, width: undefined, height: undefined }}
          />
        </View>

        <View style={styles.secondaryContainer}>
          <View style={{ flex: 1, borderRightWidth: 3 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 20 }}>Title 1</Text>
            </View>

            <View style={{ flex: 6, padding: 8 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image
                  source={require('./imagens/Leopard.png')}
                  style={{ flex: 1, width: undefined, height: undefined }}
                />
                <View style={{ flex: 1, paddingLeft: 8 }}>
                  <Text>{textoArtigo1.slice(0, 60)}</Text>
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {textoArtigo1.slice(60, 180)}{textoArtigo1.length > 180 ? '...' : ''}
                </Text>
              </View>
            </View>
          </View>

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
                  source={require('./imagens/Sky.png')}
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
        </View>

        <View style={styles.footerContainer}>
          <Text style={{ fontSize: 16 }}>Copyright (c) 2017 Revvista Nativva</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c19a6b',
    padding: 13,
    marginTop: Constants.statusBarHeight,
  },
  titleContainer: {
    flex: 1,
    backgroundColor: '#f8ecc2',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 6,
  },
  mainContainer: {
    flex: 6,
    backgroundColor: '#f8ecc2',
    flexDirection: 'row',
    padding: 8,
  },
  secondaryContainer: {
    flex: 7,
    backgroundColor: '#f8ecc2',
    borderTopWidth: 6,
    borderBottomWidth: 6,
    flexDirection: 'row',
  },
  footerContainer: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RevvistaNativva;
