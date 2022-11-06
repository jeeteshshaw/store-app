import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Image, Text, TextInput, View } from 'react-native';
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
import { useDispatch } from 'react-redux';
import { LogoutSuccessfully } from '../../store/auth';
const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  // const colorScheme = Appearance.getColorScheme();
  const dispatch = useDispatch();
   
  return (
 
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Home"
          component={Home}
        
          options={{
            header:()=>(
              <View style={{height:normalizeSize(75), backgroundColor:"#fff"}}>
                <View style={[GS.row_Between,{padding:10, paddingHorizontal:16}]}>
                  <View style={{width:"50%", flexDirection:"row",alignItems:"flex-start"}}>
                  <Image source={require("../../assets/icons/pin3.png")} style={GS.icon} />
                    
                    <Rtext style={{textAlign:"center", color:ThemeDarkGreen}} fontSize={10}>2/4 Anandabhaban, Kolkata, 700001, West Bengal, India</Rtext>

                  </View>
                  <TouchableRipple style={[{borderColor:ThemeLightGreen, borderWidth:1, borderRadius:20, marginLeft: 16}]}>
                    <View style={[GS.row,{margin:4, marginHorizontal:10}]}>
                    <Rtext style={{color:ThemeLightGreen}} fontSize={10}>Select Vendor </Rtext>
                    {/* <MCI name='menu-down' size={16} color={ThemeLightGreen} /> */}
                    <Image source={require("../../assets/icons/down-filled1.png")} style={{width:6,height:6, resizeMode:"contain"}} />
                      
                    </View>
                  </TouchableRipple>
                  <TouchableRipple onPress={()=>(dispatch(LogoutSuccessfully()))} style={{borderColor:ThemeLightGreen, borderWidth:1, borderRadius:20, marginLeft: 16}}>
                    <Image source={require("../../assets/icons/profile-user1.png")} style={{width:25, height:25, resizeMode:"contain"}} />
                  </TouchableRipple>
                </View>
                <View style={[GS.row_Between,{borderRadius:20, borderWidth:2, borderColor:"#000", backgroundColor:"#fff", height:normalizeSize(30),  marginHorizontal:16}]}>
                  
                <TextInput 
                  style={{fontSize:normalizeSize(12), paddingHorizontal:16, marginVertical:0, paddingVertical:0}}
                  placeholder="Search"
                  selectionColor={"black"}
                  cursorColor="black"
                />
                <View style={{paddingHorizontal:16}}>
                <MCI name="magnify" size={24} />

                </View>
                </View>
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
