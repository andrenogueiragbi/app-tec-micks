import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView

} from "react-native"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'



export default props => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={Styles.container}>



            <View style={Styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/logoMicks.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <View>
                <Animatable.View animation='fadeInUp' delay={400} style={Styles.containerHeader}>
                    <Text style={Styles.message}>Login</Text>
                </Animatable.View>

            </View>

            <ScrollView style={Styles.containerForm} >


                <Animatable.View animation='fadeInUp' style={Styles.containerForm}>

                    <Text style={Styles.title}>Email</Text>

                    <TextInput
                        placeholder="Digite um email..."
                        style={Styles.input}
                    />

                    <Text style={Styles.title}>Senha</Text>

                    <TextInput
                        placeholder="Digite um senha..."
                        style={Styles.input}
                        secureTextEntry={true}

                    />

                    <Animatable.View animation='fadeInUp' delay={1000}>
                        <TouchableOpacity style={Styles.button}>
                            <Text style={Styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.View animation='fadeInUp' delay={1000}>
                        <TouchableOpacity
                            style={Styles.buttonRegister}
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text style={Styles.registerText}>Não possui uma conta?</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView >
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0791AB'

    },
    containerLogo: {
        marginTop: '10%',
        paddingStart: '5%'

    },

    containerHeader: {
        marginTop: '5%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'

    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16

    },
    button: {
        backgroundColor: '#0791AB',
        width: '100%',
        borderRadius: 25,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignItems: 'center',

    },
    registerText: {
        color: '#a1a1a1'

    }

})