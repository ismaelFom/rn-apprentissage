import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Button, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Avatar() {

  const [hasGalleryPermission, setHasGalleryPermission] = useState("");
  const [image, setImage] = useState("");
  
  useEffect(() => {
      (async () => {
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGalleryPermission(galleryStatus.status = 'granted');
      })();
  }, []);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);

      if (!result.canceled) {
        setImage(result.uri);
      }
    };

  if (hasGalleryPermission === false) {
    return <Text>No Access Internal Storage</Text>
  }


    return (
      <View style={styles.container} >
        {/* <Image  source={require('../depo/pp.png')} />; */}
        <Button title="pick image" style={styles.btn} onPress={() => pickImage()} />
          {image && <Image source={{ uri: image }} style={{ flex: 1 / 5, marginTop: 100, }} />}
      </View>
    );

}

               const styles = StyleSheet.create({
                  imageStyle: {
                    marginTop: 100,
                    marginBottom: 10,
                    alignSelf: 'center',
                    heigth: 5,
                    weidht: 5
                  },
                  container :{
                    flexDirection: 'row',
                    justifyContent: 'center'
                  },
                  btn: {
                    marginTop: 100,
                    marginBottom: 10,
                    alignSelf: 'center'
                  }
              }); 

