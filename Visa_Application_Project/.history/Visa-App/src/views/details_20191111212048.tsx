import React, { Component } from 'react';
import Layout from '../components/Layout';
import LogoTitle from '../components/LogoTitle';

import { ScrollView, Text } from 'react-native';

 class Details extends Component {
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
