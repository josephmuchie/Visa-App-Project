import React from 'react';
import Layout from '../components/Layout';
import LogoTitle from '../components/LogoTitle';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text, Button } from 'react-native';


interface Props {
	navigation: any
  }
 class Menu extends React.Component<{Props}> {

	public render() {
		/// @ts-ignore
		return (
			
			<View>
					
				<Text>Pick a Step:</Text>
				<Button
					title="Step 1: Scan"
					onPress={()=>{
						this.props.navigation.navigate('Scan',{
						itemId: 86,
						otherParam: 'Navigate here',
					});
				}}
				/>
				<Button
					title="Step 2: Details"
					onPress={() => navigation.navigate('Details')}
				/>
				<Button
					title="Step 3: Picture"
					onPress={() => navigation.navigate('Picture')}
				/>
				<Button
					title="Step 4: Download"
					onPress={() => navigation.navigate('Download')}
				/>
			
			</View>
			
		);
		return <input name={this.props.Props} />;
	}
	
}
