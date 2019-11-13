import React, { Component } from 'react';
import { PricingCard } from 'react-native-elements';
import { View, Text } from 'react-native';

export default class view_test extends Component {
	public render() {
		return (
			<PricingCard
  color="#4f9deb"
  title="Free"
  price="$0"
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>
		);
	}
}
