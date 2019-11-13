import React, { Component } from 'react';
import LogoTitle from '../components/LogoTitle';

import { ScrollView, Text } from 'react-native';

export default class Details extends Component {
	static navigationOptions = {
		// headerTitle instead of title
		headerTitle: () => <LogoTitle />,
	  };
	public render() {
		return (
				
<ScrollView></ScrollView>

				);
	}
}
