import * as React                     from 'react';
import { StatusBar }                  from 'expo-status-bar';
import { StyleSheet, Text, View }     from 'react-native';
import About                          from './components/About/About';
import Search                         from './components/Search/Search';
import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation                     from './components/Navigation/Navigation';
import Meteo                          from './components/Meteo/Meteo';
import { CityContext }                from './components/AppContext';
import { useState }                   from 'react';


 
export default function App() {

  const Stack           = createNativeStackNavigator();
  const [city, setCity] = useState(null);

  return (
    <CityContext.Provider value={city}>
      <NavigationContainer>
        <Navigation />
        <StatusBar hidden={true} />
        <Stack.Navigator>
          <Stack.Screen name="Application météo" component={Search} />
          <Stack.Screen name="À propos" component={About} />
          <Stack.Screen name="La météo" component={Meteo} />
        </Stack.Navigator>
      </NavigationContainer>
    </CityContext.Provider>
    
  );
}
