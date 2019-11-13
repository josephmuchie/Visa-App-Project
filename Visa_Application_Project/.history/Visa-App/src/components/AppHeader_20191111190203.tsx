import React, {Component} from 'react';
import {
    StyleSheet,
    View,
   Header,
    ListView,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native';

class AppHeader extends Component{
    
 public render() {
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
    }
}