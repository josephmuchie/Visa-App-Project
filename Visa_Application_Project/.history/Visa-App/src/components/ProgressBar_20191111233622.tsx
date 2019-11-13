import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

export default class ProgressBar extends Component {
	render() {
		<View >
  <Text>
    Loading.....
  </Text>
  <View style={styles.progressBar}></View>
</View>
}

}

const styles = StyleSheet.create({
  progressBar: {
   height: 20,
   width: '100%',
   backgroundColor: 'white',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5
 },
});

