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


    return (

        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        </Stack.Navigator>

    )
}