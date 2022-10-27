import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign,MaterialCommunityIcons,Entypo,MaterialIcons } from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >
        
        <TouchableOpacity style={styles.actionButton} >
            <View style={styles.areaButton}>
                <MaterialCommunityIcons name="broom" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Limpar MAC</Text>           
        </TouchableOpacity>


        <TouchableOpacity style={styles.actionButton} >
            <View style={styles.areaButton}>
                <Entypo name="power-plug" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Desconectar</Text>           
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} >
            <View style={styles.areaButton}>
                <Entypo name="lock-open" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Desbloquear</Text>           
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} >
            <View style={styles.areaButton}>
                <MaterialCommunityIcons name="router-wireless-settings" size={26} color="#000"/>
            </View>
            <Text style={styles.labelButton}>Alt. Onu</Text>           
        </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight:100,
        marginBottom:14,
        paddingEnd:14,
        paddingStart:14,
        backgroundColor: '#0791AB',
        borderRadius:5,

        
    },
    actionButton:{
        alignItems: "center",
        marginRight:32,
        marginTop:5,
       
    
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height:60,
        width:60,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10

    },
    labelButton:{
        marginBottom:4,
        textAlign: 'center',
        fontWeight:'bold',
        


    }

});
