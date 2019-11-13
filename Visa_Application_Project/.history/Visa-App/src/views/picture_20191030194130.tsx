import React, { Component } from 'react';
import BarcodeScanner from 'react-native-barcodescanner';

import { View, Text } from 'react-native';

export default class view_test extends Component {
	public render() {
		return (
			<View>
  <BarcodeScanner
    onBarCodeRead={this._BarCodeRead}
    style={styles.preview}
    torchMode='off'
    cameraType='back'
  />
			</View>
		);
	}
}
