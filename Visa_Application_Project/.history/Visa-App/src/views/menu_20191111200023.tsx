import React, { Component } from 'react';
import Layout from '../components/Layout';

import { View, Text, Button } from 'react-native';

export default class view_test extends Component {
	public render():JSX.Element {
		/// @ts-ignore
		const navigation = this.props.navigation;

		return (
			<Layout>
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
				</Layout>
		);
	}
}
