import React, { useState }       from 'react';
import { Text, 
         View,
         StyleSheet,
         ActivityIndicator,
         TextInput }             from 'react-native';



const Search = () => {

   const [ville, setVille] = useState('   Ma ville');

    return (
        <View style={{marginTop: 10, margin: 1}}>
           <TextInput
            underlineColorAndroid='transparent' 
            style={{height:40, borderColor: 'gray', borderWidth: 1, borderRadius: 5}}
            value={ville}
            onChangeText={(text) => {setVille(text)}}
           /> 
        </View>
    );
};

export default Search;