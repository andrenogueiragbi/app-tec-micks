import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable, Modal, Alert } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons'
import InfoWifi from '../../components/Modal/InfoWifi';
import NetInfo from "@react-native-community/netinfo";

export default function Actions() {
    const [modalVisible, setModalVisible] = useState(false);



    return (


        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >


            <TouchableOpacity style={styles.actionButton}

                onPress={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.areaButton}>
                    <FontAwesome name="wifi" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Info Wifi..</Text>
            </TouchableOpacity>




            <TouchableOpacity style={styles.actionButton}
                onPress={getIpAddress}

            >
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="broom" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Limpar MAC</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton}>
                    <Entypo name="power-plug" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Desconectar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton}>
                    <Entypo name="lock-open" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Desbloquear</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton}>
                    <MaterialCommunityIcons name="router-wireless-settings" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Alt. Onu</Text>
            </TouchableOpacity>

            {
                ///////TESTE///////
            }
            <TouchableOpacity style={styles.actionButton} >
                <View style={styles.areaButton}>
                    <AntDesign name="infocirlceo" size={26} color="#000" />
                </View>
                <Text style={styles.labelButton}>Test</Text>
            </TouchableOpacity>


            {modalVisible && <InfoWifi modalVisible={modalVisible} setModalVisible={setModalVisible} />}
        </ScrollView>
    );
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
