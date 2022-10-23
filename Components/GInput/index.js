import {View,TextInput, StyleSheet,Image, Touchable } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple } from 'react-native-paper';
function GInput(props){
    const [text, setText] = useState('');


    if (!props.secureText) {
      
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
  }else{

    return (
      <View style={[styles.container, props.containerStyle]}>
      <TextInput
      style={[styles.inputField,props.style]}
      placeholder={props.placeholder}
      keyboardType={props.keyboardtype}
      onChangeText={text => setText(text)}
      secureTextEntry={props.secureText}
      />
      <TouchableRipple onPress={()=>(console.log('Visible'))} style={{width:'10%',justifyContent:'center'}}>
      <Image  style={styles.icon} source={require('../../assets/icons/view_open.png')} />
      </TouchableRipple>
    </View>
  )
    
  }
}
  export default GInput;


const styles = StyleSheet.create({
    container:{
        height:37,
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
        color:'#000'
        // backgroundColor:'tomato'
    },
    icon:{
      height:30,
      width:30,
      resizeMode:"contain"
  }
})