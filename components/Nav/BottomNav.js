import * as React from 'react';
import { View, StyleSheet,Button,Image } from 'react-native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlanningScreen from '../PlanningScreen';
import AccountScreen from '../AccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
function BottomNav({navigation}) {
    return (
    <Tab.Navigator>
      
      <Tab.Screen name="Account" component={AccountScreen} 
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Planning" component={PlanningScreen} 
      options={{
          tabBarLabel: 'Plan de ejercicio',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
    );
  };
  export default BottomNav;

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