// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Modal,Pressable,Alert, Image, TextInput } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { LoginSuccessfully } from '../../../store/auth';
import { normalizeSize, SCREEN_HEIGHT } from '../../../utility';
import { Fonts } from '../../../utility/CommonFonts';


const Second = (props) => {

    let textInput = useRef(null)
    const lengthInput = 4
    const [internalVal, setInternalVal] = useState("")
    const  onChangeText=(val)=>{
        setInternalVal(val)
    }

    useEffect(() => {
      textInput.focus()
    }, [])
    

    return (
        <View style={styles.container}>
          <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={'padding'}
          style={styles.keyboardAvoiding}
          >
            <Text style={styles.textTiles}> Enter your OTP</Text>
            <View>
              <TextInput
              ref={(input)=>textInput=(input)}
              onChangeText={onChangeText}
              value={internalVal}
              style={{height:0,width:0}}
              maxLength={lengthInput}
              returnKeyType='done'
              keyboardType='numeric'
              />
              <View style={styles.containerInput}>
                {
                  Array(lengthInput).fill().map((data, index)=>(
                        <View 
                        style={[styles.cellView,
                          {
                            backgroundColor: index === internalVal.length?"#FFADBC":"#975C8D"
                          }
                      ]}
                        key={index}>
                          <Text style={styles.cellText} onPress={()=>textInput.focus()}>
                            {internalVal &&internalVal.length > 0?internalVal[index]:""}
                          </Text>
                        </View>
                  ))
                }
              </View>
              <View style={styles.Submit}>
                <Text>Submit</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      )
  }
export default Second;

const styles = StyleSheet.create({
container:{ flex:1},
keyboardAvoiding:{
  flex:1,
  alignItems:'center',
  padding:10
},
textTiles:{
  marginTop:50,
  marginBottom:50,
  fontSize:16
},
containerInput:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center'
},
cellView:{
  paddingVertical:11,
  margin:5,
  justifyContent:'center',
  width:40,
  alignItems:'center',
  borderRadius:50
},
cellText:{
textAlign:'center',
fontSize:16
},
Submit:{
  margin:80,
  width:360,
  height:70,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'aqua',
}
});