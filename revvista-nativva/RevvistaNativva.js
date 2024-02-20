import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Constants from 'expo-constants';

import Header from './components/Header';
import Main from './components/Main';
import Secondary from './components/Secondary';
import Footer from './components/Footer';

class RevvistaNativva extends Component {
  render() {
    const textoPrincipal = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel lacus vel justo luctus viverra id vitae urna. Duis condimentum sollicitudin turpis, molestie mattis mauris feugiat ac. Praesent gravida ultricies ante, vel rutrum nulla dapibus non. In non lacus id odio lacinia suscipit. Nulla blandit dolor elit, pharetra ultricies tortor tortor tortor convallis eget.';
    const textoArtigo1 = 'Mauris vel tincidunt odio. Donec eget eros ut lorem vehicula pellentesque. Cras ac metus viverra sapien eleifend auctor. Nulla porta lacus in nibh imperdiet, vitae tempus urna consectetur. Etiam pharetra finibus nulla nec auctor. Vivamus et varius ipsum. Nullam ornare augue a neque posuere tincidunt.';
    const textoArtigo2 = 'In elit odio, dapibus vel pharetra vitae, semper in magna. Phasellus luctus faucibus eros. Sed molestie ut dolor molestie fermentum. Donec vitae ex nisi. Aliquam erat volutpat. Praesent sapien nunc, commodo nec libero quis, dignissim mollis turpis. Nulla tortor tellus, vulputate eget tincidunt vel, semper quis nunc. Nulla facilisi. Integer commodo vehicula vehicula. Donec sit amet eleifend nulla, id tincidunt mi. Sed at risus quis augue facilisis consectetur. Suspendisse lectus tortor, accumsan nec hendrerit ut, rutrum sed sapien. Suspendisse ornare nulla eu leo facilisis pellentesque.';

    return (
      <View style={styles.container}>
        <Header />

        <Main textoPrincipal={textoPrincipal} />

        <Secondary
          textoArtigo1={textoArtigo1}
          textoArtigo2={textoArtigo2}
        />

        <Footer>
          Copyright (c) 2017 Revvista Nativva
        </Footer>
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
});

export default RevvistaNativva;
