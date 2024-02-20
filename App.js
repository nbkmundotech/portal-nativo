import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ArcoIris from './arco-iris/ArcoIris';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HOME">
          <Stack.Screen name="ARCO_IRIS" component={ArcoIris} options={{ title: 'Arco Iris' }} />
          <Stack.Screen name="HOME" component={Home} options={{ title: 'Pagina Principal' }} />
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
