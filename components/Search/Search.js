import React                     from 'react';
import { Text, 
         View,
         StyleSheet,
         ActivityIndicator,
         TextInput }             from 'react-native';



const Search = () => {

   

    return (
        <View>
           <TextInput 
            style={{height:40, borderColor: 'gray', borderWidth: 1}}
           /> 
        </View>
    );
};

export default Search;