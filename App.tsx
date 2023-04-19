import React from 'react';
import { StyleSheet, View } from 'react-native';
import About from './resource/About';
import SocialsLink from './resource/SocialsLink';
import CallMe from './resource/CallMe';
import Profil from './resource/Profil';

function App() {
  return (
        <View>
          <Profil />
          <About />
          <SocialsLink />
          <CallMe />
            
        </View>
  );
}

const styles = StyleSheet.create({
    couleur : {
      backgroundColor: 'black'
    },
  
});

export default App;
