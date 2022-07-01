
import { View, Text,Button,Image,StyleSheet,StatusBar,FlatList} from 'react-native';
import React,{ useState, useEffect} from 'react';
import FlatButton from '../Buttom';
import Video from '../Algorithm/Video';
import ListadoEjercicios from '../Algorithm/ListadoEjercicios';
import { useNavigation } from '@react-navigation/native';

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
    <Text style={styles.description}> Duración {Tiempo} minutos</Text>
    <ButtonToNavigate id={id}/>
  </View>
);

function ListOfExercisesScreen({navigation}) {
  
 
 const renderItem = ({ item }) => (
  <Item Nombre={item.Nombre} Dificultad ={item.Dificultad}  Series={item.Series} Repeticiones={item.Repeticiones}Tiempo={item.Tiempo} link={item.Video} id={item.id}/>
);
    return ( 
    <View style={ styles.container}>
      <FlatList
        data={ListadoEjercicios}
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button:{
    marginVertical: 10,
  }
});