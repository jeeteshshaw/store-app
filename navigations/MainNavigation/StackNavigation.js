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
import ProductDetails from '../../Screens/main/ProductDetails';
import Search from '../../Screens/main/Search';
import Profile from '../../Screens/main/Profile';
import ProfileDetails from '../../Screens/main/ProfileDetails';
import ProfileEdit from '../../Screens/main/ProfileEdit';
import ProfileResetPassword from '../../Screens/main/ProfileResetPassword';
import ManageAddress from '../../Screens/main/ManageAddress';
import EditAddress from '../../Screens/main/EditAddress';
import MyOrder from '../../Screens/main/MyOrder';
import OrderTrack from '../../Screens/main/OrderTrack';
import Cart from '../../Screens/main/Cart';
import OrderTrack2 from '../../Screens/main/OrderTrack2';
import Payment from '../../Screens/main/Payment';
import FAQ from '../../Screens/main/FAQ/index';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  // const colorScheme = Appearance.getColorScheme();


  return (

    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen
        name="Home"
        component={Home}

        options={{
          headerShown: false

        }}
      />
      <Stack.Screen
        name="SearchProduct"
        component={Search}

        options={{
          // header: () => <HomeHeader />
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}

        options={{
          // header: () => <HomeHeader />
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}

        options={{
          // header: () => <HomeHeader />
          // headerShown: false
        }}
      />
       <Stack.Screen
        name="EditAddress"
        component={EditAddress}

        options={{
          // header: () => <HomeHeader />
          headerShown: false
        }}
      />
       <Stack.Screen
        name="MyOrder"
        component={MyOrder}

        options={{
          title:"My Orders"
          // header: () => <HomeHeader />
          // headerShown: false
        }}
      />
       <Stack.Screen
        name="OrderTrack"
        component={OrderTrack}

        options={{
          title:"Order Track"
          // header: () => <HomeHeader />
          // headerShown: false
        }}
      />
       <Stack.Screen
        name="OrderTrack2"
        component={OrderTrack2}

        options={{
          title:"Order Track"
          // header: () => <HomeHeader />
          // headerShown: false
        }}
      />

      <Stack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        
        options={{
          // header: () => <HomeHeader />
          headerShown: false,
          presentation: "transparentModal",
          transparentCard: true
        }}
      />
       <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        
        options={{
          // header: () => <HomeHeader />
          headerShown: false,
          presentation: "transparentModal",
          transparentCard: true
        }}
      />
       <Stack.Screen
        name="ProfileResetPassword"
        component={ProfileResetPassword}
        
        options={{
          // header: () => <HomeHeader />
          headerShown: false,
          presentation: "transparentModal",
          transparentCard: true
        }}
      />
       <Stack.Screen
        name="ManageAddress"
        component={ManageAddress}
        
        options={{
          // header: () => <HomeHeader />
          headerShown: false,
          presentation: "transparentModal",
          transparentCard: true
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

<Stack.Screen
        name="Payment"
        component={Payment}

        options={{
          // header: () => <HomeHeader />
          // headerShown: false
        }}
      />
<Stack.Screen
        name="Cart"
        component={Cart}

        options={{
          // header: () => <HomeHeader />
          // headerShown: false
        }}
      />
<Stack.Screen
        name="FAQ"
        component={FAQ}

        options={{
          // header: () => <HomeHeader />
          // headerShown: false
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
