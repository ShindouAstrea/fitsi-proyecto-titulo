
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormsScreen from './components/FormsScreen';
import SettingsScreen from './components/SettingsScreen';
import HomeScreen from './components/HomeScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: '' }} />
        <Stack.Screen name="Forms" component={FormsScreen} options={{title: 'Formulario' }}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{title: 'Configuración' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

