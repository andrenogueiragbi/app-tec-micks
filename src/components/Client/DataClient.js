import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons'


export default function search({ title, data }) {


    return (
    
            <View style={style.container}>
                <View>
                    <Text style={style.title}>{title}:</Text>

                    <View  style={style.contentData} >
                        <Text style={style.data} >{data}</Text>
                    </View>

                </View>

            </View>
     



    );
}

const style = StyleSheet.create({


    container: {
        paddingTop: 10,
        paddingStart: 10,
        paddingBottom:10
    },
    content: {
        paddingTop: 5,
        paddingBottom: 10,
        paddingEnd: 5,
        paddingStart: 5,
        flexDirection: 'column',
        borderWidth: 1,
        borderRadius:20





    },
    title: {
        fontSize: 20,
        marginStart: 20,
        fontWeight: 'bold',
        
        



    },
    data: {
        fontSize: 20,
        marginTop: 5,
        color:'black',
        fontWeight: 'bold',
        marginBottom: 5,

    },
    infoCli: {
        paddingRight: 5,

    },
    contentData:{
        backgroundColor: '#ecf0f1',
        borderRadius:10,
        borderColor: '#0791AB',
        borderWidth: 2,
        marginStart:10,
        marginEnd:10,
        justifyContent: 'center',
        alignItems:'center'
        


    }


});