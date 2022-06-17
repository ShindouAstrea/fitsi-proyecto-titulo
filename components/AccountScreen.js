import * as React from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => <View style={styles.separator} />;
function AccountScreen({navigation}) {
    return (
      <View style={styles.container}>

        <Text>En esta pantalla va la data capturada de registro </Text>
        <Separator/>
        <Button 
            style={styles.button}
            title="Modificar datos"
        />
        
        <Separator/>

         <Button
            style={styles.button}
            title=" Empezar a probar mi condicion fisica "
            onPress={() => navigation.navigate('Algorithm')}
        />
      </View>
    );
};
export default AccountScreen;

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