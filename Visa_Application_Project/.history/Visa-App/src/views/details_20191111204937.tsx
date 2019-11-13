import React, { Component } from 'react';
import Layout from '../components/Layout';

import { ScrollView, Text } from 'react-native';

export default class view_test extends Component {
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
