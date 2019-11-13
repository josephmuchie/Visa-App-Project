import React from 'react';
import { StyleSheet, Platform,Button, Text, SafeAreaView,View,Alert,Image, TouchableOpacity} from 'react-native';
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

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
			return <Text>No access to camera</Text>;
		} else {
			
        return (
          <SafeAreaView style={styles.container}>
       					<Camera style={{ flex: 1 }} type={this.state.type}>
						<View
							style={{
								flex: 0.6,
								backgroundColor: "transparent",
                flexDirection: "row",
								alignItems: "center"
                
							}}
						>
							<TouchableOpacity
								style={{
									flex: 0.1,
									alignSelf: "flex-end",
									alignItems: "center"
								}}
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
								<Text
									style={{
										fontSize: 18,
										marginBottom: 10,
										color: "white"
									}}
								>
									{" "}
									Turn camera{" "}
								</Text>
													</TouchableOpacity>
						</View>
					</Camera>
			
             
          <View style={styles.submitButton}>
          <Button 
                title="Capture"
                onPress={() => Alert.alert('Button pressed')}
               />
          </View>
          </SafeAreaView>
      
        );

				
		
		}
	}

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
  },
    title: {
    textAlign: 'center',
    marginVertical: 100,
  
     alignItems: 'center',
  },
  submitButton: {
      width: '100%', 
      height: 80, 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
},
});