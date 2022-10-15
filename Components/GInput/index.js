import {View,TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
// import { TextInput } from 'react-native-paper';

function index(props){
    const [text, setText] = useState('');
    return (
      <View style={[styles.container, props.containerStyle]}>
        <TextInput
        style={[styles.inputField,props.style]}

        placeholder={props.place}
        keyboardType={props.type}
        onChangeText={text => setText(text)}
        />
      </View>
    )
  }
export default index;


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