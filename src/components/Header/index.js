import React from "react";

import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64; //tamanho sa statusBar caso for IOS


export default function Header({name}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.username}>Bem vindo(a) {name ? name.split(' ')[0] : false }</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <FontAwesome name="user-circle-o" size={27} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0791AB",
        paddingTop: statusBarHeight,
        flexDirection:'row',
        paddingStart:16,
        paddingEnd:16,

    },
    content:{
        flex:1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',

    },
    buttonUser:{
        width:44,
        height:44,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:44/2


    }

})