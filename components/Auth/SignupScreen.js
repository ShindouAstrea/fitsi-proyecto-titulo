import React, {useEffect,useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput,View ,Dimensions,Text,ScrollView} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FlatButton from '../Buttom';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//Imports Librerias Firebase
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,setDoc, doc } from 'firebase/firestore';
//------------------------------------------------------------------------------
const Separator = () => <View style={styles.separator} />;
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const {width} = Dimensions.get('window');

// const ver1 = async() =>{

//   const Usuarios = await getDocs(collection(db,'Prueba'));
//   console.log(Usuarios.docs[1].data().Nombre)
// };

// const ver = async () =>{
//   const querySnapshot = await getDocs(collection(db, "Prueba"));
//   querySnapshot.forEach((doc) => {
//   //console.log(`${doc.id} => ${doc.data().Apellido}`); //Forma de mostrar la coleccion
//   //console.log(doc.data("Usuario").Nombre); //Data de los campos
//   //console.log(`${doc.id} => ${doc.data()}`)

// });
// };


const lista = () => {
  console.log(obtener(db))
};

  /** 
     * Funcion para crear la interfaz de registro , donde se guardaran los distintos datos del usuario talez como
     * Nombre, Apellido,Apodo, Peso, Edad, Altura, tipo de cuerpo y tipo de silueta
     *@param {string} input estilo creado para poder los margenes de los recuardos de inseccion de texto
     *@param {string} title Estilo creado para poder insertar los titulos de los parametros al usuario
     *@param {String} placeholder NombreS transparente para guiar al usuario con que datos debe rellanar el formulario
     */
function SignupScreen({ navigation }) {
  // En la primera interfaz de registro se almacen los datos de nombre - apellido y un apodo a eleccion del usuario.
  const [Nombre, setnombre] = useState(null); //Variable creada para que el nombre de lo usuarios
  const [Apellido, setApellido] = useState(null); //Variable creada para que el nombre de lo usuarios
  const [Nickname, setNickname] = useState(null); //Variable creada para que el nombre de lo usuarios
  const [Peso, setPeso] = useState(null); // Variable creada para almacenar el peso del usuario.
  const [Edad,setEdad]=useState(null);
  const [Genero,setGenero] = useState(null);
  const [Altura,setAltura] = useState(null);
  const [Cuerpo,setCuerpo] = useState(null);
  const [Silueta,setSilueta] = useState(null);
  const [Correo, setCorreo] = useState(null);
  const [Password,setPassword] = useState(null);


  // *********************************Listas************************************************************
  const listado = ['Masculino', 'Femenino', 'No binario'];
  const Alturas = ['1.40', '1.41', '1.42', '1.43', '1.44', '1.45', '1.46', '1.47', '1.48', '1.49', '1.50', '1.60', '1.70', '1.80', '1.90', '2.00'];
  const Cuerpos = ['Ectomorfo', 'Mesomorfo', 'Endomorfo'];
  const Siluetas = ['Trapecio', 'Triangulo invertido', 'Triangulo', 'Oval', 'Rectangulo'];
  const IMC = (Peso)/((parseFloat(Altura))*(parseFloat(Altura)));
  const guardar = async () =>{
    createUserWithEmailAndPassword(auth,Correo, Password)
    .then((userCredential)=>{
      console.log("Usuario Creado exitosamente");
      const user= userCredential.user;
      alert("Te has creado existosamente tu cuenta");
      uwu();
    })
    .catch((error) =>{
      alert("Este correo ya ha sido registrado") ;
    })
    }
    const uwu=async() =>{
      await setDoc(doc(db,"Usuarios", Correo),{
        Nombre,
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


        <Text style={styles.title}> Ingrese Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setnombre(text)}
          value={Nombre}
          placeholder=" Ingrese Nombre" />


        <Separator/>


        
        <Text style={styles.title}> Ingrese Apellido</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setApellido(text)}
          value={Apellido}
          placeholder=" Ingrese Apellido" />


          <Separator/>


        <Text style={styles.title}> Ingrese Apodo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setNickname(text)}
          value={Nickname}
          placeholder=" Ingrese Apodo" />

          <Separator/>
          <Text style={styles.title}> Ingrese Correo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setCorreo(text)}
          value={Correo}
          placeholder=" Ingrese Correo" />


          <Separator/>

        <Text style={styles.title}> Ingrese Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setPassword(text)}
          value={Password}
          placeholder=" Ingrese Contraseña" 
          secureTextEntry={true}
        />
          <Separator/>


        <Text style={styles.title}>Genero</Text>
        <SelectDropdown
          renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
        }}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          buttonStyle={styles.dropdown1BtnStyle}
          defaultButtonText={' Seleccionar genero'}
          data={listado}
          onSelect={(selectedItem) => {
            console.log(selectedItem);
            setGenero(selectedItem)
          } }
          rowTextForSelection={(item) => {
            return item;
          } } />


          <Separator/>


        <Text style={styles.title}> Ingrese tu Edad</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setEdad(text)}
          value={Edad}
          keyboardType='numeric'
          placeholder=" 20" />


          <Separator/>



        <Text style={styles.title}> Selecciona Altura</Text>
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
            console.log(selectedItem);
            setAltura(selectedItem)
          } }
          rowTextForSelection={(item) => {
            return item;
          } } />


          <Separator/>

        <Text style={styles.title}> Ingrese Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setPeso(text)}
          value={Peso}
          keyboardType='numeric'
          placeholder=" Ingrese Peso" />


        <Separator/>

        <Text style={styles.title}> Selecciona Tipo de cuerpo</Text>
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
            console.log(selectedItem);
            setCuerpo(selectedItem)
          } } />
          <Separator/>

        <Text style={styles.title}> Selecciona Tipo de Silueta</Text>
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
            console.log(selectedItem);
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
              navigation.navigate('Account')}} />
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
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
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
viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
scrollViewContainer: {
  flexGrow: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '20%',
},
});

export default SignupScreen;