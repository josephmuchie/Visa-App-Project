import React, { Component } from 'react';

import { View, Text,
	StyleSheet,Alert,TouchableOpacity,
	Image } from 'react-native';
import Camera from 'react-native-camera';


export default class view_test extends Component {
	public render() {
		return (
		<View style={styles.container}>
		<Camera
		style={styles.preview}
		torchMode={this.state.torchOn ? Camera.constants.TorchMode.on : Camera.constants.TorchMode.off}
		onBarCodeRead={this.onBarCodeRead}
		ref={cam => this.camera = cam}
		aspect={Camera.constants.Aspect.fill}
		>
		<Text style={{
		backgroundColor: 'white'
		}}>BARCODE SCANNER</Text>
		</Camera>
		<View style={styles.bottomOverlay}>
		<TouchableOpacity onPress={() => this.handleTourch(this.state.torchOn)}>
		<Image style={styles.cameraIcon}
		source={this.state.torchOn === true ? require('../../images/flasher_on.png') : require('../../images/flasher_off.png')} />
		</TouchableOpacity>
		</View>
		</View>
		)
		}
		handleTourch(value) {
			if (value === true) {
			this.setState({ torchOn: false });
			} else {
			this.setState({ torchOn: true });
			}
			}
			}
			const styles = StyleSheet.create({
			container: {
			flex: 1,
			flexDirection: 'row',
			},
			preview: {
			flex: 1,
			justifyContent: 'flex-end',
			alignItems: 'center'
			},
			cameraIcon: {
			margin: 5,
			height: 40,
			width: 40
			},
			bottomOverlay: {
			position: "absolute",
			width: "100%",
			flex: 20,
			flexDirection: "row",
			justifyContent: "space-between"
			},
			});
}
