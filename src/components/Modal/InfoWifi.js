import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';


export default function InfoWifi({ modalVisible, setModalVisible }) {

    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Informação do Wifi Conectado</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        maxHeight: 100,
        marginBottom: 14,
        paddingEnd: 14,
        paddingStart: 14,
        backgroundColor: '#0791AB',
        borderRadius: 5,


    },
    actionButton: {
        alignItems: "center",
        marginRight: 32,
        marginTop: 5,


    },
    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10

    },
    labelButton: {
        marginBottom: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    ////////////////////////////////////

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

    buttonClose: {
        backgroundColor: '#0791AB',
        width: '100%',
        borderRadius: 25,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: "center"
    }

});
