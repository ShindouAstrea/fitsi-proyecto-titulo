
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //JS que contienen las funciones o "screens" de las diversas pantallas.
 
import SignupScreen from './components/Auth/SignupScreen';
import AuthScreen from './components/Auth/AuthScreen';
import LoginScreen from './components/Auth/LoginScreen';

import BottomNav from './components/Nav/BottomNav';

//JS que contienen las vistas de prueba de sensores
import Accelerometer from './components/Sensors/Accelerometer';
import Gyroscope from './components/Sensors/Gyroscope';
//JS  que contienen las vistas relacionadas al plan de ejercicio
import AccountScreen from './components/Screens/AccountScreen';
import DetailExerciseScreen from './components/Screens/DetailExerciseScreen';
import PlanningScreen from './components/Screens/PlanningScreen';
import Video from './components/Algorithm/Video';
import Ejemplo from './components/Ejemplo';
import AlgorithmIA from './components/Algorithm/Algorithm';
import ListOfExercisesScreen from './components/Screens/ListOfExcercisesScreen';
import UserData from './components/Auth/UserData';





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
      * */
      <NavigationContainer>  
        <Stack.Navigator 
          initialRouteName="Auth"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'black',
              textAlign: 'center',
              justifyContent: 'center',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              textAlign:'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontWeight: 'normal',
              backgroundColor: '#4cbdfd',
            },
          }}
        >
          <Stack.Screen name="Auth" component={AuthScreen} options={{title: 'Inicio' }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Inicio de sesión' }}/>
          <Stack.Screen name="Home" component={BottomNav} options={{title: 'Inicio' }}/>
          <Stack.Screen name="Gyroscope" component={Gyroscope} />
          <Stack.Screen name="Accelerometer" component={Accelerometer}/>
          <Stack.Screen name="Signup" component={SignupScreen} options={{title: 'Registro' }}/>
          <Stack.Screen name="Account" component={AccountScreen} options={{title: 'Perfil' }}/>
          <Stack.Screen name="Userinfo" component={UserData} options={{title: 'Perfil:Usuario' }}/>
          <Stack.Screen name="Details" component={DetailExerciseScreen} options={{title: ' Detalles' }}/>
          <Stack.Screen name="Planning" component={PlanningScreen} options={{title: 'Planes de ejercicio' }}/>
          <Stack.Screen name="Algorithm" component={AlgorithmIA}options={{title: 'Test' }}/>
          <Stack.Screen name="ListExercises" component={ListOfExercisesScreen} options={{title: 'Listado de ejercicios'}}/>
          <Stack.Screen name="Video" component={Video}/>
           <Stack.Screen name="Ejemplo" component={Ejemplo}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default App;

