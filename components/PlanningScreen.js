import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => <View style={styles.separator} />;
function PlanningScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>En esta pantalla estara el plan creado </Text>
        <View style={styleScreen.container}>
        <Button
            title="Revisar ejercicio "
            onPress={() => navigation.navigate('Example')}
        />

        </View>
        
        
      </View>
    );
};
export default PlanningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    marginVertical: 0,
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

const styleScreen = StyleSheet.create({
  container: {
    flex: 1,
    
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