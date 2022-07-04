  import * as React from 'react';
import { View, Text,Button ,StyleSheet} from 'react-native';
import FlatButton from '../Buttom';
import Userinfo from '../Userinfo';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../database/firebase';
import { getAuth } from 'firebase/auth';
import { getFirestore,collection, getDocs,doc, getDoc, query, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../../App';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore(app);
const Separator = () => <View style={styles.separator} />;

function AccountScreen({navigation}) {
  const{signOut} = React.useContext(AuthContext) ;
  let nombre ;
  let email ;
  const user = auth.currentUser;
  if(user){
    email = user.email;
  }
  const [usuario,setUsers]=React.useState([]);

  async function cargardatos () {
    const a = await getDoc(doc(db,"Usuarios", Correo));
    setUsers(a.data());
    console.log(a);
  }
  React.useEffect(() => {
    cargardatos();
  },[])
  return (

      <View style={styles.container}>
        <Separator/>
      <Text style={styles.title}>Bienvenido: {email}</Text>
      <Separator/>
        <FlatButton 
            text="Modificar datos"
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
      </View>
    );
};
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    justifyItems: 'center',
    alignContent: 'center',
    marginVertical: 0,
  },
  button:{
    borderRadius:10 
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