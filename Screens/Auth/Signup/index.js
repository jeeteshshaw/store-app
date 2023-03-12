import { View,StyleSheet, ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import Entry from '../Entry';
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { showYupValidationError } from '../../../utility';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const lb_registerSchema = yup
  .object({
    name: yup.string().required("first name required"),
    email: yup.string().email().required('email is required'),

    password: yup
      .string()
      .min(3)
      .required('password code must be at least 3 characters` '),
      confirm_password: yup
    .string()
    .min(3)
    .required('Confirm password code must be at least 3 characters'),
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
    // props.navigation.navigate('OTP',{isSignUp:true});
  }
  useEffect(() => {
    showYupValidationError(errors);
  }, [errors]);
  return (
    <View style={{flex:1}}>

        <GInput control={control} name="name"  placeholder={'Name'} keyboardtype={'default'}/>
        <GInput control={control} name="email"  placeholder={'Email Address'} keyboardtype={'email-address'}/>
        <GInput control={control} name="password"  placeholder={'Password'} keyboardtype={'default'} secureType={true} />
        <GInput control={control} name="confirm_password"  placeholder={'Confirm Password'} secureType={true} keyboardtype={'default'}/>
        <GButton  data={'Continue'} press={()=>{
          handleSubmit(_registerButtonHandler)()
          // props.navigation.navigate('OTP',{isSignUp:true});
        }}/>
    </View>
  )
}
export default Entry(Signup);
