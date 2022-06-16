import * as React from 'react';
import { View, Text,Button,Image,StyleSheet,StatusBar,FlatList } from 'react-native';
import Data from './Algorithm/Data';

const Item = ({Nombre,Repeticiones,Tiempo,Video}) =>(
  <View style={styles.item}>
    <Text style={styles.title}>{Nombre}</Text>
    <Text style={styles.description}>Repeticiones{Repeticiones}</Text>
    <Text style={styles.description}> Duración {Tiempo} minutos</Text>
    <Text style={styles.description}> Video de ejemplo: {Video}</Text>
  </View>
);

function DetailExerciseScreen({navigation}) {
 
 const renderItem = ({ item }) => (
  <Item Nombre={item.Nombre} Repeticiones={item.Repeticiones} Tiempo={item.Tiempo} Video={item.Video}/>
);
    return ( 
    <View style={ styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
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