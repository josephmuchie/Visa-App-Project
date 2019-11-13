import React from 'react';
import LogoTitle from '../components/LogoTitle';
import { View, Text, Button } from 'react-native';


interface Props {
	navigation: any
  }
  export default class Menu extends React.Component<Props> {
	static  defaultNavigationOptions = {
		// headerTitle instead of title
		headerTitle: () => <LogoTitle />,

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

