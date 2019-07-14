import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';



export default function Main(props) {
  const data = props.data;
  return (
    
    <LinearGradient
      colors={['#ff2929', '#ffa72e']}
      style={ styles.container} >
      <View style={styles.top} >
        <View style={styles.title} >
          <Text style={styles.title__text}>WARM</Text>
        </View>
        <View style={styles.temperature} >
          <Text style={styles.temperature__label}>Temperature</Text>
          <Text style={styles.temperature__text}>{ data.main.temp }°</Text>
        </View>
      </View>
      <View style={styles.bottom} >
        <LinearGradient style={styles.bottom__gradient}
          colors={['#fff', '#d9d9d9', '#d9d9d9', '#d9d9d9']}>
          <Text style={ styles.location}>{data.name}</Text>
          <View style={ styles.info}>
            <Text style={ styles.info__label}>Humidity</Text>
            <Text style={ styles.info__text}>{data.main.humidity}%</Text>
          </View>
          <View style={ styles.info}>
            <Text style={ styles.info__label}>Temp. Min - Max</Text>
            <Text style={ styles.info__text}>{data.main.temp_min}° - {data.main.temp_max}°</Text>
          </View>
          <View style={ styles.info}>
            <Text style={ styles.info__label}>Wind speed</Text>
            <Text style={ styles.info__text}>{data.wind.speed} m/s</Text>
          </View>
        </LinearGradient >
      </View>
    </LinearGradient >
  )
  
}

