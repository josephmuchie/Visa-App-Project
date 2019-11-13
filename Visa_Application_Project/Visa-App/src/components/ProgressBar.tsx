import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

export default class ProgressBar extends Component {
	render() {
		return <View >
  <Text style={styles.title}>
    Review
  </Text>
  <View style={styles.progressBar}></View>
</View>
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
    color: "#fff",
    textAlign: "center"
    
},
});

