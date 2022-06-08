import * as React from 'react';
import { View, StyleSheet,Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessagesSreen from '../MessagesScreen';
import FormsScreen from '../FormsScreen';
import SettingsScreen from '../SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
function HomeScreen({navigation}) {
    return (
    <Tab.Navigator>
      
      <Tab.Screen name="Perfil" component={MessagesSreen} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Rutinas" component={SettingsScreen} 
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Formularios" component={FormsScreen}
      options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
    );
  };
  export default HomeScreen;

  const styles =StyleSheet.create({
    containerHome: {
      flex:1,
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