import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import GS from '../../../Styles/GlobalStyle'
import Styles from '../../../Styles'
import { Rtext } from '../../../Components/Rtext'
import { Abutton } from '../../../Components/Abutton'
import { Feather } from '@expo/vector-icons'
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { showFlashMessage, showYupValidationError } from '../../../utility';
import { Request } from '../../../config/Request';
import { useEffect } from 'react'
import GInput from '../../../Components/GInput'

const submitUpdateProf = (data) => {
  return Request("put", "/auth/updateprofile", data);
}

const up_registerSchema = yup
  .object({
    name: yup.string().required("First Name required"),
    phone: yup.string().required('Phone is required'),
    address: yup.string().required('Address is required'),
  });

const ProfileEdit = (props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(up_registerSchema) });

  const _registerButtonHandler = async (data) => {
    console.log(data);
    try {
      const res = await submitUpdateProf(data);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
      showFlashMessage(error.response.data.errors.error, "", "danger");
    }
  }
  useEffect(() => {
    showYupValidationError(errors);
  }, [errors]);

  return (
    <View style={[GS.container, GS.center, Styles.globalContainer]}>
      <View style={{ backgroundColor: "#fff", width: "100%", borderRadius: 11, padding: 10 }}>
        <Rtext style={{ textAlign: "center" }} fontWeight={"700"} fontSize={15}>Profile</Rtext>
        <View style={{ padding: 16 }}>
          <FlatList
            data={[{ "title": "Name", "name": "name" }, { "name": "phone", "title": "Phone" }, { "name": "address", "title": "Address" }]}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            keyExtractor={item => item.key}
            renderItem={({ item, key }) => (
              <View>
                <Rtext style={{ color: "#5C5A5A" }} fontSize={13}>{item["title"]}</Rtext>

                <View style={[GS.row_Between, { borderBottomWidth: 1, marginHorizontal: 10 }]}>

                  <Controller
                    control={control}
                    name={item.name}
                    rules={{ required: "Please fill the " + item.placeholder }}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { invalid, isTouched, isDirty, error },
                      formState,
                    }) => (
                      <TextInput
                        style={{ flex: 1, color: "#9DE601" }}
                        onBlur={onBlur} // notify when input is touched
                        onChangeText={value => onChange(value)}  // send value to hook form
                        value={value}


                        placeholder={item.title}
                        inputRef={ref}
                        name={item.name}
                      />
                    )}
                  />



                  <View>
                    <Feather name="edit" size={16} color="black" />
                  </View>
                </View>
              </View>
            )}
          />


          <View style={GS.center}>
            <View >
              <Abutton style={{ backgroundColor: "#78A615", borderRadius: 100, paddingHorizontal: 28 }} textColor={"#fff"} fontSize={14} onPress={() => {handleSubmit(_registerButtonHandler)() }}>Done</Abutton>
            </View>

          </View>
        </View>
      </View>
    </View>
  )
}

export default ProfileEdit

const styles = StyleSheet.create({

})