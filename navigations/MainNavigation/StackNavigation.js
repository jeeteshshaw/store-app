import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screen/main/Home';
import { Text, View } from 'react-native';
import { normalizeSize } from '../../utility';
// // import FinalSignUp from '../Screens/authScreens/signUp/FinalsignUp';
// import { NavigationContainer, useTheme } from '@react-navigation/native';
// import Welcome from '../../Screens/mainScreens/Welcome';
// import Home from '../../Screens/mainScreens/Home';
// import BottomNav from './BottomNav';
// import Profile from '../../Screens/mainScreens/Profile';
// import ManageAddresses from '../../Screens/mainScreens/ManageAddresses';
// import { Rtext } from '../../Components/Rtext';
// import { Appearance, Text } from 'react-native';
// import AddAddress from '../../Screens/mainScreens/AddAddress';
// import { CustomDarkTheme, CustomDefaultTheme } from '../../config/Theme';
// import { useEffect } from 'react';
// import BookingForm from '../../Screens/mainScreens/BookingForm';
// 
const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  // const colorScheme = Appearance.getColorScheme();
  
   
  return (
 
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Home"
          component={Home}
        
          options={{
            header:()=>(
              <View style={{height:normalizeSize(80)}}>
                <Text>Hello</Text>
              </View>
            )
          }}
        />
        {/* <Stack.Screen
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
        
        /> */}
       </Stack.Navigator>

      
  );
};

export default StackNavigation;
