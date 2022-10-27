import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function Title({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0791AB',
        marginTop:10,
        paddingEnd:5,
        paddingStart:5,
        marginBottom:10,
        borderRadius:25,


    },
    title:{
        fontSize:20,
        fontWeight: 'bold',
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        borderRadius:25,
        textAlign: 'center',
        

    }
})