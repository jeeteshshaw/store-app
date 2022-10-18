import {View,TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

function GInput(props){
    const [text, setText] = useState('');
    return (
      <View style={[styles.container, props.containerStyle]}>
        <TextInput
        style={[styles.inputField,props.style]}
        placeholder={props.placeholder}
        keyboardType={props.keyboardtype}
        onChangeText={text => setText(text)}
        secureTextEntry={props.secureText}
        />
      </View>
    )
  }
export default GInput;


const styles = StyleSheet.create({
    container:{
        height:80,
        width:380,
        right:10,
        marginHorizontal:20, 
        borderRadius:80
    },
    inputField:{
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius:15,
        backgroundColor:'white',
        
    }
})