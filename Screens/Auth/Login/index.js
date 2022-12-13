import { View, Text,StyleSheet, ScrollView} from 'react-native'
import React, { useState } from 'react';
import Entry from '../Entry';
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import GCheck from '../../../Components/GCheck';
import { useNavigation } from '@react-navigation/native';





const Login=(props)=>{
    const navigation = useNavigation();
    return(
        <View style={{flex:1}}>
                <GInput  placeholder={"Email"}  keyboardtype={'email-address'} />
                <GInput  placeholder={"Password"} secureType={true} icon={'icon'} keyboardtype={'default'}/>
                <View style={{flexDirection:'row',width:'40%',marginLeft:'10%',marginBottom:'2%',alignItems:'center'}}>
                <GCheck
                />
                    <Text style={{paddingLeft:10,fontSize:15,color:'white'}}>
                    Remember Me
                    </Text>    
                </View>
                <View>
                    <GButton data={"Continue"}  press={()=>navigation.navigate('Payment',{amount:800})}/>
                    {/* <GButton data={"Continue"}  press={()=>console.log("pressed")}/> */}
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