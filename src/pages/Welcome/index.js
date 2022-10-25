import React from "react";
import StorePersistent from "../../api/StorePersistent";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    

} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default props => {

    const navigation = useNavigation();

    const makeWelcome = async() =>{
        StorePersistent.storeData('@toMakeWelcome','true')
        navigation.navigate('Login')

    }


    return (
        <View style={Styles.container}>
            <View style={Styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/logoMicks.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={Styles.containerForm}>

                <View style={Styles.container2}>
                    <Text style={Styles.title}>Agilizando os atendimentos com eficiencia e tecnologia.</Text>
                    <Text style={Styles.text}>Faça login para começar!</Text>
                </View>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={makeWelcome}
                >
                    <Text style={Styles.buttonText} >Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0791AB'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#0791AB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text: {
        color: "#a1a1a1",

    },
    button: {
        position: 'absolute',
        backgroundColor: '#0791AB',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: "center",
        bottom: '15%',
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold',

    },
    container2:{
        alignItems: "center",
        justifyContent: "center",
    }


})