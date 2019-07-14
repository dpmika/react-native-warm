import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default function Main() {
  return (
    <LinearGradient
      colors={['#ff2929', '#ffa72e']}
      style={ styles.container} >

      <Text style={styles.appName}>Warm</Text>
      <FontAwesome style={styles.icon}>{Icons.sun}</FontAwesome>
      
      <Text style={styles.text}>Loading...</Text>  
    </LinearGradient >
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  appName: {
    fontFamily: 'roboto-black',
    fontSize:40,
    color:'#fff',
    lineHeight:50,
    margin: 15,
  },
  icon: {
    fontSize:60,
    color:'#fff',
    margin: 15,
  },
  text: {
    fontFamily: 'roboto-regular',
    fontSize:25,
    color:'#fff',
    margin: 15,
  }
});