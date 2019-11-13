import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

export default class LogoTitle extends Component {
	render() {
		return (
			<View style={{ flexDirection: "row" }}>
				<Image
					source={{
						uri:
							"../assets/Edubao_logo.PNG"
					}}
					style={{
						width: 40,
						height: 40,
						borderRadius: 40 / 2,
						marginLeft: 15
					}}
				/>
			</View>
		);
	}
}
