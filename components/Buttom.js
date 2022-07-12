import React from'react';
import{StyleSheet,TouchableOpacity,Text,View}from'react-native';

export default function FlatButton({text,onPress}){
    return(
      <TouchableOpacity onPress={onPress}>
       <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>

       </View>
       
      </TouchableOpacity>
    )
}   
const styles=StyleSheet.create({
            button:{
            justifyitem:'center',
            justifyContent:'center',
            marginBottom:2,
            marginLeft:50,
            marginRight:50,
            borderRadius:50,
            paddingVertical:15,
            paddingHorizontal:12,
            backgroundColor:'#44aae3',
        },
        buttonText:{
            color:'white',
            fontWeight:'bold',
            textTransform:'uppercase',
            fontSize:16,
            textAlign:'center'
        }
    });