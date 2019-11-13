import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class VisaApp extends React.Component {
render(){
	return (
		<Avatar
		rounded
		icon={{name: 'user', type: 'font-awesome'}}
		onPress={() => console.log("Works!")}
		activeOpacity={0.7}
		containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
	  />
	  );

}
 }
