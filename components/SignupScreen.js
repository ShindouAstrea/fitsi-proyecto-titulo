import React, {useEffect,useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput,View ,Button,Text,ScrollView} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import usuario from './Algorithm/Usuario';
import FlatButton from './Nav/Buttom';

  



  /** 
     * Funcion para crear la interfaz de registro , donde se guardaran los distintos datos del usuario talez como
     * Nombre, Apellido,Apodo, Peso, Edad, Altura, tipo de cuerpo y tipo de silueta
     *@param {string} input estilo creado para poder los margenes de los recuardos de inseccion de texto
     *@param {string} title Estilo creado para poder insertar los titulos de los parametros al usuario
     *@param {String} placeholder NombreS transparente para guiar al usuario con que datos debe rellanar el formulario
     */
function SignupScreen({ navigation }) {
  // En la primera interfaz de registro se almacen los datos de nombre - apellido y un apodo a eleccion del usuario.
  const [Nombre, onChangeText] = useState(null); //Variable creada para que el nombre de lo usuarios
  const [Apellido, onChangeApellido] = useState(null); //Variable creada para que el nombre de lo usuarios
  const [Nickname, onChangeNickname] = useState(null); //Variable creada para que el nombre de lo usuarios
  const [Peso, onChangePeso] = React.useState(null); // Variable creada para almacenar el peso del usuario.

  // *********************************Listas************************************************************
  const listado = ['Masculino', 'Femenino', 'No binario'];
  const Edad = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  const Altura = ['1.40', '1.41', '1.42', '1.43', '1.44', '1.45', '1.46', '1.47', '1.48', '1.49', '1.50', '1.60', '1.70', '1.80', '1.90', '2.00'];
  const Cuerpos = ['Ectomorfo', 'Mesomorfo', 'Endomorfo'];
  const Silueta = ['Trapecio', 'Triangulo invertido', 'Triangulo', 'Oval', 'Rectangulo'];

  useEffect(() => {
    usuario["Nombre"] = Nombre,
      usuario.Apellido = { onChangeApellido },
      usuario.NickName = onChangeNickname;
  }, [Nombre, Apellido, Nickname]);

  return (
    //inserccion de los datos de registro de los usarios , cuando abren por primera vez el programa por primera vez, en el programa.
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}> Ingrese Nombre</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Nombre}
          placeholder="Ingrese Nombre" />
        <Text style={styles.title}> Ingrese Apellido</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeApellido}
          value={Apellido}
          placeholder="Ingrese Apellido" />
        <Text style={styles.title}> Ingrese Apodo</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNickname}
          value={Nickname}
          placeholder="Ingrese Apodo" />

        <Text style={styles.title}> Selecciona Genero</Text>
        <SelectDropdown style={styles.Boton}
          defaultButtonText={'seleccionar sexo'}
          data={listado}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          } }
          rowTextForSelection={(item) => {
            return item;
          } } />

        <Text style={styles.title}> Selecciona Edad</Text>
        <SelectDropdown style={styles.Boton}
          defaultButtonText={'seleccionar Edad'}
          data={Edad}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          } }
          rowTextForSelection={(item, index) => {
            return item;
          } } />
        <Text style={styles.title}> Selecciona Altura</Text>
        <SelectDropdown style={styles.Boton}
          defaultButtonText={'seleccionar Altura'}
          data={Altura}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          } }
          rowTextForSelection={(item, index) => {
            return item;
          } } />

        <Text style={styles.title}> Ingrese Peso</Text>
        <TextInput
          style={styles.input}
          onChangePeso={onChangePeso}
          value={Peso}
          keyboardType='numeric'
          placeholder="Ingrese Peso" />

        <Text style={styles.title}> Selecciona Tipo de cuerpo</Text>
        <SelectDropdown style={styles.Boton}
          defaultButtonText={'seleccionar Cuerpo'}
          data={Cuerpos}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          } }
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          } } />

        <Text style={styles.title}> Selecciona Tipo de Silueta</Text>
        <SelectDropdown style={styles.Boton}
          defaultButtonText={'seleccionar Silueta'}
          data={Silueta}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          } }
          rowTextForSelection={(item, index) => {
            return item;
          } } />

          <FlatButton
          text='siguente'
          onPress={() => {navigation.navigate('Home', { Nombre: { Nombre }, Apellido: { Apellido }, });}} />
      </ScrollView>
      
    </View>
  );
}

function UwU (Nombre,Apellido,Nickname) {
  const datos = JSON.stringify({Nombre,Apellido,Nickname});
  usuario.Nombre = datos["Nombre"];
  usuario.Apellido = datos.Apellido;
  usuario.Nickname = datos.Nickname;
  return;
};

/**
 * Constante creada pra poder proporcionar los estilos de los distintos espacio de la interfaz
 */
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
  Boton: {
    borderWidth: 0,
},
});

export default SignupScreen;