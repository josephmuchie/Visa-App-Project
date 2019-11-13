import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
 
import ActionBarImage from '../components/ActionBarImage';
import Menu from '../views/menu';
 
export default class AppHeader extends Component {
 
  render():JSX.Element {
    return (
     <Menu></Menu>
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