import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from '../../Screens/mainScreens/Welcome';
import Home from '../../Screens/mainScreens/Home';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { normalizeSize } from '../../utility';
import { Colors } from '../../config/Colors';
import { BottomNavOptions } from '../../store/static';
import LocationHeader from '../../Components/LocationHeader';
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarLabelStyle:{fontSize:normalizeSize(14), color:"#747474"},
        tabBarActiveTintColor:Colors().colorPrimary,
        
    }} >{
        BottomNavOptions.map((item, index)=>(
            <Tab.Screen key={"bottom-nav-"+index} name={item.path} component={item.component}  options={{
                tabBarIcon:({color})=>(
                    
                    <item.Icon color={color} />
                ),
                tabBarLabel:({color})=> (
                    <item.Text color={color} />
                ),
                header:()=>(
                    <item.Header />
                )
                
            }}/>

        ))
    }
     
    </Tab.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})