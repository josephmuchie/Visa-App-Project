import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

export default class VisaApp extends React.Component {
render(){
	return (
<Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
	  );

}
 }
