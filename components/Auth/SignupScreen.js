import  * as React from 'react';
import { SafeAreaView, StyleSheet, TextInput,View ,Dimensions,Text,ScrollView} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FlatButton from '../Buttom';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//Imports Librerias Firebase
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { AuthContext } from '../../App';

import { getFirestore, collection, getDocs,setDoc, doc } from 'firebase/firestore';
//------------------------------------------------------------------------------
const Separator = () => <View style={styles.separator} />;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const {width} = Dimensions.get('window');

  /** 
     * Funcion para crear la interfaz de registro , donde se guardaran los distintos datos del usuario talez como
     * Nombre, Apellido,Apodo, Peso, Edad, Altura, tipo de cuerpo y tipo de silueta
     *@param {string} input estilo creado para poder los margenes de los recuardos de inseccion de texto
     *@param {string} title Estilo creado para poder insertar los titulos de los parametros al usuario
     *@param {String} placeholder NombreS transparente para guiar al usuario con que datos debe rellanar el formulario
     */
function SignupScreen({ navigation }) {
  // En la primera interfaz de registro se almacen los datos de nombre - apellido y un apodo a eleccion del usuario.
  const [Nombre, setnombre] = React.useState(null); //Variable creada para que el nombre de lo usuarios
  const [Apellido, setApellido] = React.useState(null); //Variable creada para que el nombre de lo usuarios
  const [Nickname, setNickname] = React.useState(null); //Variable creada para que el nombre de lo usuarios
  const [Peso, setPeso] = React.useState(null); // Variable creada para almacenar el peso del usuario.
  const [Edad,setEdad]=React.useState(null);
  const [Genero,setGenero] = React.useState(null);
  const [Altura,setAltura] = React.useState(null);
  const [Cuerpo,setCuerpo] = React.useState(null);
  const [Silueta,setSilueta] = React.useState(null);
  const [Correo, setCorreo] = React.useState(null);
  const [Password,setPassword] = React.useState(null);
  const { signIn } = React.useContext(AuthContext);


  // *********************************Listas************************************************************
  const listado = ['Masculino', 'Femenino', 'No binario'];
  const Alturas = ['1.40', '1.41', '1.42', '1.43', '1.44', '1.45', '1.46', '1.47', '1.48', '1.49', '1.50', '1.60', '1.70', '1.80', '1.90', '2.00'];
  const Cuerpos = ['Ectomorfo', 'Mesomorfo', 'Endomorfo'];
  const Siluetas = ['Trapecio', 'Triangulo invertido', 'Triangulo', 'Oval', 'Rectangulo'];
  const IMC = (Peso)/((parseFloat(Altura))*(parseFloat(Altura)));
  const guardar = async () =>{
    createUserWithEmailAndPassword(auth,Correo, Password)
    .then((userCredential)=>{
      const user= userCredential.user;
      alert("Te has creado existosamente tu cuenta");
      signIn({Correo,Password})
      uwu();
    })
    .catch((error) =>{
      alert("Por favor complete todo los campos y verifique que el correo ya no se encuentre registrado") ;
    })
    }
    const uwu=async() =>{
      await setDoc(doc(db,"Usuarios", Correo),{
        Nombre,
        Edad,
        Correo,
        Altura,
        Silueta,
        Apellido,
        Nickname,
        Cuerpo,
        Peso,
        Genero,
        IMC
      })
    }
  return (

    //inserccion de los datos de registro de los usarios , cuando abren por primera vez el programa por primera vez, en el programa.
    <View styles={styles.viewContainer}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>


        <Text style={{color:'white',marginLeft:12}}>Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setnombre(text)}
          value={Nombre}
          placeholder=" Ingrese Nombre" />


        <Separator/>


        
        <Text style={{color:'white',marginLeft:12}}>Apellido</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setApellido(text)}
          value={Apellido}
          placeholder=" Ingrese Apellido" />


          <Separator/>


          <Text style={{color:'white',marginLeft:12}}>Apodo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setNickname(text)}
          value={Nickname}
          placeholder=" Ingrese Apodo" />

          <Separator/>
        <Text style={{color:'white',marginLeft:12}}>Correo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setCorreo(text)}
          value={Correo}
          placeholder=" Ingrese Correo" />


          <Separator/>

        <Text style={{color:'white',marginLeft:12}}>Contrase??a</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setPassword(text)}
          value={Password}
          placeholder=" Ingrese Contrase??a" 
          secureTextEntry={true}
        />
          <Separator/>


          <Text style={{color:'white',marginLeft:12}}>G??nero</Text>
        <SelectDropdown
          renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
        }}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          buttonStyle={styles.dropdown1BtnStyle}
          defaultButtonText={' Seleccionar g??nero'}
          data={listado}
          onSelect={(selectedItem) => {
            setGenero(selectedItem)
          } }
          rowTextForSelection={(item) => {
            return item;
          } } />


          <Separator/>


          <Text style={{color:'white',marginLeft:12}}>Edad</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setEdad(text)}
          value={Edad}
          keyboardType='numeric'
          placeholder=" 20" />


          <Separator/>



          <Text style={{color:'white',marginLeft:12}}>Altura</Text>
        <SelectDropdown
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          buttonStyle={styles.dropdown1BtnStyle}
          defaultButtonText={' Seleccionar Altura'}
          data={Alturas}
          onSelect={(selectedItem) => {

            setAltura(selectedItem)
          } }
          rowTextForSelection={(item) => {
            return item;
          } } />


          <Separator/>

          <Text style={{color:'white',marginLeft:12}}>Peso en KG</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setPeso(text)}
          value={Peso}
          keyboardType='numeric'
          placeholder=" Ingrese Peso" />


        <Separator/>

        <Text style={{color:'white',marginLeft:12}}>Tipo de cuerpo</Text>
        <SelectDropdown
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            buttonStyle={styles.dropdown1BtnStyle}
          defaultButtonText={'Seleccionar Cuerpo'}
          data={Cuerpos}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          } }
          onSelect={(selectedItem) => {

            setCuerpo(selectedItem)
          } } />
          <Separator/>

        <Text style={{color:'white'}}>Tipo de Silueta</Text>
        <SelectDropdown 
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            buttonStyle={styles.dropdown1BtnStyle}
          defaultButtonText={'Seleccionar Silueta'}
          data={Siluetas}
          onSelect={(selectedItem) => {
            setSilueta(selectedItem)
          } }
          rowTextForSelection={(item) => {
            return item;
          } } />
          <Separator/> 
          <SafeAreaView style={styles.boton}>
            <FlatButton
            text='Crear mi cuenta'
            onPress={() => {
              guardar();
              } }/>
          </SafeAreaView>
          
      </ScrollView>
      
    </View>
  );
}



/**
 * Constante creada pra poder proporcionar los estilos de los distintos espacio de la interfaz
 */
const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    width:300,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontStyle: 'italic',
    fontSize:18,
    fontWeight: 'normal',

  },
  dropdownContainer:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
boton:
{
  padding:'10%',
  width
},
separator: {
  marginVertical: 8,
},
dropdown1BtnStyle: {
  flex: 1,
  alignItems:'center',
  height: 50,
  width:300,
  backgroundColor: '#FFF',
  borderRadius: 8,
  borderWidth: 1,
  borderColor: '#444',
},
dropdown1DropdownStyle: {
  backgroundColor: '#EFEFEF'
},
dropdown1RowStyle: {
  backgroundColor: '#EFEFEF', 
  borderBottomColor: '#C5C5C5'
},
dropdown1RowTxtStyle: {
  color: '#444',
  textAlign: 'left'
},
viewContainer: {flex: 1, width, backgroundColor: 'black'},
scrollViewContainer: {
  flexGrow: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'black',
  paddingBottom: '20%',
  paddingTop: '20%',
},
});

export default SignupScreen;
