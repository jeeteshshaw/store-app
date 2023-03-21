import { View, Text,StyleSheet, ScrollView} from 'react-native'
import React, { useState } from 'react';
import Entry from '../Entry';
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import GCheck from '../../../Components/GCheck';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Request } from '../../../config/Request';
import { showFlashMessage, showYupValidationError } from '../../../utility';
import { useEffect } from 'react';
import { LoginSuccessfully } from '../../../store/auth';
import { useDispatch } from 'react-redux';



const submitLogin = (data)=> {
    return Request("post", "/auth/login", data);
  }
  
const lb_loginSchema = yup
.object({
  
  email: yup.string().required('Email is required').email("Email Must Be Valid"),

  password: yup
    .string()
    .required('Password must be at least 3 characters ')
    .min(3,"Password code must be at least 3 characters"),
  
});

const Login=(props)=>{
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
      } = useForm({ resolver: yupResolver(lb_loginSchema) });
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const _loginButtonHandler = async (data) => {
        console.log(data);
        try {
          const res = await submitLogin(data);
          console.log(res.data);
          if(res.data.success){
            dispatch(LoginSuccessfully(res.data.info));
          }
        } catch (error) {
          console.log(error.response.data);
          showFlashMessage(error.response.data.errors.error,"", "danger");

        }
        // props.navigation.navigate('OTP',{isSignUp:true});
      }
      useEffect(() => {
        showYupValidationError(errors);
      }, [errors]);

    return(
        <View style={{flex:1}}>
                <GInput control={control} name={"email"}  placeholder={"Email"}  keyboardtype={'email-address'} />
                <GInput control={control} name="password"  placeholder={"Password"} secureType={true} icon={'icon'} keyboardtype={'default'}/>
                <View style={{flexDirection:'row',width:'40%',marginLeft:'10%',marginBottom:'2%',alignItems:'center'}}>
                <GCheck
                />
                    <Text style={{paddingLeft:10,fontSize:15,color:'white'}}>
                    Remember Me
                    </Text>    
                </View>
                <View>
                    <GButton data={"Continue"}  press={handleSubmit(_loginButtonHandler)}/>
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