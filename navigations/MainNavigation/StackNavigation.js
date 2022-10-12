import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
// import FinalSignUp from '../Screens/authScreens/signUp/FinalsignUp';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import Welcome from '../../Screens/mainScreens/Welcome';
import Home from '../../Screens/mainScreens/Home';
import BottomNav from './BottomNav';
import Profile from '../../Screens/mainScreens/Profile';
import ManageAddresses from '../../Screens/mainScreens/ManageAddresses';
import { Rtext } from '../../Components/Rtext';
import { Appearance, Text } from 'react-native';
import AddAddress from '../../Screens/mainScreens/AddAddress';
import { CustomDarkTheme, CustomDefaultTheme } from '../../config/Theme';
import { useEffect } from 'react';
import BookingForm from '../../Screens/mainScreens/BookingForm';

const Stack = createStackNavigator()

const StackNavigation = () => {
  const colorScheme = Appearance.getColorScheme();
  
   

  return (
 
    <NavigationContainer theme={colorScheme==="dark"?CustomDarkTheme:CustomDefaultTheme}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
        
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookingForm"
          component={BookingForm}
        
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
        
        />
        <Stack.Screen
          name="ManageAddresses"
          component={ManageAddresses}
          options={{
            title:"Manage Address",
           
          }}
        
        />
         <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{
            title:"Add Address",
           
          }}
        
        />
       </Stack.Navigator>

      
    </NavigationContainer> 
  );
};

export default StackNavigation;
