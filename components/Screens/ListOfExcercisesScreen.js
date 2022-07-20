
import { View, Text,Button,Image,StyleSheet,StatusBar,FlatList,TouchableOpacity} from 'react-native';
import React,{ useState, useEffect} from 'react';
import FlatButton from '../Buttom';
import Video from '../Video';
import { useNavigation } from '@react-navigation/native';
import {firebaseConfig} from '../../database/firebase';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore,setDoc, doc } from 'firebase/firestore';
import { TextInput } from 'react-native-web';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


function ButtonToNavigate({id}){
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={{backgroundColor:'black',height:45,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
      <Text style={{color:'white', fontSize:18,marginVertical:10,textAlign:'center',borderTopLeftRadius:15,borderTopRightRadius:15}}>Comenzar</Text>
    </TouchableOpacity>
  )
}

const Item = ({Nombre,Repeticiones,Series ,link,Dificultad,Tiempo,id}) =>(
  
  <View >
    <View style={styles.item}>
    <Video link={link}/>
    <Text style={{backgroundColor:'black',borderRadius:15,fontSize:20,color:'white',paddingLeft:20,marginRight:150,marginBottom:10,marginLeft:5}}>Dificultad {Dificultad}</Text>
    <Text style={styles.title}>{Nombre}</Text>
    <Text style={styles.description}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
    <View style={{flexDirection:'row',justifyContent: 'space-between',marginBottom:20,marginTop:20}}>
      <Text style={{color:'white',fontSize:16 ,marginHorizontal:10,paddingHorizontal:5,borderRadius:15,backgroundColor:'black'}}>{Series} Series</Text>
      <Text style={{color:'white',fontSize:16,borderRadius:15,backgroundColor:'black',paddingHorizontal:5}}>{Repeticiones} Repeticiones</Text>
      <Text style={{color:'white',fontSize:16 ,marginRight:10,borderRadius:15,backgroundColor:'black',paddingHorizontal:5}}>{Tiempo} minutos </Text>
    </View>
    <ButtonToNavigate id={id}/>
    </View>
    
  </View>
);



function ListOfExercisesScreen({navigation,route}) {
const {tipoPl}= route.params;
const tipoPl1 = JSON.stringify(tipoPl);
const final = tipoPl1.length ;
const tipoPlan = tipoPl1.slice(9,final-2)
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
      <FlatList style={{}}
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
});