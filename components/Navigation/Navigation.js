import * as React                     from 'react';
import { Button, View, Text }         from 'react-native';
import { NavigationContainer, 
         useNavigation }              from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Navigation = () => {

    const navigation = useNavigation();

    const goToSearch = () => {
        navigation.navigate('Search');
    };

    const goToAbout = () => {
        navigation.navigate('About');
    };
    
    return (
        <View style={{marginTop: 20, flexDirection: 'column',  justifyContent: 'center' }}>
          <Button
            title="About"
            onPress={goToAbout}
          />
          <Button
            title="Search"
            onPress={goToSearch}
          />
        </View>
      );
};

export default Navigation;
