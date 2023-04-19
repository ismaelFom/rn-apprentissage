import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function About(){
    return (
        <View>
            <Text style={styles.name}>MY NAME IS {"\n"} MBOHOU FOM Ismael</Text>
            <Text style={styles.description}>I am a frontEnt web and mobile application developer.{"\n"} I use React js and React Native for my achievements.{"\n"} </Text>
        </View>
            
    )
}

const styles = StyleSheet.create({
       name : {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    couleur : {
        backgroundColor: 'black'
      },
    description : {
        color: '#848484',
        marginTop: 16,
        textAlign: 'center'
    }
  });