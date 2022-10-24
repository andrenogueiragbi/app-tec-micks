import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    SafeAreaView

} from "react-native"
import * as Animatable from 'react-native-animatable'



export default props => {
    return (

        <SafeAreaView style={Styles.container}>

            <View>
                <Animatable.View animation='fadeInUp' delay={400} style={Styles.containerHeader}>
                    <Text style={Styles.message}>Cadastro</Text>
                </Animatable.View>
            </View>


            <ScrollView style={Styles.containerForm} >

                <Animatable.View animation='fadeInUp' >




                    <Text style={Styles.title}>Seu Nome</Text>
                    <TextInput
                        placeholder="Digite um nome..."
                        style={Styles.input}
                    />

                    <Text style={Styles.title}>Seu Email</Text>
                    <TextInput
                        placeholder="Digite um email..."
                        style={Styles.input}
                    />

                    <Text style={Styles.title}>Seu Senha</Text>
                    <TextInput
                        placeholder="Digite uma Senha..."
                        style={Styles.input}
                        secureTextEntry={true}
                    />

                    <Text style={Styles.title}>Confirma sua Senha</Text>
                    <TextInput
                        placeholder="Repita a Senha..."
                        style={Styles.input}
                        secureTextEntry={true}
                    />



                    <Animatable.View animation='fadeInUp' delay={1000}>
                        <TouchableOpacity style={Styles.button}>
                            <Text style={Styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </Animatable.View>

                    <Animatable.View style={Styles.infoContainer} animation='fadeInUp' delay={1000}>

                        <Text style={Styles.infoText}>*Solicite seu supervisor a liberação após o cadastro!</Text>

                    </Animatable.View>

                </Animatable.View>

            </ScrollView>




        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0791AB'

    },
    containerHeader: {
        marginTop: '14%',
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
        paddingStart: '8%',
        paddingEnd: '8%'


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

    infoText: {
        color: '#ba5050',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',

    },
    infoContainer: {
        alignItems: 'center',
        paddingTop: 10,
        justifyContent: 'center'
    }

})
