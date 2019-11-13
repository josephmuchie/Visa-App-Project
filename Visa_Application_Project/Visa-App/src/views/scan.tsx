import React, { Component } from 'react';

import { 
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View, 
	StatusBar,
	Text 
} from 'react-native';

export default class view_test extends Component {
	public render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="#264d9b" barStyle="light-content" />
  
  

				
				<Text style={styles.header}>Please Scan Your ID</Text>

				<TextInput style={styles.textinput} placeholder="ID Number" 
				underlineColorAndroid='rgba(0,0,0,0)'
				/>
				<TextInput style={styles.inputBox}underlineColorAndroid='rgba(0,0,0,0)'
				
				 />
				 <Text style={styles.undertext}>Make sure there are no reflection on your ID 
				 									and all text is readable</Text>

					 <TouchableOpacity style={styles.button}>
					<Text style ={styles.buttonText}>Scanning</Text>
					</TouchableOpacity>


			</View>
		);
	}
}


	
 const styles = StyleSheet.create({
	 container: {
		 flex: 1,
		 justifyContent: 'center',
		 backgroundColor:'rgba(51, 161, 255, 1.0)',
		 paddingLeft: 60,
		 paddingRight:60,
		 alignSelf: 'stretch',
	

	 },
	 header: {

		fontSize: 24,
		color: '#fff',
		paddingBottom: 10,
		marginBottom: 40,
		//borderBottomColor: '#199187',
		//borderBottomWidth: 1,

	 },

	 textinput:{
		 fontSize: 24,
		 alignSelf: 'stretch',
		// height: 4,
		 marginBottom: 30,
		 color:'#199187',
		 borderColor:'#f8f8f8',
		 borderBottomWidth: 1,


	 },
	 inputBox:{
		 width: 300,
		 height:200,
		 backgroundColor:'#fff',
		 borderRadius:25,
		 borderRightColor:'#199187',


	 },
	 undertext:{
		fontStyle:'normal',
		 fontSize: 15,
		 justifyContent: 'center',
		 color:'#fff',
		 marginVertical:7



	 },

	 button:{
		 width:250,
		 justifyContent:'center',
		 backgroundColor:'rgba(51, 161, 255, 1.0)',
		 marginVertical:10,
		 borderRadius:25,
		 paddingVertical:12,
		 borderColor:'#fff',
		 borderWidth: 7
	 },

	 buttonText:{
		fontSize: 15,
		color:'#fff',
		textAlign:'center',
		fontWeight:"500",


	}

 });