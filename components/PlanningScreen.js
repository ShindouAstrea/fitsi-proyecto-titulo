import * as React from 'react';
import { View, Text, Button, StyleSheet,StatusBar,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plans from '../components/Algorithm/ExercisesPlans';
import { TouchableOpacity } from 'react-native-web';



    /**
     * Funcion para crear un item u objeto para mostrarse en forma de View
     * @param {string} title- Valor del que tiene "title" en el array entregado a FlatList.
     * @param {string} description - Valor que tiene "description" en el array entregado a FlatList.
     * @returns  {View} [Objeto en una vista , similar a un card]
     */

const Item = ({ title,description,navigation}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <Button 
          style={styleScreen.button}
          title = "Detalles del ejercicio "
          onPress = {() => navigation.push('Details')}
      />
  </View>
);

 //Separator es una variable o vista personalizada para realizar un espaciado cada vez que se le invoca en las vistas o renderizado de la Screen.
const Separator = () => < View style = { styleScreen.separator }
/>;
/**
 * Funcion que renderiza la vista de listado de planes, lo hace gracias a FlatList principalmente , que recibe como
 * parametro en data un array con todos los objetos , en renderItem la funcion que renderiza el listado y en keyExtractor el id de cada objeto del array.
 * @param {navigation} navigation - variable que permite realizar el cambio de vista. 
 * @returns {View} Vista del listado de los planes de ejercicio.
 */
function PlanningScreen({route, navigation }) {
  const {mins,secs}= route.params;
  const minutos = JSON.stringify(mins);
  const segundos = JSON.stringify(secs);
  let setNivel = 0;
  if((minutos*60 + segundos)<=60){
    setNivel=0
   }else setNivel=5;
  /**
   * 
   * @param {item} Objeto - Objeto que se desea renderizar muchas veces en una lista 
   * @returns {View} Listado de items
   */

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.descripcion}/>
  )
    return (
        <View style ={styles.container}>
          <FlatList
            data={Plans}
            
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
          <Text style={ styles.description}>{minutos} segundos : {segundos} , Nivel {setNivel}</Text>
          return()
          <Button 
          style={styleScreen.button}
          title = "Detalles del ejercicio "
          onPress = {() => navigation.navigate('Details')}
      />
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