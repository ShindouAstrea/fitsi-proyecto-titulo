  import * as React from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';
import FlatButton from '../Buttom';
const Separator = () => <View style={styles.separator} />;
function AccountScreen({navigation}) {
  return (
      <View style={styles.container}>
        

        <Separator/>
        <FlatButton 
            text="Modificar datos"
            />
        <Separator/>
         <FlatButton
            text="Iniciar test "
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
  title2:{
    fontStyle: 'italic',
    fontSize:30,
    fontWeight: 'bold',

  },
  item: {
    borderColor:'#000000',
    borderWidth:1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});