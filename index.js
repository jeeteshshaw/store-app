/**
 * @format
 */
import React from 'react';
import {Appearance, AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import store from './store';
import {
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {enableLatestRenderer} from 'react-native-maps';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';

enableLatestRenderer();

const Main = () => {
  const colorScheme = Appearance.getColorScheme();
 
 
  // const PaperTheme = 
  // const theme = {
  //   ...PaperTheme,
  //   // fonts: configureFonts(fontConfig),
  // };
  return (
    <Provider store={store}>
      <PaperProvider theme={colorScheme==="dark" ? PaperDarkTheme : PaperDefaultTheme}>
        <App />
      </PaperProvider>

    </Provider>
  );
};

export default Main;

AppRegistry.registerComponent(appName, () => Main);
