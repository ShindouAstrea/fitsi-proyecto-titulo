  import * as React from 'react';
import { View, Text,FlatList ,StyleSheet,Dimensions,Image,TouchableHighlight} from 'react-native';
import FlatButton from '../Buttom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../database/firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore,collection, getDocs,doc, getDoc, query, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../../App';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);
import ModalCambios from '../ModalCambios';
const Separator = () => <View style={styles.separator} />;

    /**
     * Funcion para crear un item u objeto para mostrarse en forma de View
     * @param {string} title- Valor del que tiene "title" en el array entregado a FlatList.
     * @param {string} description - Valor que tiene "description" en el array entregado a FlatList.
     * @returns  {View} [Objeto en una vista , similar a un card]
     */
  const Item = ({ edad,altura}) => (
    <View style={{backgroundColor:'black',marginLeft:20}}>
        <Text style={{fontSize:18,color:'white'}}>Edad </Text>
        <Text style={{fontSize:18,color:'white',marginLeft:10,marginTop:5}}>{edad}</Text>
        <Text style={{fontSize:18,color:'white',marginTop:10}}>Altura </Text>
        <Text style={{fontSize:18,color:'white'}}>{altura*100}cms</Text>
  </View>
)
const Item2=({imc,peso})=>(
  <View style={{backgroundColor:'black'}}>
    <Text style={{fontSize:18,color:'white'}}>Imc </Text>
    <Text style={{fontSize:18,color:'white',marginLeft:10}}>{Math.round(imc)}</Text>
    <Text style={{fontSize:18,color:'white',marginTop:10}}>Peso</Text>
    <Text style={{fontSize:18,color:'white',marginLeft:10}}>{peso}Kg</Text>
  </View>
)
const Item3=({apodo})=>(
  <View style={{backgroundColor:'black',justifyContent: 'center',alignItems: 'center',height:100,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
    <Text style={{fontSize:18,color:'white'}}>Bienvenido {apodo}</Text>
  </View>
)
let correoUser ;
function AccountScreen({navigation}) {
  const{signOut} = React.useContext(AuthContext) ;
  const [modalVisible, setModalVisible] = React.useState(false);
  
  const user = auth.currentUser;
  if(user){
    correoUser=user.email;
  }
  const [listaUsuarios,setUsers]=React.useState([]);
  async function cargardatos () {
    const Usuarios =  await getDocs(collection(db,'Usuarios'));
    setUsers(Usuarios.docs);
  };

  React.useEffect(() => {
    cargardatos();

  },[])
   const renderItem = ({ item }) => (
    
    <Item edad={item.data().Edad}nombre ={item.data().Nombre} apellido={item.data().Apellido} cuerpo={item.data().Cuerpo} genero={item.data().Genero} imc={item.data().IMC} peso={item.data().Peso} silueta={item.data().Silueta} apodo={item.data().Nickname} altura={item.data().Altura}
    
    />
  )
  const renderItem2 = ({ item }) => (
    
    <Item2 imc={item.data().IMC} peso={item.data().Peso} />
  )
  const renderItem3 = ({ item }) => (
    
    <Item3 apodo={item.data().Nickname} />
  )

  return (

      <View style={styles.centeredView}>
      <View style={{flexDirection: 'row',alignItems: 'center',backgroundColor: 'black',height:200}}>
      <Image  style = {{
          borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
          width: Dimensions.get('window').width * 0.3,
          height: Dimensions.get('window').width * 0.3,
          backgroundColor:'grey',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={require('../../assets/doggy.jpg')} 
        />
        <FlatList
            data={listaUsuarios.filter(listaUsuarios=>{return listaUsuarios.data().Correo == correoUser})}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            extraData={navigation}
          />
          <FlatList
            data={listaUsuarios.filter(listaUsuarios=>{return listaUsuarios.data().Correo == correoUser})}
            keyExtractor={item => item.id}
            renderItem={renderItem2}
            extraData={navigation}
          />
      </View>
      <View style={{flexDirection:'row',backgroundColor:'black',borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
          <FlatList
            data={listaUsuarios.filter(listaUsuarios=>{return listaUsuarios.data().Correo == correoUser})}
            keyExtractor={item => item.id}
            renderItem={renderItem3}
            extraData={navigation}
          />
         </View>
      
      <Separator/>
        <FlatButton 
            text="Modificar datos"
            onPress={() => setModalVisible(true)}
            />
        <Separator/>
         <FlatButton
            text="Iniciar test "
            onPress={() => navigation.navigate('Algorithm')}
        />
        <Separator/>
         <FlatButton
            text="Cerrar Sesion"
            onPress={signOut}
        />
        <ModalCambios modalVisible={modalVisible} setModalVisible={setModalVisible}/>
      </View>
    );
};
export default AccountScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'white',
  },
  button:{
    borderRadius:10 
  },
  description:{
    fontSize: 18
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize:20
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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});