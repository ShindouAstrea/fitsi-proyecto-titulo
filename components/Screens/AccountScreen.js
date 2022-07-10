  import * as React from 'react';
import { View, Text,FlatList ,StyleSheet} from 'react-native';
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

     const Item = ({ correo,nombre,apellido,cuerpo,genero,edad,imc,peso,apodo,silueta,altura}) => (
      <View style={styles.item}>
        <Text style={styles.description}>Correo registrado: {correo}</Text>
        <Text style={styles.description}>Mi nombre: {nombre}</Text>
        <Text style={styles.description}>Mi Apellido: {apellido}</Text>
        <Text style={styles.description}>Mi apodo: {apodo}</Text>
        <Text style={styles.description}>Mi Edad: {edad}</Text>
        <Text style={styles.description}>Mi altura: {altura}</Text>
        <Text style={styles.description}>Mi imc: {imc}</Text>
        <Text style={styles.description}>Mi silueta: {silueta}</Text>
        <Text style={styles.description}>Mi altura: {altura}</Text>
        <Text style={styles.description}>Mi genero: {genero}</Text>
        <Text style={styles.description}>Mi Peso: {peso}</Text>
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
  /**
   * 
   * @param {item} Objeto - Objeto que se desea renderizar muchas veces en una lista 
   * @returns {View} Listado de items
   */
   const renderItem = ({ item }) => (
    
    <Item correo={item.data().Correo} edad={item.data().Edad}nombre ={item.data().Nombre} apellido={item.data().Apellido} cuerpo={item.data().Cuerpo} genero={item.data().Genero} imc={item.data().IMC} peso={item.data().Peso} silueta={item.data().Silueta} apodo={item.data().Nickname} altura={item.data().Altura}
    
    />
  )
  return (

      <View style={styles.centeredView}>
        <Separator/>
      <Text style={styles.title}>Mis datos </Text>
      <FlatList
            //data={Plans.filter(Plans=>{return Plans.dificultad == Nivel ;})}
            data={listaUsuarios.filter(listaUsuarios=>{return listaUsuarios.data().Correo == correoUser})}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            extraData={navigation}
          />
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
    alignItems: "center",
    marginTop: 22
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