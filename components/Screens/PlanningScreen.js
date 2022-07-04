import { useNavigation } from '@react-navigation/native';
import React, {useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet,StatusBar,FlatList } from 'react-native';
import FlatButton from '../Buttom';
//Importaciones para utilizar la base datos.
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore,setDoc, doc } from 'firebase/firestore';

import { ImagenFondo } from '../ImagenFondo';
//----------------------------------------------------------------

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Separator = () => < View style = { styleScreen.separator } />;
function ButtonToNavigate () {
  const navigation = useNavigation();
  return(
    <FlatButton
    text= "Ver Ejercicios"
    onPress={() => {navigation.navigate('ListExercises')}}
  />
  );
}


    /**
     * Funcion para crear un item u objeto para mostrarse en forma de View
     * @param {string} title- Valor del que tiene "title" en el array entregado a FlatList.
     * @param {string} description - Valor que tiene "description" en el array entregado a FlatList.
     * @returns  {View} [Objeto en una vista , similar a un card]
     */

const Item = ({ title,level,description,time}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>Duracion semanal del plan: {time}</Text>
    <Text style={styles.description}>Dificultad del plan: {level}</Text>
    <Text style={styles.description}>{description}</Text>
    <ButtonToNavigate/>
  </View>
)

 //Separator es una variable o vista personalizada para realizar un espaciado cada vez que se le invoca en las vistas o renderizado de la Screen.

/**
 * Funcion que renderiza la vista de listado de planes, lo hace gracias a FlatList principalmente , que recibe como
 * parametro en data un array con todos los objetos , en renderItem la funcion que renderiza el listado y en keyExtractor el id de cada objeto del array.
 * @param {navigation} navigation - variable que permite realizar el cambio de vista. 
 * @returns {View} Vista del listado de los planes de ejercicio.
 */
function PlanningScreen({route }) {
  const {mins,secs,sentidoDelGiro}= route.params;
  const minutos = mins;
  const giroIzquierda= JSON.stringify(sentidoDelGiro);
  console.log(giroIzquierda);

  const [listaPlanes,setPlanes] = useState();

  async function cargardatos () {
    const Planes1 =  await getDocs(collection(db,'Planes'));
    setPlanes(Planes1.docs);
  };
  
  useEffect(() => {
    cargardatos();
  },[])
   /**
   * 
   * @param {item} Objeto - Objeto que se desea renderizar muchas veces en una lista 
   * @returns {View} Listado de items
   */
  const renderItem = ({ item }) => (
    
    <Item title={item.data().titulo} level ={item.data().dificultad} time={item.data().tiempo} description={item.data().descripcion} 
    
    />
  )
  const navigation = useNavigation();
    return (
        <View style ={styles.container}>
          <FlatList
            //data={Plans.filter(Plans=>{return Plans.dificultad == Nivel ;})}
            data={listaPlanes}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            extraData={navigation}
          />
          <Separator/>
          
        </View>

    );
};

export default PlanningScreen;

 //Estilos que contienen como se deben mostrar los diferentes objetos de la vista.
const styleScreen = StyleSheet.create({
    container: {
        flex: 1,
        

    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    button:{
     
      borderRadius:10 
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,

    },
});
const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
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
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    button:{
      marginVertical: 10,
    }
  });