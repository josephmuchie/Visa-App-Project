import React, { Component } from "react";
import LogoTitle from "../components/LogoTitle";

import { ScrollView, Text,StyleSheet } from "react-native";

export default class Details extends Component {
	public render() {
		return <ScrollView>
<Text style={styles.title}>
    Review
  </Text>
		</ScrollView>;
	}
}
const styles = StyleSheet.create({
	progressBar: {
	 height: 10,
	 width: '90%',
	 backgroundColor: 'white',
	 borderColor: '#000',
	 borderWidth: 2,
	 alignItems: "center",
	 borderRadius: 15
   },
   title: {
	  color: "#000",
	  textAlign: "center",
	  fontSize: 100
	  
  },
  });
