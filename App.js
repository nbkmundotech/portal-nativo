import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ArcoIris from './arco-iris/ArcoIris';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenName from './constants/ScreenName';
import RevvistaNativva from './revvista-nativva/RevvistaNativva';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HOME">
          <Stack.Screen name={ScreenName.ArcoIris} component={ArcoIris} options={{ title: 'Arco Iris' }} />
          <Stack.Screen name={ScreenName.Home} component={Home} options={{ title: 'Pagina Principal' }} />
          <Stack.Screen name={ScreenName.RevvistaNativva} component={RevvistaNativva} options={{ title: 'Revvista Nativva' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
