import { useNavigation } from '@react-navigation/native';
import React, {useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet,StatusBar,FlatList ,TouchableOpacity} from 'react-native';
import FlatButton from '../Buttom';
//Importaciones para utilizar la base datos.
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore,setDoc, doc } from 'firebase/firestore';
//----------------------------------------------------------------

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Separator = () => < View style = { styleScreen.separator } />;
function ButtonToNavigate ({tipo}) {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={{backgroundColor:'black',height:45,borderBottomLeftRadius:15,borderBottomRightRadius:15}}
      onPress={() => {navigation.navigate('ListExercises',{tipoPl:{tipo}})}}>
      <Text style={{color:'white', fontSize:18,marginVertical:10,textAlign:'center',borderTopLeftRadius:15,borderTopRightRadius:15}}>Ver Ejercicios</Text>
    </TouchableOpacity>
  );
}


    /**
     * Funcion para crear un item u objeto para mostrarse en forma de View
     * @param {string} title- Valor del que tiene "title" en el array entregado a FlatList.
     * @param {string} description - Valor que tiene "description" en el array entregado a FlatList.
     * @returns  {View} [Objeto en una vista , similar a un card]
     */

const Item = ({ title,level,description,time,tipo}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={{backgroundColor:'black',borderRadius:15,fontSize:20,color:'white',paddingLeft:20,marginRight:150,marginBottom:10,marginLeft:5}}>Dificultad {level}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style={{flexDirection:'row',justifyContent: 'space-between',marginBottom:20,marginTop:20}}>
      <Text style={{color:'white',fontSize:18 ,marginHorizontal:10,paddingHorizontal:10,borderRadius:15,backgroundColor:'black'}}>Duracion semanal: {time}</Text>
    </View>
    <ButtonToNavigate tipo={tipo}/>
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
  console.log(sentidoDelGiro);
  const minutos = JSON.stringify(mins);
  const segundos = JSON.stringify(secs);
  const final = segundos.length;
  const segundosCont = Number(segundos.slice(8,final-1)) 
  let Nivel = "Alta" ;
  if(segundosCont <5 && segundosCont > 1){
      Nivel = "Baja"
  }
  else if(segundosCont < 10 && segundosCont >5){
      Nivel="Normal"
  }
  const [listaPlanes,setPlanes] = React.useState([]);

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
    
    <Item tipo={item.data().tipo}title={item.data().titulo} level ={item.data().dificultad} time={item.data().tiempo} description={item.data().descripcion} 
    
    />
  )
    return (
        <View style ={styles.container}>
          <FlatList
            //data={Plans.filter(Plans=>{return Plans.dificultad == Nivel ;})}
            data={listaPlanes.filter(listaPlanes=>{return listaPlanes.data().dificultad == Nivel})}
            keyExtractor={item => item.id}
            renderItem={renderItem}
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
      backgroundColor:'#b3b3b3',
    },
    title:{
      fontStyle: 'normal',
      fontSize:30,
      fontWeight: 'bold',
      marginLeft:10
    },
    imagePlan:{
      width: 200,
      height: 300,
    },
    description:{
      marginVertical: 20,
      fontSize:20,
      justifyContent:'center',
      marginLeft:10
    },
    item: {
      borderColor:'#000000',
      borderRadius:15,
      backgroundColor:'white',
      marginVertical: 8,
      marginHorizontal: 16,
    },
    button:{
      marginVertical: 10,
    }
  });