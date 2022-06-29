import * as React from 'react';
import {View, Button,Text,StyleSheet,StatusBar} from 'react-native';
import FlatButton from '../Buttom';

const Separator = () => <View style={styles.separator} />;
function AuthScreen({navigation}) {
    return (

        <View style={styles.container}>
    
        
          <Separator/>
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
      marginTop: StatusBar.currentHeight || 0,
    },
    separator: {
        marginVertical: 8,
    
      },
    button:{
      marginVertical: 10,
    }
  });