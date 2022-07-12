import  * as React from 'react';
import {View, Label,Text,TextInput,StyleSheet,StatusBar,} from 'react-native';
//Imports Librerias Firebase
import {getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { AuthContext } from '../../App';
import MyModal from '../Modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
const Correo = "Correo";
  const iniciarSesion=()=>{
    signInWithEmailAndPassword(auth,mail,password)
    .then((userCredential)=>{
      const user = userCredential.user ;
      signIn({mail,password})
    })
    .catch(error =>{
      alert("Verifique que el correo ya no este registrado y que los campos esten ocupados")
    })
   }

    return (
      <View style={styles.container}>
          <Text style={{color:'white',marginLeft:12}}>Correo</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>setMail(text)}
            value={mail}
            placeholder=" Ingrese Mail" 
          />
          <Text style={{color:'white',marginLeft:12}}>Contraseña</Text>
          <TextInput
            icon={<FontAwesome name={'envelope'} size={20}/>}
            iconPosition="Left"
            style={styles.input}
            onChangeText={(text)=>setPass(text)}
            value={password}
            placeholder=" Ingrese Contraseña" 
            secureTextEntry={true}
          />
          <Separator/>
          <FlatButton
            text="Iniciar Sesión "
            onPress={() => {iniciarSesion();}}
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
      backgroundColor:'black',
      justifyContent: 'center',
    },
    separator: {
        marginVertical: 8,
    
      },
    input: {
      height: 50,
      margin: 12,
      backgroundColor: 'white',
    
      borderRadius: 15,
      borderWidth: 1,
      padding: 10,
    },
    title: {
        fontStyle: 'italic',
        fontSize:30,
        fontWeight: 'bold',
    },
    
  });