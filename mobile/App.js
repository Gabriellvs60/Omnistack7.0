
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to My app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   //4323 cor nice
   backgroundColor: '#4323',
 },
 welcome : {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
});

