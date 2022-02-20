import React                       from 'react';
import { StatusBar }               from 'expo-status-bar';
import { StyleSheet, Text, View }  from 'react-native';
import About                       from './components/About/About';
import Search                      from './components/Search/Search';

export default function App() {
  return (
    <View>
       <Search  />
    </View>
  );
}
