import  React, {useState} from 'react';
import {View, Button,Text,TextInput,StyleSheet,StatusBar,} from 'react-native';
import FlatButton from '../Buttom';

const Separator = () => <View style={styles.separator} />;
function LoginScreen({navigation}) {
  const [nombre, changeName] = useState(null); //Variable creada para que el nombre de lo usuarios
  const [password, changePassword] = useState(null);
  const [state,setState] = useState(null); //Variable creada para capturar si es que esta logueado.
  
    return (
      <View style={styles.container}>
        <Text styles={styles.title}> Ingrese Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeName}
          value={nombre}
          placeholder="Ingrese Nombre" />
        <Text styles={styles.title}> Ingrese Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={changePassword}
          value={password}
          placeholder="Ingrese Contraseña" />
        
          <Separator/>
          
          <Separator/>
           <FlatButton
              text="Iniciar Sesión "
              onPress={() => navigation.navigate('Account')}
          />
        </View>
      );
};
export default LoginScreen;
const styles = StyleSheet.create({
    container:{
      
      flex: 1,
      justifyContent: 'center',
    },
    separator: {
        marginVertical: 8,
    
      },
    button:{
      marginVertical: 10,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
    },
    title: {
  
    }
  });