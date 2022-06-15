
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //JS que contienen las funciones o "screens" de las diversas pantallas.
 import SignupScreen from './components/SignupScreen';
import BottomNav from './components/Nav/BottomNav';
//JS que contienen las vistas de prueba de sensores
import Accelerometer from './components/Sensors/Accelerometer';
import Gyroscope from './components/Sensors/Gyroscope';
//JS  que contienen las vistas relacionadas al plan de ejercicio
import AccountScreen from './components/AccountScreen';
import ExampleScreen from './components/ExampleScreen';
import PlanningScreen from './components/PlanningScreen';

import Ejemplo from './components/Ejemplo';




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
        initialRouteName="Forms"
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
        <Stack.Screen name="Home" component={BottomNav} 
        options={{headerShown: true}} />
        <Stack.Screen name="Gyroscope" component={Gyroscope} 
        options={{headerShown: true , title: "Giroscopio pruebas"}} />
        <Stack.Screen name="Accelerometer" component={Accelerometer}  
        options={{headerShown: true,title: 'Acelerometro pruebas'}} />
        <Stack.Screen name="Forms" component={SignupScreen} options={{title: 'Registro' }}/>
        <Stack.Screen name="Account" component={AccountScreen} options={{title: 'Perfil' }}/>
        <Stack.Screen name="Example" component={ExampleScreen} options={{title: 'Como realizarlo' }}/>
        <Stack.Screen name="Planning" component={PlanningScreen} options={{title: 'Plan de ejercicio' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

