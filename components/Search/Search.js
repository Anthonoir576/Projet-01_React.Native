import React, { useState }       from 'react';
import { Text, 
         View,
         StyleSheet,
         ActivityIndicator,
         TextInput }             from 'react-native';



const Search = () => {

   const [ville, setVille] = useState('ma ville');

    return (
        <View style={{marginTop: 40}}>
           <TextInput
            underlineColorAndroid='transparent' 
            style={{height:40, borderColor: 'gray', borderWidth: 1}}
            value={ville}
            onChangeText={(text) => {setVille(text)}}
           /> 
        </View>
    );
};

export default Search;