import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Title from '../Title';
import { AntDesign, MaterialCommunityIcons, Entypo, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'

export default function cliente({ saldo, gastos }) {

    const plan = ['PLANO FIBRA ULTRA 400Mbps PINDAI (P)', 'PLANO FIBRA ULTRA 240Mbps CBA (P)', 'CORPORATIVO ATÉ 300Mbps (BJL)']




    return (
        <View style={styles.container}>
            <View style={styles.contentClient}>
                <Text style={styles.labelClient}>ANDRÉ PEREIRA NOGUEIRA</Text>
            </View>


            <View style={styles.contentPlan} >
                <TouchableOpacity style={styles.actionButton}>
                    <AntDesign name="caretleft" size={27} color="black" />
                </TouchableOpacity>

                <Text style={styles.labelClient}>CORPORATIVO ATÉ 300Mbps (BJL)</Text>

                <TouchableOpacity style={styles.actionButton} >
                    <AntDesign name="caretright" size={27} color="black" />
                </TouchableOpacity>

            </View>

        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingStart: '5%',
        paddingEnd: '5%',
        borderRadius: 25,
        marginTop: '5%',
        paddingBottom: 5,
        alignItems: 'center',
        borderWidth: 2,
    },
    contentPlan: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',


    },
    contentClient: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginTop: 10,
        marginBottom: 10


    },
    actionButton: {
        alignItems: "center",
        padding: 5,
        height: 60,
        width: 60,
        backgroundColor: '##fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 2,






    },

    labelClient: {
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: "#dadada",
        borderWidth: 1.5,
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,

    },


})
