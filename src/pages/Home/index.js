import React, { useState } from "react";
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




export default props => {

    return (
        <SafeAreaView style={Styles.container}>
            <Header name="André Nogueira" />
            <Search />
            <Actions />
            <ScrollView style={Styles.containerForm} >
                <View style={Styles.containerData}>
                    <DataClient title='Login' data='andrepn' />
                    <DataClient title='Senha' data='123456' />
                    <DataClient title='Endereço IP4' data='177.177.177.177' />
                    <DataClient title='Endereço IP6' data='177.177.177.177' />
                    <DataClient title='MAC Address' data='68-58-11-0F-BE-4B' />
                    <DataClient title='Plano' data='PLANO_FIBRA_ULTRA_340M' />
                    <DataClient title='Inicio Conexão' data='2022-10-13 14:55:35' />
                    <DataClient title='Status Conexão' data='Conectado' />
                    <DataClient title='Tempo Conexão' data='13d 1h34m59s' />
                    <DataClient title='Consumo Download' data='144.57GB' />
                    <DataClient title='Consumo Upload' data='5.57GB' />

                    <DataClient title='Concentador' data='177.38.178.78' />
                    <DataClient title='Area' data='AREA 4 G21' />
                    <DataClient title='ONU Sinal' data='-25.54' />
                    <DataClient title='ONU Temperatura' data='Cº 56.35' />
                    <DataClient title='ONU Voltagem' data='3,36V' />
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
    containerData:{
        marginBottom:30,
        marginTop:20
        

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