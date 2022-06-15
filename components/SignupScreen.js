import react from "react";
import React from "react";
import { SafeAreaView, StyleSheet, TextInput,View ,Button,Text} from "react-native";


const SignupScreen = ({navigation}) => {
  // En la primera interfaz de registro se almacen los datos de nombre - apellido y un apodo a eleccion del usuario.
  const [Nombre, onChangeText] = React.useState(null);
  const [Apellido, onChangeApellido] = React.useState(null);
  const [Nickname,onChangeNickname] = React.useState(null);

  return (
    //Text Input de los datos de registro de los usarios , cuando inician sesion por primera vez, en el programa.
    <View style={{flex:30,justifyContent:"center"}}>
      
      <Text style={styles.title}> Ingrese Nombre</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Nombre}
        placeholder="Ingrese Nombre"
      />
      <Text style={styles.title}> Ingrese Apellido</Text>
      <TextInput
        style={styles.input}
        onChangeApellido={onChangeApellido}
        value={Apellido}
        placeholder="Ingrese Apellido"
      />
      <Text style={styles.title}> Ingrese Apodo</Text>
      <TextInput
        style ={styles.input}
        onChangeNickname ={onChangeNickname}
        value={Nickname}
        placeholder="Ingrese Apodo"
      /> 

    <Button
            title="siguente"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
};

// Crea el estilo de los textos , y espacio para ingresar datos
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default SignupScreen;