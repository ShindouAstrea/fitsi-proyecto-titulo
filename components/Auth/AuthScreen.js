import * as React from 'react';
import {View, Button,Text,StyleSheet,StatusBar} from 'react-native';
import FlatButton from '../Buttom';

const Separator = () => <View style={styles.separator} />;
function AuthScreen({navigation}) {
    return (

        <View style={styles.container}>
          <FlatButton 
              text="Registrarme"
              onPress={()=> navigation.navigate('Signup')}
              />
          <Separator/>
           <FlatButton
              text="Iniciar Sesión "
              onPress={() => navigation.navigate('Login')}
          />
        </View>
      );
};

export default AuthScreen;
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'black'
    },
    separator: {
        marginVertical: 8,
    
      },

  });