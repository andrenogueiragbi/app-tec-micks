import React, { useState, Permissions, Platform } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, TextInput, TouchableOpacity, Button } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import WifiManager from "react-native-wifi-reborn";


export default props => {






    let n = 0





    return (

        <SafeAreaView style={Styles.container}>


            <Text style={Styles.title}>TESTE</Text>
            <View style={Styles.content} >
                <Text style={Styles.message}>Nome Wifi:</Text>
                <Text style={Styles.messageResult}>{n}</Text>
            </View>

            <View style={Styles.content} >
                <Text style={Styles.message}>Sinal:</Text>
                <Text style={Styles.messageResult}>????</Text>
            </View>


            <Button
                title='START'
                onPress={()=>{
                    console.log('....')

                }}
            />

        </SafeAreaView>
    )


}




const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0791AB'

    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'

    },
    content: {
        flexDirection: 'row'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 10

    },
    messageResult: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'red',
        marginStart: 10,
        paddingTop: 10


    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'


    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 10

    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#000',
        width: '50%',
        borderRadius: 25,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    infoText: {
        color: '#ba5050',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',

    },
    infoContainer: {
        alignItems: 'center',
        paddingTop: 10,
        justifyContent: 'center'
    }

})
