import React                       from 'react';
import { StatusBar }               from 'expo-status-bar';
import { StyleSheet, Text, View }  from 'react-native';
import About                       from './components/About/About';


export default function App() {
  return (
    <About />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
