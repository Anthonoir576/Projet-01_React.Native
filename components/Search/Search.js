import React, { useState }       from 'react';
import { View,
         TextInput }             from 'react-native';




const Search = () => {

   const [ville, setVille] = useState('   Ma ville');

   const searchName = () => {
    if (ville.length < 2) {
        setVille('   Ma ville');
    };
   };
   
   searchName();

    return (
        <View style={{marginTop: 0, margin: 1}}>
           <TextInput
            underlineColorAndroid='transparent' 
            style={{height:40, borderColor: 'transparent', borderWidth: 0, borderBottomWidth: .5, borderBottomColor: 'gray', opacity: .5, borderRadius: 5, backgroundColor: 'white', color: 'black'}}
            value={ville}
            onChangeText={(text) => {setVille(text)}}
           /> 
        </View>
    );
};

export default Search;