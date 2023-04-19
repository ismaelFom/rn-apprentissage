import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function CallMe(){
    const call = () => {
        Linking.openURL('tel:694696705')    }
    return (
            <TouchableOpacity style={styles.button} onPress={call}>
                <Text style={styles.buttonText}>CONTACTEZ - MOI</Text>
            </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
       button : {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 100,
        width: 200,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 10
       },
       buttonText : {
        fontSize: 18,
        fontWeight: '600',
        color: 'black'
    },
  });