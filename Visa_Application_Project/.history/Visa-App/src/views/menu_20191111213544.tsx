import React from 'react';
import Layout from '../components/Layout';
import LogoTitle from '../components/LogoTitle';
import Details from '../views/details';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';

interface Props {
	navigation: any
  }
  class Menu extends React.Component<Props> {
	static  defaultNavigationOptions = {
		// headerTitle instead of title
		headerTitle: () => <Layout />,

	  };
	public render() {
		/// @ts-ignore
		return (
			
			<View>
					
				<Text>Pick a Step:</Text>
				<Button
					title="Step 1: Scan"
					onPress={()=> this.props.navigation.navigate('Scan')}
				/>
				<Button
					title="Step 2: Details"
					onPress={() => this.props.navigation.navigate('Details')}
				/>
				<Button
					title="Step 3: Picture"
					onPress={() => this.props.navigation.navigate('Picture')}
				/>
				<Button
					title="Step 4: Download"
					onPress={() => this.props.navigation.navigate('Download')}
				/>
			
			</View>
			
		);
		return <input name={this.props.navigation} />;
	}
	
}

const RootStack = createStackNavigator(
	{
	  Home: Menu,
	  Detail: Details,
	},
	{
	  initialRouteName: 'Home',
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