import React                     from 'react';
import { Text, 
         View,
         StyleSheet,
         ActivityIndicator }     from 'react-native';
import { Button }                from 'react-native';



const About = () => {

    
    const stylesAbout = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: 22,
            marginBottom: 20
        },
        content: {
            textAlign: 'justify',
            margin: 10,
        },
    });


    return (
        <View style={stylesAbout.container}>
            <Text style={stylesAbout.title}>
                À propos de moi
            </Text>
            <Text style={stylesAbout.content}>
                Anthony FALVO développeur d'application web et web mobile, ingénieur software, et développeur d'application mobile sous react native. Sous la société FALVO ENTERPRISE. Ici votre problème, deviens notre solution ! Application Test de météo.
            </Text>
            <ActivityIndicator color='#ff0000' 
                               size='large' 
                               animating={true} 
            />
            <View style={{width: '80%', borderRadius: 50, marginTop: 50}}>
                <Button title='En savoir plus ?' />
            </View>
        </View>
    );
};


export default About;