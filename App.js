// import React, {useEffect} from 'react';
// // import Meteor from '@meteorrn/core';
// import Login from './Screens/authScreens/Login';
// import {Rtext} from './Components/Rtext';
// // import {useTracker} from '@meteorrn/core';
// import Welcome from './Screens/mainScreens/Welcome';
// import {StatusBar, View} from 'react-native';
// // import {
// //   configureFonts,
// //   DefaultTheme as PaperDefaultTheme,
// //   DarkTheme as PaperDarkTheme,
// //   Provider as PaperProvider,
// //   } from "react-native-paper";
// import {Provider, useSelector} from 'react-redux';

// import SignUp from './Screens/authScreens/SignUp';
// // import FinalSignUp from './Screens/authScreens/signUp/FinalsignUp';
// import AuthScreenNavigation from './navigations/AuthNavigations';
// import StackNavigation from './navigations/MainNavigation/StackNavigation';
// // Meteor.connect('ws://kuzaadv.idiosysdev.com/websocket');

// // In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
