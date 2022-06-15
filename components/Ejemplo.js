import React from "react";
import { SafeAreaView, StyleSheet, TextInput,View , Button} from "react-native";


const Ejemplo = ({navigation}) => {
  const [text, onChangeText] = React.useState("Ingrese Nombre");
  const [Apellido, onChangeApellido] = React.useState("Ingrese Apellido");

  return (
    <View style={{flex:1,justifyContent:"center"}}>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeApellido={onChangeApellido}
        value={Apellido}
      />
    </SafeAreaView>
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
    borderWidth: 1,
    padding: 10,
  },
});

export default Ejemplo;