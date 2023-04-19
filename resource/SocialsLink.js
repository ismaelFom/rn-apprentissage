import React from 'react'
import { StyleSheet, View,Image, TouchableOpacity, Linking } from 'react-native'
//import * as WebBrowser from 'expo-web-browser'

export default function CallMe(){
    const openFacebook = () => {
        Linking.openURL('https://www.facebook.com/*****')    }
    const openInstagram = () => {
        Linking.openURL('https://www.instagram.com/*****')    }
    return (
        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialImage} onPress={openFacebook}>
                <Image source={require('../depo/facebook.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialImage} onPress={openInstagram}>
                <Image source={require('../depo/instagram.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
       socialContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 100
        
       },
       socialImage : {
        margin: 10,
        textAlign: 'center'
       }
  });