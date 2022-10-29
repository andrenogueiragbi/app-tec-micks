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
    Alert
} from "react-native"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import API from '../../api'
import apiMck from "../../Services/api";
import StorePersistent from "../../api/StorePersistent";



export default props => {
    const navigation = useNavigation();
    const [user, setUser] = useState('teste@teste')
    const [password, setPassword] = useState('12345678')
    const [erroUser, setErroUser] = useState(null)
    const [erroPassword, setErroPassword] = useState(null)

    const [token, setToken] = useState()
    const [data, setData] = useState()

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          // get the data from the api
          const data = await apiMck.get('localidades/estados/')
          .then(response => setData(response.data));

        }

        fetchData()
      
  
        

      

      }, [])





    const VerifyLogin = async () => {

        await StorePersistent.removeData('@toMakeWelcome')

        if (!user) {
            setErroUser('*Campo requerido*')
            setErroPassword(null)
            Vibration.vibrate()
            return
        } else if (!password) {
            setErroPassword('*Campo requerido*')
            setErroUser(null)
            Vibration.vibrate()
            return
        } else if (!user.includes('@') || !user.split('@')[0] || !user.split('@')[1]) {
            setErroUser('*Email invalido')
            setErroPassword(null)
            Vibration.vibrate()
            return
        } else if (password.length < 8) {
            setErroPassword('*Senha invalida')
            setErroUser(null)
            Vibration.vibrate()
            return
        } else {
            const result = await API.login(user, password)
            setErroPassword(null)
            setErroUser(null)


            if (result.ok) {
                
                await StorePersistent.storeData('@token', result.result.user.token)
                navigation.navigate('Home')

            } else {
                Vibration.vibrate()
                Alert.alert("Falha na autenticação",
                    "Houve um erro no login, verifique seus dados",
                    [
                        {
                            text: "Fechar"
                        },
                    ],

                )
            }
        }

    }

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
                        value={user}
                        onChangeText={setUser}
                    />

                    {erroUser ? <Animatable.Text animation='bounce' style={Styles.erroMessage}>{erroUser}</Animatable.Text> : false}

                    <Text style={Styles.title}>Senha</Text>

                    <TextInput
                        placeholder="Digite um senha..."
                        style={Styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}

                    />
                    {erroPassword ? <Animatable.Text animation='bounce' style={Styles.erroMessage} >{erroPassword}</Animatable.Text> : false}

                    <Animatable.View animation='fadeInUp' delay={1000}>
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={VerifyLogin}
                        >
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

    },
    erroMessage: {
        color: 'tomato',
    }

})