import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import LoadingView from './Loading';
import MainView from './Home';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function Main() {
  const apiKey = 'YOUR API KEY';
  const [fetchedUp, setFetchedUp] = useState(false);
  const [data, setData] = useState({});
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMessage('Oops, this will not work on Sketch in an Android emulator. Try it on your device!')
    } else {
      _getLocationAsync();
    }
  },[]);

  useEffect(() => {
    if(location != null) {
      _fetchData(location.coords.latitude, location.coords.longitude);
    }
  },[location]);

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrorMessage('Permission to access location was denied')
    }
    let location = await Location.getCurrentPositionAsync({})
    setLocation(location);
  };

  _fetchData = async (latitude, longitude) => {
    await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid='+apiKey+'&units=metric')
    .then((response) => response.json())
    .then((responseJson) => {
      setData(responseJson);
      setFetchedUp(true);
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  return (
    fetchedUp 
    ? <MainView data={data} /> 
    : <LoadingView />
  )
}
