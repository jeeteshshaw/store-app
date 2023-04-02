import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import Entry from '../Entry';
import { Fonts } from '../../../utility/CommonFonts';
import GModal from '../../../Components/GModal';
import { useRoute } from '@react-navigation/native';
import { showFlashMessage } from '../../../utility';
import { Request } from '../../../config/Request';

const submitSignupVerify = (data, user_id)=> {
    return Request("put", "/auth/verifyotp/"+user_id, data);
  }
  
   
function OTP(props) {
    const [modalactivity, setModalActivity] = useState(false)
    const [OtpText, setOtpText] = useState("");
    const UpdatingState = () => {
        setModalActivity(false);
        props.navigation.navigate('Login');
    }
    const route = useRoute();
    console.log(route.params);
    const _SignupOtpVerify = async () => {
        // console.log(data);
        if(OtpText.length!==6){
            return false;
        }
        try {
          const res = await submitSignupVerify({
            otp:OtpText
          }, route.params.user_id);
          console.log(res.data);
        //   props.navigation.navigate('OTP',{isSignUp:true, user_id: res.data.info.user_id});
        setModalActivity(true)
        setTimeout(() => {
            UpdatingState()
            
        }, 3000);
        } catch (error) {
          console.log(error.response.data);
          showFlashMessage(error.response.data.errors.error,"", "danger");
        }
      }
    if (props.route.params.isSignUp) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[OTP_Style.text_style, Fonts.Bold]}> Enter OTP </Text>
                <GInput
                    placeholder={'OTP'}
                    keyboardtype={'numeric'}
                    onChange={setOtpText} 
                    maxLength={6}
                />
                <GButton style={{ marginTop: 20 }} data={'Continue'}
                //  press={() => (setModalActivity(true))}
                    press={_SignupOtpVerify}
                  />
                <GModal modalVisible={modalactivity} text={"You have successfully Signed Up."} modalVisiblity={UpdatingState} />
            </View>
        )
    } else {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[OTP_Style.text_style, Fonts.Bold]}> Enter OTP </Text>
                <GInput
                    placeholder={'OTP'}
                    keyboardtype={'numeric'}
                />
                <GButton style={{ marginTop: 20 }} data={'Continue'} press={() => (props.navigation.navigate('Reset'))} />
            </View>
        )

    }

}

export default Entry(OTP);


const OTP_Style = StyleSheet.create({
    text_style: {
        textAlign: 'center',
        color: 'white',
        fontSize: 23,
        width: '37%',
        paddingBottom: 10,
    },
})