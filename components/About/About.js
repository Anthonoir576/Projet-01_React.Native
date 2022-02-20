import React                     from 'react';
import { Text, 
         View,
         StyleSheet,
         ActivityIndicator }     from 'react-native';



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
                A propos de moi
            </Text>
            <Text style={stylesAbout.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, placeat facere! Iure nisi culpa, consequuntur reiciendis rerum itaque cum praesentium quam perferendis quas. Itaque delectus voluptates modi iste consequatur. Molestiae!
            </Text>
            <ActivityIndicator color='#ff0000' 
                               size='large' 
                               animating={true} 
            />
        </View>
    );
};


export default About;