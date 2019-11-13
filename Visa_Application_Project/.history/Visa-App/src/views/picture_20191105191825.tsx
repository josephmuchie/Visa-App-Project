import React from 'react';
import { StyleSheet, Platform,Button, Text, SafeAreaView,View,Alert,Image } from 'react-native';
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

export default function App() {
  state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
     
       
    <View style={styles.submitButton}>
    <Button 
          title="Capture"
          onPress={() => Alert.alert('Button pressed')}
         />
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
  },
    title: {
    textAlign: 'center',
    marginVertical: 100,
  
     alignItems: 'center',
  },
  submitButton: {
      width: '100%', 
      height: 80, 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
},
});