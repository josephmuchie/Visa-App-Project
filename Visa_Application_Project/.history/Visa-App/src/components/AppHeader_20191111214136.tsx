import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Details from '../views/details';
import Menu from '../views/menu';
import { StyleSheet, View, Text, Image } from 'react-native';
 
import LogoTitle from './LogoTitle';
const RootStack = createStackNavigator(
	{
	  Home: Menu,
	  Detail: Details,
	},
	{
	  initialRouteName: 'Menu',
	  /* The header config from HomeScreen is now here */
	  defaultNavigationOptions: {
		headerStyle: {
		  backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
		  fontWeight: 'bold',
		},
	  },
	}
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class App extends React.Component {
	render() {
	  return <AppContainer />;
	}
  }