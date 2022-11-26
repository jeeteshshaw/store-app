import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import Entry from '../Entry';
import { Fonts } from '../../../utility/CommonFonts';
import GModal from '../../../Components/GModal';


    function OTP(props) {
        const [modalactivity, setModalActivity] = useState(false)
        const UpdatingState=()=>{
        setModalActivity(false);
        props.navigation.navigate('Login');
    }
        if (props.route.params.isSignUp) {
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={[OTP_Style.text_style,Fonts.Bold]}> Enter OTP </Text>
                    <GInput
                    placeholder={'OTP'}
                    keyboardtype={'numeric'}
                    />
                    <GButton style={{marginTop:20}} data={'Continue'} press={()=>(setModalActivity(true))}/>
                    <GModal modalVisible={modalactivity} text={"You have successfully Signed Up."} modalVisiblity={UpdatingState} />
                </View>
                )    
        } else {
            
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={[OTP_Style.text_style,Fonts.Bold]}> Enter OTP </Text>
                    <GInput
                    placeholder={'OTP'}
                    keyboardtype={'numeric'}
                    />
                    <GButton style={{marginTop:20}} data={'Continue'} press={()=>(props.navigation.navigate('Reset'))}/>
                </View>
                )

        }

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