
import { View, Text,Button,Image,StyleSheet,StatusBar,FlatList} from 'react-native';
import React,{ useState, useEffect} from 'react';
import FlatButton from '../Buttom';
import Video from '../Video';
import { useNavigation } from '@react-navigation/native';
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore,setDoc, doc } from 'firebase/firestore';

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

const Item = ({Nombre,Repeticiones,Series ,link,Dificultad,Tiempo,id}) =>(
  
  <View style={styles.item}>
    <Video link={link}/>
    <Text style={styles.title}>{Nombre}</Text>
    <Text style={styles.description}>Nivel :  {Dificultad}</Text>
    <Text style={styles.description}>Cantidad de Series: {Series}</Text>
    <Text style={styles.description}>Cantidad de Repeticiones: {Repeticiones}</Text>
    <Text style={styles.description}> Duración: {Tiempo} minutos</Text>
    <ButtonToNavigate id={id}/>
  </View>
);



function ListOfExercisesScreen({navigation,route}) {
const {tipoPl}= route.params;
const tipoPl1 = JSON.stringify(tipoPl);
const final = tipoPl1.length ;
console.log(tipoPl1);
console.log(final);

const tipoPlan = tipoPl1.slice(9,final-2)
console.log(tipoPlan);
const[ListaEjerc,setejercicio] = useState([]);

async function cargardatos () {
  const Ejercicio1 =  await getDocs(collection(db,'Ejercicios'));
  setejercicio(Ejercicio1.docs);
};

useEffect(() => {
  cargardatos();
},[])


 const renderItem = ({ item }) => (
  <Item Nombre={item.data().Nombre} Dificultad ={item.data().Dificultad}  Series={item.data().Series} Repeticiones={item.data().Repeticiones}Tiempo={item.data().Tiempo} link={item.data().Video} id={item.id}/>
);
    return ( 
    <View style={ styles.container}>
      <FlatList
        data={ListaEjerc.filter(ListaEjerc=>{return ListaEjerc.data().Tipo == tipoPlan || ListaEjerc.data().Tipo2==tipoPlan})}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
    );
};
export default ListOfExercisesScreen;

//Estilos de como se compartan los elemetos de esta vista

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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button:{
    marginVertical: 10,
  }
});