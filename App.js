
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 //JS que contienen las funciones o "screens" de las diversas pantallas.
//import * as SecureStore from 'expo-secure-store';
import SignupScreen from './components/Auth/SignupScreen';
import AuthScreen from './components/Auth/AuthScreen';
import LoginScreen from './components/Auth/LoginScreen';


//JS que contienen las vistas de prueba de sensores
import Accelerometer from './components/Sensors/Accelerometer';
import Gyroscope from './components/Sensors/Gyroscope';
//JS  que contienen las vistas relacionadas al plan de ejercicio
import AccountScreen from './components/Screens/AccountScreen';
import DetailExerciseScreen from './components/Screens/DetailExerciseScreen';
import PlanningScreen from './components/Screens/PlanningScreen';
import Video from './components/Video';
import Ejemplo from './components/Ejemplo';
import AlgorithmIA from './components/Algorithm/Algorithm';
import ListOfExercisesScreen from './components/Screens/ListOfExcercisesScreen';
import UserData from './components/Auth/UserData';

const Stack = createNativeStackNavigator();
export const AuthContext = React.createContext();
function App({navigation}){
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        //userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            // No token found, user isn't signed in
            <>
              <Stack.Screen name="Auth" component={AuthScreen} options={
                {
                  title: 'Inicio' ,
                  headerShown:true,
                  headerStyle: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    justifyContent: 'center'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                      textAlign:'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      fontWeight: 'normal',
                      backgroundColor: '#4cbdfd',
                    },
                }}/>
              <Stack.Screen name="Login" component={LoginScreen} options={{title: 'Inicio de sesión' ,
                  headerShown:true,
                  headerStyle: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    justifyContent: 'center'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                      textAlign:'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      fontWeight: 'normal',
                      backgroundColor: '#4cbdfd',
                    },
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',}}/>
              <Stack.Screen name="Signup" component={SignupScreen} options={{title: 'Registro' ,
              headerShown:true,
              headerStyle: {
                backgroundColor: 'black',
                textAlign: 'center',
                justifyContent: 'center'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                  textAlign:'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  fontWeight: 'normal',
                  backgroundColor: '#4cbdfd',
                },
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',}}/>
            </>
            
          ) : (
            // User is signed in
            <>
              <Stack.Screen name="Account" component={AccountScreen} options={{title: 'Perfil' ,
                  headerShown:true,
                  headerStyle: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    justifyContent: 'center'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                      textAlign:'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      fontWeight: 'normal',
                      backgroundColor: '#4cbdfd',
                    },}}/>
              <Stack.Screen name="Gyroscope" component={Gyroscope} />
              <Stack.Screen name="Accelerometer" component={Accelerometer}/>
              <Stack.Screen name="Planning" component={PlanningScreen} options={{title: 'Planes de ejercicio' ,
                  headerShown:true,
                  headerStyle: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    justifyContent: 'center'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                      textAlign:'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      fontWeight: 'normal',
                      backgroundColor: '#4cbdfd',
                    },}}/>
              <Stack.Screen name="Algorithm" component={AlgorithmIA}options={{title: 'Test' ,
                  headerShown:true,
                  headerStyle: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    justifyContent: 'center'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                      textAlign:'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      fontWeight: 'normal',
                      backgroundColor: '#4cbdfd',
                    },}}/>
              <Stack.Screen name="ListExercises" component={ListOfExercisesScreen} options={{title: 'Listado de ejercicios',
                  headerShown:true,
                  headerStyle: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    justifyContent: 'center'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                      textAlign:'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      fontWeight: 'normal',
                      backgroundColor: '#4cbdfd',
                    },}}/>
              <Stack.Screen name="Video" component={Video}/>
              <Stack.Screen name="Ejemplo" component={Ejemplo}/>
              <Stack.Screen name="Details" component={DetailExerciseScreen} options={{title: ' Detalles' ,
                  headerShown:true,
                  headerStyle: {
                    backgroundColor: 'black',
                    textAlign: 'center',
                    justifyContent: 'center'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                      textAlign:'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      fontWeight: 'normal',
                      backgroundColor: '#4cbdfd',
                    },}}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
export default App ;


