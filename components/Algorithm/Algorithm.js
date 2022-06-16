import * as React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Accelerometer from '../Sensors/Accelerometer'


function Algorithm(aceX,aceY,acZ){
  const resultado =aceX * aceY * acZ
  return resultado;
  //Recibir controles del sensor
  //Suscribe al sensor
  //Definir tiempo de Update de suscription
  //Correr reloj o tiempo de conteo de toma de datos
  //detener por un tiempo especifico la toma de examen.
  //Manjear un vector con datos de los ejes de un sensor
  //Realizar algun calculo con la magnitud del vector y el tiempo fina de la captura de datos.


};
export default Algorithm ;