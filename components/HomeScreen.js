import * as React from 'react';
import { View, StyleSheet,Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
    return (
    <View style={styles.containerHome}>
      
      <Button
          title="Ir a  Forms"
          onPress={() => navigation.navigate('Forms')}
      />
      
      {/* Argumento de require es ruta de archivo . Se debe corregir ruta.
       <Image
        style={styles.container}
        source ={require('Logotipo')}
      /> */}
    </View>
    );
  };
  export default HomeScreen;

  const styles =StyleSheet.create({
    containerHome: {
      flex:1,
      backgroundColor:"#073c91",
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center"
    },
    title : {
      fontSize:40
    },
    logo: {
      width: 200,
      height: 70
    },
  })