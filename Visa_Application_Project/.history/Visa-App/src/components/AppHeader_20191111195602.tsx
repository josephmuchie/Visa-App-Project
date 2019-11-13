import React, { Component } from 'react';
 
import { StyleSheet, Button, View, Text, Image } from 'react-native';
 
import ActionBarImage from '../components/ActionBarImage';
 
export default class AppHeader extends Component {
    
  static navigationOptions = {
    //To set the header image and title for the current Screen
    title: 'Home Activity',
    //Title
    headerLeft: <ActionBarImage />,
    //Image in Navigation Bar
 
    headerStyle: {
      backgroundColor: '#e3e3e3',
      //Background Color of Navigation Bar
    },
 
    headerTintColor: '#606070',
    //Text Color of Navigation Bar
  };
 
  render():JSX.Element {
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
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
});