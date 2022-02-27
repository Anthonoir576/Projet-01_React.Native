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
        navigation.navigate('About');
    };
    
    return (
      <View style={{marginTop: 35, alignItems: 'center', flexDirection: 'row-reverse', justifyContent: 'space-around'}}>
        <View style={{ display: 'flex', width: '45%'}}>
          <Button
            title="About"
            onPress={goToAbout}
          />
        </View>
        <View style={{ display: 'flex', width: '45%' }}>
          <Button
            title="Search"
            onPress={goToSearch}
          />
        </View>
      </View>
    );
};

export default Navigation;
