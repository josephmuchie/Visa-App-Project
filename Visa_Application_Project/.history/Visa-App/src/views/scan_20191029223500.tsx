import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, Text } from 'react-native';

export default class view_test extends Component {
	public render() {
		return (
			<View>
				<Text>View: scan.tsx</Text>
			</View>
		);
	}
}

const MyApp = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};

