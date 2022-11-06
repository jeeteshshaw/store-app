import { View, Text,StyleSheet} from 'react-native'
import React, { useState } from 'react';
import Entry from '../Entry';
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import GCheck from '../../../Components/GCheck';
import { Fonts } from '../../../utility/CommonFonts';

const Login=(props)=>{
    return(
        <View style={{flex:1}} >
            <GInput  placeholder={"Email"}  keyboardtype={'email-address'} />
            <GInput  placeholder={"Password"} secureText={true} icon={'icon'} keyboardtype={'default'}/>
            <View style={{flexDirection:'row',width:'50%',marginLeft:'10%',marginBottom:10,alignItems:'center'}}>
            <GCheck/>
                <Text style={[{fontSize:18,color:'white'},Fonts.ExtraBoldItalic]}>
                Remember Me
                </Text>    
            </View>
            <View>
                <GButton data={"Continue"}  press={()=>console.log("Clicked !!")}/>
                <Text onPress={()=>(props.navigation.navigate('Enter_Email'))} style={[Login_style.foreget_text,Fonts.Normal]}>
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
    color:'white',
    marginTop:10,
    // paddingTop:14,
    // backgroundColor:'blue',
    },
})