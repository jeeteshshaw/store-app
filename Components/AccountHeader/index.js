import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, lightGrey } from '../../config/Colors'
import { Rtext } from '../Rtext'
import Styles from '../../Styles'
import GS from '../../Styles/GlobalStyle'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native'


const AccountHeader = () => {
    const {colors} = useTheme()
  return (
    
     <View style={[Styles.globalContainer,styles.container,{backgroundColor:colors.card}]}>
        <View style={[GS.row_Between, {marginTop:8}]}>
            <Rtext style={[{fontSize:20}]} color={colors.text} fontWeight={"bold"}>My Account</Rtext>
            <MCI name='logout' size={24} color={colors.text} />
        </View>
        
    </View>
  )
}

export default AccountHeader

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