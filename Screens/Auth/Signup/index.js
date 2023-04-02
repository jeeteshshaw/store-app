import { View, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import Entry from '../Entry';
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { showFlashMessage, showYupValidationError } from '../../../utility';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Request } from '../../../config/Request';


const submitSignup = (data)=> {
  return Request("post", "/auth/signup", data);
}

const lb_registerSchema = yup
  .object({
    name: yup.string().required("First Name required"),
    email: yup.string().required('Email is required').email("Email Must Be Valid"),

    password: yup
      .string()
      .required('Password must be at least 3 characters ')
      .min(3,"Password code must be at least 3 characters"),
    confirm_password: yup
      .string()
      .required('Confirm Password code must be at least 3 characters')
      .min(3,"Confirm Password code must be at least 3 characters")
  });
const Signup = (props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(lb_registerSchema) });

  const _registerButtonHandler = async (data) => {
    console.log(data);
    try {
      const res = await submitSignup(data);
      console.log(res.data);
      props.navigation.navigate('OTP',{isSignUp:true, user_id: res.data.user_id});
    } catch (error) {
      console.log(error.response.data);
      showFlashMessage(error.response.data.errors.error,"", "danger");
    }
  }
  useEffect(() => {
    showYupValidationError(errors);
  }, [errors]);
  // {"info": {"message": "OTP Sent To jesnal2@mailinator.com"}, "success": true, "user_id": "6419f8beb8683c1fe4b9e17e"
  return (
    <View style={{ flex: 1 }}>

      <GInput control={control} name="name" placeholder={'Name'} keyboardtype={'default'} />
      <GInput control={control} name="email" placeholder={'Email Address'} keyboardtype={'email-address'} />
      <GInput control={control} name="password" placeholder={'Password'} keyboardtype={'default'} secureType={true} />
      <GInput control={control} name="confirm_password" placeholder={'Confirm Password'} secureType={true} keyboardtype={'default'} />
      <GButton data={'Continue'} press={() => {
        handleSubmit(_registerButtonHandler)()
        // props.navigation.navigate('OTP',{isSignUp:true});
      }} />
    </View>
  )
}
export default Entry(Signup);
