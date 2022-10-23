import { View, Text,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import Entry from '../Entry';
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import GCheck from '../../../Components/GCheck';





const Login=(props)=>{
    return(
        <View style={{flex:1}}>
            <GInput containerStyle={{height:'23%'}} placeholder={"Email"}  keyboardtype={'email-address'} />
            <GInput containerStyle={{height:'23%'}} placeholder={"Password"} secureText={true} icon={'icon'} keyboardtype={'default'}/>
            <View style={{flexDirection:'row',width:'40%',marginLeft:'10%',marginBottom:'2%',alignItems:'center'}}>
            <GCheck
            />
                <Text style={{paddingLeft:10,fontSize:15,color:'white'}}>
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
    fontSize:15,
    color:'white',
    paddingTop:14,
    },
})