import React,{ useState, useEffect} from 'react';
import { View, Text,Button,Image,StyleSheet,StatusBar,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlatButton from '../Buttom';
//Importaciones para utilizar la base datos.
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore,setDoc, doc } from 'firebase/firestore';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

function ButtonToNavigate({id}){
    const navigation = useNavigation();
    return(
      <FlatButton
      text="Más Información"
      // onPress={() => {navigation.navigate('Details',{id:{id},},);}}
      />
    )
  }

const Item = ({Nickname,Nombre,Apellido,Edad,Peso,Cuerpo,Silueta}) =>(
  
    <View style={styles.item}>
            <Text style={styles.title}>{Nickname}</Text>
            <Text style={styles.description}>Nombre : {Nombre}</Text>
            <Text style={styles.description}>Apellido : {Apellido}</Text>
            <Text style={styles.description}>Edad : {Edad}</Text>
            <Text style={styles.description}>Peso : {Peso}</Text>
            <Text style={styles.description}>Tipo de cuerpo : {Cuerpo}</Text>
            <Text style={styles.description}>Tipo de silueta : {Silueta}</Text> 
    </View>
  );


function UserData(correo){
    const[Listausuario,setUsuario] = useState();

async function cargardatos () {
  const Usuario =  await getDocs(collection(db,'Usuario'));
  setUsuario(Usuario.docs);
};

useEffect(() => {
  cargardatos();
},[])
const renderItem = ({ item }) => (
    <Item Nickname={
        item.data().Nickname} 
        Nombre={ item.data().Nombre} 
        Apellido={item.data().Apellido} 
        Edad={item.data().Edad} 
        Peso={item.data().Peso} 
        Cuerpo={item.data().Cuerpo} 
        Silueta={item.data().Silueta} 
        id={item.id} 
    />
  );
      return ( 
      <View style={ styles.container}>
        <FlatList
          data={Listausuario}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      );
};

export default UserData 

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    title:{
      fontStyle: 'italic',
      fontSize:30,
      fontWeight: 'bold',
  
    },
    imagePlan:{
      width: 200,
      height: 300,
    },
    description:{
      marginVertical: 20,
      fontSize:20
    },
    item: {
      borderColor:'#000000',
      borderWidth:1,
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    button:{
      marginVertical: 10,
    }
  });