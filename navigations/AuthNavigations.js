import React from 'react';
import { Text } from 'react-native';
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

// const Stack = createStackNavigator()

const AuthScreenNavigation = () => {
  
  // const colorScheme = Appearance.getColorScheme();
  
  return <Text>Auth Stack</Text>
  return (
 
    <NavigationContainer theme={colorScheme==="dark"?CustomDarkTheme:CustomDefaultTheme}>
      {/* <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

         <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{headerShown: false}}
        />
       </Stack.Navigator> */}

      
    </NavigationContainer> 
  );
};

export default AuthScreenNavigation;
