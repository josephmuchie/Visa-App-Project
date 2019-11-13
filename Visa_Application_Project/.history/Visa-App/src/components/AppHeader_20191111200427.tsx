import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
 
import ActionBarImage from '../components/ActionBarImage';
import menu from '../views/menu';
 
export default class AppHeader extends Component {
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
       <menu></menu>
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