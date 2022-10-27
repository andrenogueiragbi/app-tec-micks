import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity

} from 'react-native';

export default function Moviments({ data }) {

    const [showValue, setshowValue] = useState(false)




    return (
        <TouchableOpacity style={styles.container} onPress={() => setshowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                {showValue ?
                    (<Text
                        style={data.type === 1 ? styles.value : styles.aspenses}
                    >{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                    ):(
                        <View style={styles.skeleton}>

                        </View>

                    )
                    
                }

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dadada"

    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    value: {
        fontWeight: "bold",
        fontSize: 16,
        color: '#2ecc71'

    },
    aspenses: {
        fontWeight: "bold",
        fontSize: 16,
        color: 'red'

    },
    label: {
        fontSize: 16,
        fontWeight: "bold",



    },
    date: {
        color: '#dadada',
        fontWeight: 'bold',

    },
    skeleton:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:'#dadada',
        borderRadius:8

    }
})