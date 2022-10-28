import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
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




    if (updateData) {

        console.log('entrei aqui', updateData)
      


        setInterval(() => {
   


            NetInfo.refresh().then(state => {
                setStrength(state.details.strength)
                setFrequency(state.details.frequency)
                setIpAddress(state.details.ipAddress)
                setSubnet(state.details.subnet)
                //setRxLinkSpeed(state.details.rxLinkSpeed)
                //setTxLinkSpeed(state.details.txLinkSpeed)
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
                <ScrollView >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Informação do Wifi Conectado</Text>

                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle}>Tipo Conexão: </Text>
                            <Text style={styles.WifiData}>{type ? type : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle}>Navegação: </Text>
                            <Text style={styles.WifiData} >{isInternetReachable ? `Com internet` : 'Sem internet'}</Text>

                        </View>


                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle}>Qualidade Wifi: </Text>
                            <Text style={strength && strength > 50 ? (strength && strength > 75 && !strength < 75 ? [styles.signalWifiGood, styles.WifiData] : [styles.signalWifiRegula, styles.WifiData]) : [styles.signalWifiBad, styles.WifiData]}>{strength ? (strength == 99? "100%":`${strength}%`) : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle}>Velocidade do Enlace: </Text>
                            <Text style={styles.WifiData}>{linkSpeed ? `${linkSpeed} Mbps` : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle}>Canal: </Text>
                            <Text style={styles.WifiData}>{frequency ? frequency : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle}>Frequencia: </Text>
                            <Text style={styles.WifiData}>{frequency ? (frequency < 3000 ? '2.4Ghz' : '5Ghz') : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle} >IP: </Text>
                            <Text style={styles.WifiData}>{ipAddress ? ipAddress : 'N/A'}</Text>
                        </View>

                        <View style={styles.containerWifi}>
                            <Text style={styles.WifiTitle} >Mascara: </Text>
                            <Text style={styles.WifiData}>{subnet ? subnet : 'N/A'}</Text>
                        </View>






                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={closeModal}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        justifyContent: 'flex-end',

        borderBottomWidth: 1,

    },

    signalWifiGood: {
        color: 'green',
    },
    signalWifiRegula: {
        color: 'yellow',
    },
    signalWifiBad: {
        color: 'red',
    },
    WifiTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingStart: 5,
        paddingEnd: 5,
        paddingTop: 5

    },
    WifiData: {
        fontSize: 18,
        paddingStart: 10,
        paddingEnd: 5,


    }




});
