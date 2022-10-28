import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import DataClient from '../Client/DataClient'



export default function InfoWifi({ modalVisible, setModalVisible }) {

    const [strength, setStrength] = useState(null)
    const [frequency, setFrequency] = useState(null)
    const [ipAddress, setIpAddress] = useState(null)
    const [subnet, setSubnet] = useState(null)
    const [rxLinkSpeed, setRxLinkSpeed] = useState(null)
    const [txLinkSpeed, setTxLinkSpeed] = useState(null)
    const [linkSpeed, setLinkSpeed] = useState(null)

    //const [isConnected, setIsConnected] = useState(null)
    const [isInternetReachable, setIsInternetReachable] = useState(null)
    const [isWifiEnabled, setIsWifiEnabled] = useState(null)
    const [type, setType] = useState(null)

    const [updateData, setUpdateData] = useState(modalVisible)
    
    if(updateData){
        console.log('entrei aqui', updateData)

        setInterval(() => {
            NetInfo.refresh().then(state => {
                setStrength(state.details.strength)
                setFrequency(state.details.frequency)
                setIpAddress(state.details.ipAddress)
                setSubnet(state.details.subnet)
                setRxLinkSpeed(state.details.rxLinkSpeed)
                setTxLinkSpeed(state.details.txLinkSpeed)
                setLinkSpeed(state.details.linkSpeed)
                //setIsConnected(state.details.isConnected)
                setIsInternetReachable(state.isInternetReachable)
                setIsWifiEnabled(state.details.setIsWifiEnabled)
                setType(state.type)


            });
        }, 3000)



    }





    const closeModal = () => {

        setUpdateData(false)
        setModalVisible(!modalVisible)

    }

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

                        <View style={styles.containerWifi}>
                            <Text>Tipo Conexão: </Text>
                            <Text>{type ? type : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>Status Navegação: </Text>
                            <Text>{isInternetReachable ? `Com internet` : 'Sem internet'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>Qualidade Wifi: </Text>
                            <Text style={strength && strength > 50 ? (strength && strength >  75 && !strength <75 ? styles.signalWifiGood: styles.signalWifiRegula ) :styles.signalWifiBad}>{ strength? `${strength}%` : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>Velocidade do Enlace: </Text>
                            <Text>{ linkSpeed? `${linkSpeed} Mbps` : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>Download: </Text>
                            <Text>{ rxLinkSpeed? `${rxLinkSpeed} Mbps` : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>Upload: </Text>
                            <Text>{ txLinkSpeed? `${txLinkSpeed} Mbps` : 'N/A'}</Text>
                        </View>


                         <View style={styles.containerWifi}>
                            <Text>Canal: </Text>
                            <Text>{frequency ? frequency : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>Frequencia: </Text>
                            <Text>{frequency ? `${String(frequency).substring(0, 1)}Ghz` : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>IP: </Text>
                            <Text>{ipAddress ? ipAddress : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text>Mascara: </Text>
                            <Text>{subnet ? subnet : 'N/A'}</Text>
                        </View>






                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={closeModal}
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
    },
    containerWifi: {
        flexDirection: "row",
        padding: 5
    },
    signalWifiGood:{
        color: 'green',
    },
    signalWifiRegula:{
        color: 'yellow',
    },
    signalWifiBad:{
        color: 'red',
    }



});
