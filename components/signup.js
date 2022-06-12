import * as React from 'react';
import { View, Text, Button } from 'react-native';

const Singup = () => {

    const [name, setname] = userState("");

}

return (

    <
    View style = {
        { flex: 1, justifyContent: "center" }
    } >
    <
    Text title center > Registro < /Text> 

    <
    Userinput Name = "name"
    value = "Name"
    setvalue = "Name"
    autorcapitalize = "words"
    autocorrect = { false }
    />  < /
    View >
);

export default Singup;