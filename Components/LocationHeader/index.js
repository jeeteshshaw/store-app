import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../../Styles'
import GS from '../../Styles/GlobalStyle'

import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rtext } from '../Rtext';
import { Colors, lightGrey } from '../../config/Colors';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const LocationHeader = () => {
  const {colors} = useTheme();
  const user = useSelector(state=> state.user)
  return (
    <View style={[Styles.globalContainer,styles.container,{backgroundColor:colors.card}]}>
        <View style={[GS.row, {marginTop:8}]}>
            <View style={GS.icon}> 
            <MCI name="map-marker" size={22} color={Colors().colorPrimary} />

            </View>
            <Rtext style={{color:Colors().colorPrimary, fontSize:20}} >&nbsp;Location </Rtext>
            <Rtext style={{color:lightGrey, fontSize:16, width:"100%"}} numberOfLines={1} >{user.loading?"Loading...":user.location.address_components && user.location.address_components[1].short_name+", "+user.location.address_components[2].short_name}</Rtext>
            <MCI name="chevron-down" size={28} color={lightGrey} />
        </View>
        
    </View>
  )
}

export default LocationHeader

const styles = StyleSheet.create({
  container:{
    // height:70, 
    paddingHorizontal:10, 

    paddingVertical:10, 
    elevation:4,
    backgroundColor:"#fff", 
    justifyContent:"center"
  }
})