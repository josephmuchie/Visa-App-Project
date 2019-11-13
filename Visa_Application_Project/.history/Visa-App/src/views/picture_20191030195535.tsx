import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';

import { View, Text } from 'react-native';

export default class view_test extends Component {
  public render() {
    return (
      <View style={styles.container}>
-        <Text style={styles.welcome}>Welcome to React Native!</Text>
-        <Text style={styles.instructions}>To get started, edit App.js</Text>
-        <Text style={styles.instructions}>{instructions}</Text>
+        <RNCamera
+          ref={ref => {
+            this.camera = ref;
+          }}
+          style={{
+            flex: 1,
+            width: '100%',
+          }}
+        >
+        </RNCamera>
      </View>
    );
  }
}
