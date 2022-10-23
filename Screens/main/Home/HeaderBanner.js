import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utility'

const HeaderBanner = (props) => {
  return (
    <View style={[styles.container, props.style]}>
        <Image source={require("../../../assets/images/home_banner.png")} style={styles.img} />
    </View>
  )
}

export default HeaderBanner

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: normalizeSize(SCREEN_HEIGHT*0.3) 
    },
    img:{
        height: normalizeSize(SCREEN_HEIGHT *0.3), 
        width: SCREEN_WIDTH, 
        resizeMode: "stretch" 
    }
})