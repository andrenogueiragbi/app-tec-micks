import React, { useState,useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Vibration,
    BackHandler,
    Alert
} from "react-native"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import API from '../../api'
import StorePersistent from "../../api/StorePersistent";
import Header from '../../components/Header';
import Search from '../../components/Client/Search';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';
import Title from '../../components/Title';
import DataClient from '../../components/Client/DataClient';




export default ({navition,route}) => {


    

    return (
        <SafeAreaView style={Styles.container}>
            <Header name='Nome user' />
            <Search />
            <Actions />
            <ScrollView style={Styles.containerForm} >
                <View style={Styles.containerData}>
                    <DataClient icon='login' title='Login' data='andrepn' />
                    <DataClient icon='key' title='Senha' data='123456' />
                    <DataClient icon='enviromento'  title='Endereço IP4' data='177.177.177.177' />
                    <DataClient icon='pushpino'  title='Endereço IP6' data='177.177.177.177' />
                    <DataClient icon='tago' title='MAC Address' data='68-58-11-0F-BE-4B' />
                    <DataClient icon='shoppingcart' title='Plano' data='PLANO_FIBRA_ULTRA_340M' />
                    <DataClient icon='disconnect' title='Inicio Conexão' data='2022-10-13 14:55:35' />
                    <DataClient icon='pausecircleo' title='Status Conexão' data='Conectado' />
                    <DataClient icon='clockcircleo' title='Tempo Conexão' data='13d 1h34m59s' />
                    <DataClient icon='clouddownloado' title='Consumo Download' data='144.57GB' />
                    <DataClient icon='clouduploado' title='Consumo Upload' data='5.57GB' />
                    <DataClient icon='database' title='Concentador' data='177.38.178.78' />
                    <DataClient icon='flag' title='Area' data='AREA 4 G21' />
                    <DataClient icon='dashboard' title='ONU Sinal' data='-25.54' />
                    <DataClient icon='exception1' title='ONU Temperatura' data='Cº 56.35' />
                    <DataClient icon='warning' title='ONU Voltagem' data='3,36V' />
                </View>

            </ScrollView>

        </SafeAreaView >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0791AB',

    },
    containerData: {
        marginBottom: 30,
        marginTop: 20


    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingBottom: '5%',

    },
})