import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class VisaApp extends React.Component {
render(){
	return (
		<ThemeProvider>
		  <Button title="Hey!" />
		</ThemeProvider>
		
	  );
}
 }
