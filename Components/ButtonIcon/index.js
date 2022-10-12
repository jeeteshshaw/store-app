import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonIcon = ({children, style={}}) => {
  return (
        <TouchableOpacity
        style={[styles.btn, style]}
        >
        {children}
        </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"green", 
        height:30, 
        width:30, 
        borderRadius:5,
        justifyContent:"center", 
        alignItems:"center",
        elevation:4
        
    }
})