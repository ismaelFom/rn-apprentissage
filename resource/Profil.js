import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


export default function Profil() {
    const [image, setImage] = useState(require('../depo/pp.png'));


console.log(image);
    const imageProfil = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage({uri:image.path});
        })
            .catch(err => console.log(err))
    };

    return (
        <TouchableOpacity style={styles.touchableOpacity} onPress={imageProfil}>

                <Image style={styles.avatar} source={image}  />
        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
        marginTop: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})