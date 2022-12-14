import React from 'react';
import Login from '../Screens/Auth/Login';
import OTP from '../Screens/Auth/OTP';
import Signup from '../Screens/Auth/Signup';
import RPassword from '../Screens/Auth/RPassword';
import Enter_Email from '../Screens/Auth/Email';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetLocation from '../Screens/Auth/SetLocation';
import Location from '../Screens/Auth/Location';
import SkipLog from '../Screens/Auth/SkipLog';
import Payment from '../Screens/main/Payment/index';
import Cart from '../Screens/main/Cart';
import FAQ from '../Screens/main/FAQ';
// import Authless_Home from '../Screens/Authless';

// import Login from '../Screens/authScreens/Login';
// import { createStackNavigator } from '@react-navigation/stack'
// import SignUp from '../Screens/authScreens/SignUp';
// // import FinalSignUp from '../Screens/authScreens/signUp/FinalsignUp';
// import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
// import Welcome from '../Screens/authScreens/Welcome';
// import { AppTheme } from '../config/Constants';
// import { White } from '../config/Colors';
// import { CustomDarkTheme, CustomDefaultTheme } from '../config/Theme';
// import { useEffect } from 'react';
// import { Appearance } from 'react-native';
// import { useState } from 'react';

const Stack = createNativeStackNavigator()

const AuthScreenNavigation = () => {
  
  // const colorScheme = Appearance.getColorScheme();
  
  return (
           <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerShown:false,
      }}
      initialRouteName={"Skiplog"}
      >
        <Stack.Screen name="SkipLog" component={SkipLog} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name='Reset' component={RPassword}/>
        <Stack.Screen name='Enter_Email' component={Enter_Email}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='FAQ' component={FAQ}/>
      </Stack.Navigator>     
  );
};

export default AuthScreenNavigation;
