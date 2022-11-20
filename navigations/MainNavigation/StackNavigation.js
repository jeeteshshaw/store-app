import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { normalizeSize } from '../../utility';
import GS from "../../Styles/GlobalStyle"
import { Rtext } from '../../Components/Rtext';
import { TouchableRipple } from 'react-native-paper';
import { ThemeDarkGreen, ThemeLightGreen } from '../../config/Colors';
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
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../Screens/main/Home';
import HomeHeader from '../../Components/HomeHeader';
import ProductListing from '../../Screens/main/ProductListing';
const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  // const colorScheme = Appearance.getColorScheme();


  return (

    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Home"
        component={Home}

        options={{
          header: () => <HomeHeader />

        }}
      />
      <Stack.Screen
        name="ProductListing"
        component={ProductListing}

        options={{
          title: "Vegetables & Fruits",
          headerLeft: () => <View></View>,
          headerStyle: { backgroundColor: "#dffe9a" },
          headerRight: () => (<TouchableOpacity style={{ paddingHorizontal: 0 }}>
            <MCI name="magnify" size={30} color={"#9DE601"} />

          </TouchableOpacity>)
        }}
      />
      {/* <Stack.Screen
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
