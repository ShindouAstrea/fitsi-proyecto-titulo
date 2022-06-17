import React, {useEffect,useState} from 'react';
import { Text, View ,Button,StyleSheet } from 'react-native'



 

/**
 *  Elemento que al invocarlo de la forma <Separator/> realiza un espaciado.
 * @returns Vista para separar elementos
 */
const Separator = () => <View style={styles.separator} />;
/**
 * 
 * @returns un contronometro 
 */
function AlgorithmIA ({navigation}) {
     //-------------------------------------------------------------------------------------------------------------
  //Hooks de seteo de variables
  const [mins, setMins] = useState(0) ;
  const [secs, setSecs] = useState(0) ;
  const [clock,setClock] = useState({
    mins,
    secs
  });

  //Hook de animacion del cronometro
  const startClock=()=> {
    setClock(
      setInterval(() => {
        if (secs > 59) {
            setMins(m => m + 1)
            setSecs(s => 0)
          }
          else setSecs(s => s+1)
      }, 1000)
      
    )
    return {clock}
  };[] ;
 
  const stopClock=() => {
    if(clock){
      clearInterval(clock);
    }

} ;


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',alignContent: 'center'}}>
      <Text style={{ fontSize: 30 ,justifyContent: 'center' , alignItems: 'center',alignContent: 'center'}}> Toca el botón "Iniciar" para empezar el test y "Stop para detener el escaneo"</Text>
      <Text style={{ fontSize: 30 ,justifyContent: 'center' , alignItems: 'center'}}> Minutos :</Text>
      <Text style={{ fontSize: 40 }}>
        {mins}:{secs}
      </Text>
      <Button
        title= "Inicio"
        onPress={startClock}
      />
      <Separator/>
      <Button
        title= "Stop"
        onPress={stopClock}
      />
      <Separator/>
      <Button
        title= "Crear plan"
        onPress={() => { navigation.navigate('Details',{
          mins:1,secs:60,
        });
      }}
      />
     
    </View>
  )
};
export default AlgorithmIA;

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
});