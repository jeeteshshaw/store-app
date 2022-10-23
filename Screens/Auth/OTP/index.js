import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import Entry from '../Entry';


    function OTP(props) {
        return(
            <View style={{flex:1}}>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}} >
                    <Text style={OTP_Style.text_style}>
                      ENTER  OTP
                    </Text>
                    <GInput  placeholder={"OTP"} keyboardtype={'numeric'}/>
            </View>
            <GButton  data={"Continue"} press={()=>(props.navigation.navigate('Reset'))}/>
        </View>
        )
    }

    export default Entry(OTP);


    const OTP_Style = StyleSheet.create({
        text_style:{
          textAlign:'center',
          color:'white', 
          fontSize:23,
          width:'37%',
          paddingBottom:10,
        },
        })