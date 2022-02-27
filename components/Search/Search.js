import React, { useState }       from 'react';
import { Text, 
         View,
         StyleSheet,
         ActivityIndicator,
         TextInput }             from 'react-native';



const Search = () => {

   const [ville, setVille] = useState('   Ma ville');

    return (
        <View style={{marginTop: 0, margin: 1}}>
           <TextInput
            underlineColorAndroid='transparent' 
            style={{height:40, borderColor: 'gray', borderWidth: .5, borderRadius: 5, backgroundColor: 'white', color: 'black'}}
            value={ville}
            onChangeText={(text) => {setVille(text)}}
           /> 
        </View>
    );
};

export default Search;