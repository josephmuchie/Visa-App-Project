import React from 'react';
import { StyleSheet, Platform,Button, Text, SafeAreaView,View,Alert,Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Page content</Text>
      <Image
          style={{width: 400, height: 460}}
         // source={require('')}
        />
       
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