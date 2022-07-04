import React, {useState,useEffect} from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';

import {getStorage, ref,getDownloadURL} from 'firebase/storage';
import { firebaseConfig } from '../database/firebase';
import { initializeApp } from 'firebase/app';
const app = initializeApp(firebaseConfig);

 export function ImagenFondo(){
    const [url,setURL]=useState();
    useEffect(()=>{
        const getImages=async ()=>{
        const storage=getStorage(app);
          const reference= ref(storage,'/Fotos/ayaka.jpg');
          await getDownloadURL(reference).then((x)=>{
            setURL(x);
          })
        }
        getImages();
      },[])
    return (
        <View style={{flex: 0}}>
            <Image style={{width:'30%', height:'30%'}}
            source={{uri:url}}
            />
     
        </View>
    )
 }