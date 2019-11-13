import React from 'react';
import { StyleSheet, Platform,Button, Text, SafeAreaView,View,Alert,Image, TouchableOpacity} from 'react-native';
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

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
       					<Camera style={ styles.roundedEdge} type={this.state.type}>
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
                  justifyContent: 'flex-end',
                  flexDirection: "column",
                  borderRadius: 30,
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
								<Text>
						  <Ionicons name="ios-reverse-camera" size={50} color="white"  bottom="1" />
								</Text>
                
              
													</TouchableOpacity>
						</View>
            <View style={styles.fixToText}>
      
        </View>
					</Camera>
          <Separator />
          <View style={styles.submitButton}>
          <Button
            title="Scanning..."
            onPress={() => Alert.alert('Left button pressed')}
          />
          </View>
          <Separator />
          <View>
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
    backgroundColor: '#fff'
    
  },
    roundedEdge: {
      height: 550,
      width:350,
      borderRadius:70,
       
  },
  submitButton: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
},
backButton: {
  width: '100%', 
  height: 80, 
  justifyContent: 'center', 
  alignItems: 'center',
  position: 'absolute',
  bottom: 0
},
fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},
separator: {
  marginVertical: 8,
  borderBottomColor: '#fafafa',
  borderBottomWidth: StyleSheet.hairlineWidth,
},
});