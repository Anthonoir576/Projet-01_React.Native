import * as React                     from 'react';
import { Button, View, Text }         from 'react-native';
import { NavigationContainer, 
         useNavigation }              from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Navigation = () => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('Application météo');
    };

    const goToAbout = () => {
        navigation.navigate('À propos');
    };
    
    return (
      <View style={{marginTop: 10, alignItems: 'center', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
        <View style={{ display: 'flex', width: '48%', backgroundColor:'#a2273C'}}>
          <Button
            title="à propos"
            onPress={goToAbout}
          />
        </View>
        <View style={{ display: 'flex', width: '48%', backgroundColor:'#a2273C'}}>
          <Button
            title="Recherche"
            onPress={goToSearch}
          />
        </View>
      </View>
    );
};

export default Navigation;
