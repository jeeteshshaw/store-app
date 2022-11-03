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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Auth/Login';
import OTP from './Screens/Auth/OTP';
import Signup from './Screens/Auth/Signup';
import RPassword from './Screens/Auth/RPassword';
import Enter_Email from './Screens/Auth/Email'
import Home from './Screens/Auth/Home';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerShown:false,
      }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name='Reset' component={RPassword}/>
        <Stack.Screen name='Enter_Email' component={Enter_Email}/>
        <Stack.Screen name='Skip' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
