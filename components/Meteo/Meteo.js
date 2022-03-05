import { useNavigation}  from '@react-navigation/native';
import React             from 'react';
import { View, 
         Text }          from 'react-native';
import { useState }      from 'react';
import { useContext }    from 'react';
import { CityContext }   from '../AppContext';


const Meteo = () => {

    const villeCity = '';

    return (
        <View>
            <Text>{villeCity}</Text>
        </View>
    );
};


export default Meteo;