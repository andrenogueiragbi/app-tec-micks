import React, { useEffect, useState } from "react";
import { createNativeStackNavigator, } from '@react-navigation/native-stack'
import Login from "../pages/Login"
import Welcome from "../pages/Welcome"
import Client from "../pages/Client"
import Register from "../pages/Register"
import Test from "../pages/Test"
import Home from "../pages/Home";
import StorePersistent from "../api/StorePersistent";

const Stack = createNativeStackNavigator()


export default props => {

    const [haveWelcome, setWelcome] = useState(null)
    const [haveToken, setToken] = useState(null)



    useEffect(() => {
        const searchData = async () => {
            try {
                setWelcome(await StorePersistent.getData('@welcome'))
                setToken(await StorePersistent.getData('@token'))


            } catch (e) {
                alert(e)

            }


            return

        }

        searchData()

    }, [])





    return (

        <Stack.Navigator>

            {

                haveWelcome && haveToken ?
                    (
                        <>

                            <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{ headerShown: false }} //tira divisão no topo
                            />
                            <Stack.Screen
                                name="Home"
                                animationTypeForReplace='pop'
                                component={Home}
                                options={{ headerShown: false }} //tira divisão no topo
                            />



                        </>

                    )
                    :
                    (
                        <>
                            <Stack.Screen
                                name="Welcome"
                                component={Welcome}
                                options={{ headerShown: false }} //tira divisão no topo
                            />

                            <Stack.Screen
                                name="Login"
                                component={Login}
                                options={{ headerShown: false }} //tira divisão no topo
                            />

                            <Stack.Screen
                                name="Register"
                                component={Register}
                                options={{ headerShown: false }} //tira divisão no topo
                            />

                            <Stack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }} //tira divisão no topo
                            />




                        </>

                    )
            }





        </Stack.Navigator>

    )
}