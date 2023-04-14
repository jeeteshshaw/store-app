import { Text,View,Dimensions,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Entry from '../Entry'
import GInput from '../../../Components/GInput';
import GButton from '../../../Components/GButton';
import GModal from '../../../Components/GModal';
import { showFlashMessage } from '../../../utility';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Request } from '../../../config/Request';
import { showYupValidationError } from '../../../utility';
import { useEffect } from 'react';
import {useForm} from 'react-hook-form';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const submitReset= (data, user_id)=> {
  return Request("put", "/auth/resetpassword/"+user_id, data);
}

const Reset_Password = (props) => {
  const [modalactivity, setModalActivity] = useState(false)
  // const [password,SetPassword] = useState("");
  // const [confirm_password,setConfirmPassword] = useState("");

  const lb_resetSchema = yup
  .object({
    password: yup
      .string()
      .required('Password must be at least 3 characters ')
      .min(3,"Password code must be at least 3 characters"),
    confirm_password: yup
      .string()
      .required('Confirm Password code must be at least 3 characters')
      .min(3,"Confirm Password code must be at least 3 characters")
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(lb_resetSchema) });


  const _resetButtonHandler = async (data) => {
    console.kog("reset Button Handler");
    console.log(data);
    console.kog("================= before try catch");
    try {
      const res = await submitReset(data);
      console.log("====== Try ======")
      console.log(res.data);
      props.navigation.navigate('Login');
    } catch (error) {
      console.log("====== Catch Error ======")
      console.log(error.response.data);
      showFlashMessage(error.response.data.errors.error,"", "danger");
    }
  }
  useEffect(() => {
    showYupValidationError(errors);
  }, [errors]);



    const UpdatingState= () =>{
        setModalActivity(false);
    }

  return (
    <View style={{flex:1}}>
      <Text style={style.text}>
        New Password
      </Text>
      <GInput  placeholder={'Enter Password'} name="password" secureType={true} keyboardtype={'default'}/>
      <Text style={style.text}>
        Confirm Password
      </Text>
      <GInput  placeholder={'Confirm Password'} name="confirm_password" secureType={true} keyboardtype={'default'}/>
      <GButton style={{marginBottom:4}} data={'Continue'}   press={() => {
  handleSubmit(_resetButtonHandler)()
  // setModalActivity(!modalactivity);
      }}/>
      <GModal modalVisible={modalactivity} text={"You have successfully changed your password."} modalVisiblity={UpdatingState} />
    </View>
  )
}

export default Entry(Reset_Password)

const style = StyleSheet.create({
  text:{
    color:'white',
    fontSize:18,
    justifyContent:'center',
    paddingHorizontal:'15%',
    paddingVertical:'2%'
  }
})