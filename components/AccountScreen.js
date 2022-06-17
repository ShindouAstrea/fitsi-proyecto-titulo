  import * as React from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';
import FlatButton from './Nav/Buttom';
const Separator = () => <View style={styles.separator} />;
function AccountScreen({navigation}) {
/**
  const{Nombre,Apellido}= route.params;
  const NombreU = JSON.stringify(Nombre);
  const ApellidoU = JSON.stringify(Apellido);
 */
  
  
    //<Text>{NombreU},{ApellidoU}</Text> 
  return (
      <View style={styles.container}>
        <FlatButton 
            text="Modificar datos"
            onPress={()=> navigation.navigate('Details')}

        <Text>En esta pantalla va la data capturada de registro </Text>
        <Separator/>
        <Button 
            style={styles.button}
            title="Modificar datos"
        />
        <Separator/>
         <FlatButton
            text="Crear plan "
            onPress={() => navigation.navigate('Planning')}
         <Button
            style={styles.button}
            title=" Empezar a probar mi condicion fisica "
            onPress={() => navigation.navigate('Algorithm')}
        />
      </View>
    );
};
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    marginVertical: 0,
  },
  button:{
    borderRadius:10 
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,

  },
  title2:{
    fontStyle: 'italic',
    fontSize:30,
    fontWeight: 'bold',

  },
  item: {
    borderColor:'#000000',
    borderWidth:1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});