import React, { Component } from 'react';
import Layout from '../components/Layout';

import { View, Text, Button } from 'react-native';

export default class menu extends Component {
	public render() {
		/// @ts-ignore
		const navigation = this.props.navigation;

		return (
			
			<View>
			
		
				<Text>Pick a Step:</Text>
				<Button
					title="Step 1: Scan"
					onPress={()=>{navigation.navigate('Scan')}}
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
	}
}
