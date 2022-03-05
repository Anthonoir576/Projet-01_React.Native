import React, { useState }       from 'react';
import { View,
         TextInput }             from 'react-native';
import { Button }                from 'react-native';
import { useNavigation }         from '@react-navigation/native';
import { useContext }            from 'react';
import { CityContext }           from '../AppContext';


const Search = () => {

   const [ville, setVille] = useState('   Ma ville');
   const navigation        = useNavigation();


   const searchName = () => {
    if (ville.length < 2) {
        setVille('   Ma ville');
    };
   };
   searchName();

   const myRecherche = () => {
        navigation.navigate('La météo', {ville: ville});
   };

    return (

        <View style={{marginTop: 0, margin: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
                underlineColorAndroid='transparent' 
                style={{height:40, width: '100%', borderColor: 'transparent', borderWidth: 0, borderBottomWidth: .5, borderBottomColor: 'gray', opacity: .5, borderRadius: 5, backgroundColor: 'white', color: 'black'}}
                value={ville}
                onChangeText={(text) => {setVille(text)}}
            />
            <View style={{marginTop: 10, width: '50%', display: 'flex', justifyContent: 'space-between'}}>
                <Button title='Rechercher' onPress={ () => myRecherche()} /> 
            </View>
        </View>
        
    );
};

export default Search;