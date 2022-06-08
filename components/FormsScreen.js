import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FormsScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>En esta pantalla van los forms </Text>
        <Button
            title="Go to Settings"
            onPress={() => navigation.navigate('Settings')}
        />
      </View>
    );
};
export default FormsScreen;