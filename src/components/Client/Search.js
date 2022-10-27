import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons'


export default function search({ }) {


    return (
        <View style={style.container}>
            <View style={style.searchBox}>
                <TextInput style={style.searchInput} placeholder="Pesquisar cliente..." />
                <Ionicons size={30} style={style.searchImg} name="search-circle" />
            </View>
        </View>



    );
}

const style = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingStart: 10,
        paddingEnd: 10,


    },
    searchImg: {
        marginTop: 10,
        position: 'absolute',
        right: 16,
        color: '#0791AB',
    },
    searchBox: {
        alignContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        backgroundColor: '#FFF',
        width: '95%',
        borderColor: '#CCC',
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 5,
        padding: 5
    }
});