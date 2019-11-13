import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
 
import ActionBarImage from './ActionBarImage'
 
export default class HomeActivity extends Component {
  static navigationOptions = {
    //To set the header image and title for the current Screen
    title: 'Home Activity',
    //Title
    headerLeft: <ActionBarImage />,
    //Image in Navigation Bar
 
    headerStyle: {
      backgroundColor: '#e3e3e3',
      //Background Color of Navigation Bar
    },
 
    headerTintColor: '#606070',
    //Text Color of Navigation Bar
  };
 
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20 }}>Image Icon Inside Header Title Bar</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
});