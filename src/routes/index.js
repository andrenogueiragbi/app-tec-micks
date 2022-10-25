import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../pages/Login"
import Welcome from "../pages/Welcome"
import Client from "../pages/Client"
import Register from "../pages/Register"
import Test from "../pages/Test"
import Home from "../pages/home";
import StorePersistent from "../api/StorePersistent";

const Stack = createNativeStackNavigator()


export default props => {
    var PageStart = ''
    let makeWelcome = false;



    return (
        <Stack.Navigator initialRouteName={async () => {
            let toMakeWelcome = await StorePersistent.getData("@toMakeWelcome")
            return 'Welcome'


        }}>
            <Stack.Screen
                name="Login" //nome da rota
                component={Login} //passando component
                options={{ headerShown: false }} //tira divisão no topo
            />

            <Stack.Screen
                initialParams={Welcome}
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }} //tira divisão no topo
            />

            <Stack.Screen
                name="Client"
                component={Client}
                options={{ headerShown: false }} //tira divisão no topo
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }} //tira divisão no topo
            />

            <Stack.Screen
                name="Test"
                component={Test}
                options={{ headerShown: false }} //tira divisão no topo
            />

            <Stack.Screen
                name="Home"
                component={Home}

            />




        </Stack.Navigator>

    )
}
