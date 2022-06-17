import React, {useEffect,useState} from 'react';
import { Text, View ,Button,StyleSheet } from 'react-native';
import  Accelerometer  from '../Sensors/Accelerometer';




 

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
  } ;
  const resetTime=()=> {
    setClock(
      setMins(0),
      setSecs(0),
    )
  };
  const stopClock=() => {
    if(clock){
      clearInterval(clock);
    }

} ;


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',alignContent: 'center'}}>
      <Text style={{ fontSize: 30 ,justifyContent: 'center' , alignItems: 'center',alignContent: 'center'}}> Toca el botón "Iniciar" para empezar el test y "Crear plan" para detener el escaneo"</Text>
      <Text style={{ fontSize: 30 ,justifyContent: 'center' , alignItems: 'center'}}> Minutos : Segundos</Text>
      <Text style={{ fontSize: 40 }}>
        {mins}:{secs}
      </Text>
      <Button
        title= "Inicio"
        onPress={startClock}
      />
      <Separator/>
      <Button
        title= "Reiniciar Tiempo"
        onPress={() => {
          stopClock();
          resetTime();
          
        }}
      />
      <Separator/>
      <Button 
        title = "Crear plan"
        onPress={() => {
           navigation.navigate('Planning',{
          mins:{mins},secs:{secs},
        },
        );
        stopClock();
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