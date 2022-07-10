import  * as React from 'react';
import {View, Button,Text,TextInput,StyleSheet,StatusBar,} from 'react-native';
//Imports Librerias Firebase
import {getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { AuthContext } from '../../App';
import MyModal from '../Modal';
//----------------------------------------------------------------
import FlatButton from '../Buttom';
import { set } from 'firebase/database';
 // Constantes para conectar con la base de datos de firebase
 const app  = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 
 //----------------------------------------------------------------
const Separator = () => <View style={styles.separator} />;
function LoginScreen({navigation}) {
  const [mail, setMail] = React.useState(null); //Variable creada para que el nombre de lo usuarios
  const [password, setPass] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const { signIn } = React.useContext(AuthContext);

  const iniciarSesion=()=>{
    signInWithEmailAndPassword(auth,mail,password)
    .then((userCredential)=>{
      console.log("sesion iniciada");
      const user = userCredential.user ;
      signIn({mail,password})
    })
    .catch(error =>{
      alert("Verifique que el correo ya no este registrado y que los campos esten ocupados")
    })
   }

    return (
      <View style={styles.container}>
        <Text styles={styles.title}> Ingrese Correo registrado</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setMail(text)}
          value={mail}
          placeholder=" Ingrese Mail" />
        <Text styles={styles.title}> Ingrese Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setPass(text)}
          value={password}
          placeholder=" Ingrese Contraseña" 
          secureTextEntry={true}/>
          
          <Separator/>
           <FlatButton
              text="Iniciar Sesión "
              onPress={() => {
                iniciarSesion();
              }
              }
          />
           <Separator/>
          <FlatButton
              text="Olvidé Mi contraseña "
              onPress={() => setModalVisible(true)}        
          />
          <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
    },
    title: {
        fontStyle: 'italic',
        fontSize:30,
        fontWeight: 'bold',
    }
  });