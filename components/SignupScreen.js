import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SignupScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>En esta pantalla van los forms </Text>
        <Button
            title="Inciar sesión"
            onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
};
export default SignupScreen;