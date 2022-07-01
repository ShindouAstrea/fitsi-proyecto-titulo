
import { View, Text,Button,Image,StyleSheet,StatusBar,FlatList} from 'react-native';
import React,{ useState, useEffect} from 'react';
import FlatButton from '../Buttom';
import Video from '../Algorithm/Video';
import ListadoEjercicios from '../Algorithm/ListadoEjercicios';
import { useNavigation } from '@react-navigation/native';

function ButtonToNavigate(){
  const navigation = useNavigation();
  return(
    <FlatButton
    text="Ver Video"
    onPress={() => {navigation.navigate('Video')}}
    />
  )
}
function buscarItem(id){
  return ListadoEjercicios.filter(ListadoEjercicios=>{return ListadoEjercicios.id == id}) ;
  
}
function LoadItem({itemId}){
  const Item = ListadoEjercicios[{itemId}];
  return (
    <View style={styles.container}>
      <Video/>
      <Text style={styles.title}> ID = {itemId}</Text>
      <Text style={styles.title}>{Item.Nombre}</Text>
      <Text style={styles.description}>{Item.Dificultad}</Text>
      <Text style={styles.description}>{Item.Series}</Text>
      <Text style={styles.description}>{Item.Repeticiones}</Text>
      <Text style={styles.description}>{Item.Tiempo}</Text>
    </View>
  )
}
function DetailExerciseScreen({route}) {
  const {id} = route.params.id;
    return ( 
      <LoadItem itemId={id}/>
    )
};
export default DetailExerciseScreen;

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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button:{
    marginVertical: 10,
  }
});