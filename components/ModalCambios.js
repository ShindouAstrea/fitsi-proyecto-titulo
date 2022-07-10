import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text,TextInput, Pressable, View } from "react-native";
import FlatButton from "./Buttom";
import {getAuth, sendPasswordResetEmail} from 'firebase/auth';
import { firebaseConfig } from "../database/firebase";
import { initializeApp } from "firebase/app";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;

function ModalCambios({modalVisible,setModalVisible}){
    const[Nombre,setNombre]=useState();
    const recuperarPass=()=>{
        sendPasswordResetEmail(auth, Mail);
      }
    const[Mail, setMail] =useState();
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.title}> Ingrese Nombre</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setNombre(text)}
          value={Nombre}
          placeholder="Ingrese nuevo nombre" />

 
              <FlatButton
                text = "Cancelar"
                onPress={() => setModalVisible(!modalVisible)}
              />
              <FlatButton
                text = "Actualizar Informacion"
                onPress={() => { updatedeinfo();
                    alert("Actualizado con extisto");
                    setModalVisible(!modalVisible)}}
              />
              
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ModalCambios;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontStyle: 'italic',
    fontSize:18,
    fontWeight: 'normal',

  }
});