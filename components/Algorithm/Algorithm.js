import React, {useEffect,useState} from 'react';
import { Text, View ,Button,StyleSheet } from 'react-native';
import  {Gyroscope} from 'expo-sensors';
import FlatButton from '../Buttom';




 

/**
 *  Elemento que al invocarlo de la forma <Separator/> realiza un espaciado.
 * @returns Vista para separar elementos
 */
const Separator = () => <View style={styles.separator} />;
/**
 * 
 * @returns un contronometro que utilizar el giroscopio
 */
function AlgorithmIA ({navigation}) {
  
     //--------------------------------------Cronometro-----------------------------------------------------------------------
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
            setSecs(0)
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
//________________________________________________________________________________________________________________________________________
//----------------------------------------------------------------Uso de AccelerometerData------------------------------------------------
/** Special Info
 * X gyro -> Landscape(Horizontal, Vertical)
 * Y gyro -> center (Front and back )
 * z gyro -> Invert phone (giro)
 *  
*/
const [Nivel,setNivel]=useState();
const [isLeft,setPos]= useState(null);
const [data, setData] = useState({
  giroX: 0,
  giroY: 0,
  giroZ: 0,
});
const [subscription, setSubscription] = useState(null);

const _slowUpdate = () => {
  Gyroscope.setUpdateInterval(1000);
};
const _mediumUpdate = () => {
  Gyroscope.setUpdateInterval(500);
};

const _fastUpdate = () => {
  Gyroscope.setUpdateInterval(250);
};

const _subscribe = () => {
  setSubscription(
    Gyroscope.addListener(gyroscopeData => {
      setData(gyroscopeData);
    })
  );
};

const _unsubscribe = () => {
  subscription && subscription.remove();
  setSubscription(null);
};
/** 
 * Funcion que se encarga de detectar el sensor y verificar si el giro que se hace es izquierda o derecha.La toma de datos esta seteada en 500ms
 * @return {boolean} Retorna el valor de isLeft para detectar la posicion del celular 
 * 
*/
const testForPlans  = () => {
  _subscribe();
  _mediumUpdate();
  if(giroZ>0){
    setPos(false);
    return _unsubscribe();
  }
  else if(giroZ<0){setPos(true); return _unsubscribe();}
};
const { giroX, giroY, giroZ } = data;


  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 ,justifyContent: 'center' , alignItems: 'center',alignContent: 'center'}}> Toca el botón "Iniciar" para empezar el test y "Crear plan" para detener el escaneo"</Text>
      <Text style={{ fontSize: 20 ,justifyContent: 'center' , alignItems: 'center'}}> Minutos : Segundos</Text>
      <Text style={styles.time}>
        {mins}:{secs}
      </Text>
      <FlatButton
        text= "Inicio"
        onPress={startClock}
      />
      <Separator/>
      <FlatButton 
        text= "Reiniciar Tiempo"
        onPress={() => {
          stopClock();
          resetTime();
          
        }}
      />
       <Separator/>
      <FlatButton 
        text = "Crear plan"
        onPress={() => {
          testForPlans();
          navigation.navigate('Planning',{
          mins:{mins},secs:{secs},sentidoDelGiro:{isLeft},
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
    
  },
  time:{
    fontSize: 40 ,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
    marginBottom:10,
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