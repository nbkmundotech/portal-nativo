import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import ArcoIris from './arco-iris/ArcoIris';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenName from './constants/ScreenName';
import RevvistaNativva from './revvista-nativva/RevvistaNativva';
import Entrar from './components/Entrar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FormularioDeCadastro from './formulario-de-cadastro/FormularioDeCadastro';
import AuthContextProvider from './context/AuthContextProvider';
import React from 'react';
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyApp() {
  const { autenticado, carregando } = useAuth();

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        {autenticado ? (
          <Stack.Navigator initialRouteName={ScreenName.Home}>
            <Stack.Screen name={ScreenName.ArcoIris} component={ArcoIris} options={{ title: 'Arco Iris' }} />
            <Stack.Screen name={ScreenName.Home} component={Home} options={{ title: 'Pagina Principal' }} />
            <Stack.Screen name={ScreenName.RevvistaNativva} component={RevvistaNativva} options={{ title: 'Revvista Nativva' }} />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator>
            <Drawer.Screen name={ScreenName.Entrar} component={Entrar} />
            <Drawer.Screen name={ScreenName.FormularioDeCadastro} component={FormularioDeCadastro} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <AuthContextProvider>
      <MyApp />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
