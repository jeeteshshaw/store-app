import {View,TextInput, StyleSheet,Image } from 'react-native'
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
        <View style={{width:'20%',borderBottomRightRadius:15,borderTopRightRadius:15}}>
        {/* <Image  style={styles.icon} source={require('../../assets/icons/view.svg')} /> */}
        </View>
      </View>
    )
  }
export default GInput;


const styles = StyleSheet.create({
    container:{
        height:'14%',
        width:'90%',
        marginLeft:'5%',
        borderRadius:15,
        backgroundColor:'white',
        marginBottom:'4%',
        flexDirection:'row',
      },
      inputField:{
        height: '100%',
        alignSelf:'center',
        borderRadius:15,
        backgroundColor:'white',
        width:'80%',
        borderBottomRightRadius:0,
        borderTopRightRadius:0,
        marginLeft:'5%',
        // backgroundColor:'tomato'
    },
    icon:{
      height:20,
      width:20,
      resizeMode:"contain"
  }
})