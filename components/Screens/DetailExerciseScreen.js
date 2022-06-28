
import { View, Text,Button,Image,StyleSheet,StatusBar,FlatList} from 'react-native';
import React,{ useState, useEffect} from 'react';
import ListadoEjercicios from '../Algorithm/ListadoEjercicios';

const Item = ({Nombre,Repeticiones,Series ,Dificultad,Tiempo,Video}) =>(
  <View style={styles.item}>
    <Text style={styles.title}>{Nombre}</Text>
    <Text style={styles.description}>Nivel :  {Dificultad}</Text>
    <Text style={styles.description}>Cantidad de Series: {Series}</Text>
    <Text style={styles.description}>Cantidad de Repeticiones: {Repeticiones}</Text>
    <Text style={styles.description}> Duración {Tiempo} minuto0s</Text>
    <Text style={styles.description}> Video de ejemplo: {Video}</Text>
  </View>
);

function DetailExerciseScreen({ route,navigation}) {
  
 
 const renderItem = ({ item }) => (
  <Item Nombre={item.Nombre} Dificultad ={item.Dificultad}  Series={item.Series} Repeticiones={item.Repeticiones}Tiempo={item.Tiempo} Video={item.Video}/>
);
  const {mins,secs} = route.params;
  let setNivel = 0;
  
  const minutos = JSON.stringify(mins);
  const segundos = JSON.stringify(secs);
 if((minutos*60 + segundos)<=60){
  setNivel=0
 }
 else setNivel=5;
    return ( 
    <View style={ styles.container}>
      <FlatList
        data={ListadoEjercicios}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />
      <Text style={ styles.description}>{minutos} segundos : {segundos} , Nivel {setNivel}</Text>
    </View>
    );
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