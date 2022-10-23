import { View, Text,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import Entry from '../Entry';
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import GCheck from '../../../Components/GCheck';





const Login=(props)=>{
    return(
        <View style={{backgroundColor:'tomato'}}>
            <GInput  placeholder={"Email"}  keyboardtype={'email-address'} />
            <GInput  placeholder={"Password"} secureText={true} icon={'icon'} keyboardtype={'default'}/>
            <View style={{flexDirection:'row',width:'40%',marginLeft:'10%',marginBottom:'2%',alignItems:'center'}}>
            <GCheck/>
                <Text style={{paddingLeft:10,fontSize:18,color:'white'}}>
                Remember Me
                </Text>    
            </View>
            <View>
                <GButton data={"Continue"}  press={()=>(props.navigation.navigate('Skip'))}/>
                <Text onPress={()=>(props.navigation.navigate('Enter_Email'))} style={Login_style.foreget_text}>
                    Forget Password
                </Text>
            </View>
        </View>
    );
}

export default Entry(Login);

const Login_style = StyleSheet.create({
foreget_text:{
    textAlign:'center',
    fontSize:18,
    color:'#557D00',
    // paddingTop:14,
    // backgroundColor:'blue',
    },
})