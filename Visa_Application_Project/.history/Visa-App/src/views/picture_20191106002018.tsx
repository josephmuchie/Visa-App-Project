import React from "react";
import {
	StyleSheet,
	Platform,
	Button,
	Text,
	SafeAreaView,
	View,
	Alert,
	Image,
	TouchableOpacity
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";

function Separator() {
	return <View style={styles.separator} />;
}
export default class App extends React.Component {
	state = {
		hasCameraPermission: null,
		type: Camera.Constants.Type.back
	};

	async componentDidMount() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		this.setState({ hasCameraPermission: status === "granted" });
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		} else if (hasCameraPermission === false) {
			return <Text style ={styles.buttonTxt}>No access to camera</Text>;
		} else {
			return (
				<SafeAreaView style={styles.container}>
					<Text style ={styles.buttonTxt}>
						Please take a biometrical picture of your face
					</Text>
					<Camera style={styles.roundedEdge} type={this.state.type}>
						<View
							style={{
								flex: 1,
								backgroundColor: "transparent",
								marginBottom: 0,
								justifyContent: "flex-end"
		
							}}
						>
							<TouchableOpacity
								onPress={() => {
									this.setState({
										type:
											this.state.type ===
											Camera.Constants.Type.back
												? Camera.Constants.Type.front
												: Camera.Constants.Type.back
									});
								}}
							>
								<Text style={styles.instructions}>
									<Ionicons
										name="ios-reverse-camera"
										size={50}
										color="white"
										
									/>
									</Text>
									
								
							</TouchableOpacity>
						</View>
						
					</Camera>
					<Text style ={styles.buttonTxt}>
						Please take a biometrical picture of your face
					</Text>
					<Separator />
					<View style={styles.submitButton}>
						<Text style ={styles.buttonTxt}>Scanning...</Text>
									
					</View>
					<Separator />
					<View style={styles.submitButton}>
					<Text style ={styles.buttonTxt}>Back</Text>
					</View>
				</SafeAreaView>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#34aeeb"
	},
	roundedEdge: {
		height: 500,
		width: 350,
		borderRadius: 70
	},
	title: {
		textAlign: "center",
		marginVertical: 20
	},
	submitButton: {
		width:250,
		justifyContent:'center',
		
		marginVertical:10,
		borderRadius:25,
		paddingVertical:12,
		borderColor:'#fff',
		borderWidth: 7,
	    padding: 15,

    backgroundColor:"#34aeeb"
	},
	backButton: {
		width: "100%",
		height: 80,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 0
	},
	buttonTxt:{
		fontSize: 15,
		color:'#fff',
		textAlign:'center',
		fontWeight:"500",


	},
	fixToText: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: "#fafafa",
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		margin: 30,
	  },
});
