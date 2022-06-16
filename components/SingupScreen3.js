import * as React from 'react';
import { View, Text,Button ,StyleSheet,TextInput} from 'react-native';
import SelectDropdown from "react-native-select-dropdown";
import SignupScreen from './SignupScreen';

const Cuerpos = ['Ectomorfo','Mesomorfo','Endomorfo'];
const Silueta = ['Trapecio','Triangulo invertido','Triangulo','Oval','Rectangulo'];

function Ejemplo ({navigation}){
    return(
    <View style={{flex:5, justifyContent:"center"}}>

    <Text style={styles.title}> Selecciona Tipo de cuerpo</Text>   
        <SelectDropdown style={styles.Boton}
                data={Cuerpos}
                buttonTextAfterSelection ={(selectedItem,index)=>{
                    return selectedItem
                }}
                rowTextForSelection={(item,index)=> {
                    return item
                }}
      />

    <Text style={styles.title}> Selecciona Tipo de Silueta</Text>   
        <SelectDropdown style={styles.Boton}
                data={Silueta}
                buttonTextAfterSelection ={(selectedItem,index)=>{
                    return selectedItem
                }}
                rowTextForSelection={(item,index)=> {
                    return item
                }}
      />


        <Button
            title="siguente"
            onPress={() => navigation.navigate('Home')}
        />
    </View>
        
    );
};

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
        borderWidth: 3,
    },
  });

export default Ejemplo ; 
