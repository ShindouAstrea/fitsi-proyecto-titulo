
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //JS que contienen las funciones o "screens" de las diversas pantallas.
import FormsScreen from './components/FormsScreen';

import SettingsScreen from './components/SettingsScreen';
import HomeScreen from './components/Nav/HomeScreen';

//Se instancian las "pantallas" que tendra la app
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    /* Container de las rutas de la APP
    * initialRouteName , inidica la ruta de inicio de la app
    * En la declaracion de las rutas:
    * "name" corresponde al nombre a invocar en toda la app a esta ruta
    * "component" es donde se encuenta el controlador de dicha ruta
    * "option" son los parametros a configurar de la ruta.
    * Nota : lo contenido en ScreenOptions, hace que sea para todas las rutas,
    * estas mismas pueden ser cambiadas independientemente en sus options,
    * colocando los mismos parametros , como el "headerStyle"(estilo del header)
    */
    <NavigationContainer>  
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4cbdfd',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            fontWeight: 'normal',
          },
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerShown: true}} />
        <Stack.Screen name="Forms" component={FormsScreen} options={{title: 'Formulario' }}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{title: 'Configuración' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

