import { StatusBar } from 'expo-status-bar';

import { Text, View, StyleSheet, Image} from 'react-native';

export default function App() {
  return (
    //View : Contenedor .
    <View style={styles.containerHome}>
      <Image
      style={styles.logo}
      source={require('./assets/Logotipo.png')}
      /> 
      <Text style={styles.title}>Hola Mundo !!</Text>
    </View>
  );
};
//Instancia que contiene todos los estilos.
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
