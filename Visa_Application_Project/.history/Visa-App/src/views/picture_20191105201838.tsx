import React from 'react';
import { StyleSheet, Platform,Button, Text, SafeAreaView,View,Alert,Image, TouchableOpacity} from 'react-native';
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import { Ionicons } from '@expo/vector-icons';

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
			return <Text>No access to camera</Text>;
		} else {
			
        return (
          <SafeAreaView style={styles.container}>
       					<Camera style={ styles.container} type={this.state.type}>
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
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: ( Platform.OS === 'android' ) ? 20 : 0,
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
										fontSize: 10,
										marginBottom: 100,
										color: "white"
									}}
								>
								   <Ionicons name="ios-reverse-camera" size={50} color="white" />
								</Text>

               
													</TouchableOpacity>
						</View>
					</Camera>

       <View style={styles.submitButton}>
        <View style={styles.fixToText}>
     
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
        	
        </View>
          </View>
          <Separator />
          <View style={styles.submitButton}>
          <Button 
                title="Back"
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

    paddingTop: ( Platform.OS === 'android' ) ? 20 : 0,
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
backButton: {
  width: '100%', 
  height: 80, 
  justifyContent: 'center', 
  alignItems: 'center',
  
  bottom: 0
},
fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
separator: {
  marginVertical: 8,
  borderBottomColor: '#737373',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
});