import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'

import Main from './views/Main';

export default function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
        'FontAwesome5BandsRegular': require('./assets/fonts/awesome/brands-regular-400.otf'),
        'FontAwesome5FreeRegular': require('./assets/fonts/awesome/free-regular-400.otf'),
        'FontAwesome5FreeSolid': require('./assets/fonts/awesome/free-regular-400.otf')
      }).then(() => {
        setLoad(true);
      });
    }
    loadFont()
  }, []);

  return (
    load ? <Main /> : null
  );
}
