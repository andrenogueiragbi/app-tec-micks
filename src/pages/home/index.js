import React from "react";
import {
    Text,
    BackHandler
} from "react-native";


export default props => {
    BackHandler.addEventListener(BackHandler.exitApp)

    return (
        <Text>Home</Text>

    )

}