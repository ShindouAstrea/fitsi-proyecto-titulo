import * as React from 'react';
import { View, Text, Button, StyleSheet,StatusBar,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plans from '../components/Algorithm/ExercisesPlans';

/** Item es el objeto con el Formato o estilo del objeto que sera listado ,en este caso son los planes.
 * Los valores {title} , {description} son variables son pasadas a este objeto.
 * Las variables que se mandan o que recibe este objeto , son originadas de un arreglo de variables llamado Plans
 * En la linea 31 se instancia el objeto a renderizar(crear item) pasandole las cadenas que estan asignadas a las variables de item (revisar Data para comprobar los nombres)
 * FlatList enlista objetos que son renderizados renderItem y que para renderizarlos debe tener en data , el arreglo de donde extraer la informacion.
 * En el argumento renderItem de FlatList , se especifica donde se instancias los objetos a listar , en este caso en una con el mismo nombre (que esta en la linea 33).
 * keyExtractor es el argumento que sirve para saber como extraer los valores del arreglo , siempre deberia ser un id.
 * */ 
const DetailButton = ({navigation}) =>
<Button
      style={styleScreen.button}
      title = "Detalles del ejercicio "
      onPress = {() => navigation.navigate('Exercise')}
    />
    

const Item = ({ title,description}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    
    <DetailButton/>
    
  </View>
);

 //Separator es una variable o vista personalizada para realizar un espaciado cada vez que se le invoca en las vistas o renderizado de la Screen.
const Separator = () => < View style = { styleScreen.separator }
/>;
function PlanningScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.descripcion}/>
  );
    return (
        <View style ={styles.container}>
          <FlatList
            data={Plans}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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