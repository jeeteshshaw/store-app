import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeSize, SCREEN_WIDTH } from '../../utility'
import { Rtext } from '../Rtext'
import Styles from '../../Styles'
import { useTheme } from '@react-navigation/native'
import GS from '../../Styles/GlobalStyle'

const AuthHeader1 = () => {
    const {colors, custom} = useTheme();
  return (
    <View>
      <View style={[[styles.container, {backgroundColor:custom.authHeader1}]]}>
            <Image source={require('../../assets/images/fako_user_logo_four.png')} style={styles.logo} />
            <Rtext style={[GS.titleText,{color:colors.text, marginTop:0, fontSize:18}]} >Welcome To Fako</Rtext>
            <Rtext style={[GS.titleText,Styles.smallText,{color:colors.text, marginBottom:10}]}>Delivery, Foodie and Shopa</Rtext>
      </View>   
    </View>
  )
}

export default React.memo(AuthHeader1)

const styles = StyleSheet.create({
    container:{
        height:normalizeSize(100),
        width:SCREEN_WIDTH, 
        borderBottomLeftRadius:50, 
        borderBottomRightRadius:50, 
        justifyContent:"center", 
        alignItems:"center", 
        elevation:1,
        
    },
    logo:{
        width:normalizeSize(110), 
        height:normalizeSize(50), 
        resizeMode:"contain", 
        marginTop:8 
    }
})