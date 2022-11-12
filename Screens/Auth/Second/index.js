// import { View, Text, StyleSheet } from 'react-native'
// import React from 'react'
import { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Modal,Pressable,Alert, Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { LoginSuccessfully } from '../../../store/auth';
import { normalizeSize, SCREEN_HEIGHT } from '../../../utility';
import { Fonts } from '../../../utility/CommonFonts';


const Second = (props) => {
    const dispatch = useDispatch();
    return (
        <View style={Entry_style.container}>
                <ScrollView scrollEnabled={true} style={{ backgroundColor: '#9FCC3A' }}>
                    <View style={{ minHeight: SCREEN_HEIGHT }}>

                        <View style={[Entry_style.semi_container, { backgroundColor: '#A7A7A7' }]}>
                            <ImageBackground source={require('../../../assets/images/mp_1.png')} resizeMode="cover" style={{ flex: 1, width: '100%', height: '100%' }}>
                                <TouchableRipple onPress={() => (dispatch(LoginSuccessfully()))} style={{ backgroundColor: 'black', justifyContent: 'center', height: 35, width: 100, borderRadius: 18, alignSelf: 'flex-end', marginRight: 5, top: 15 }}>
                                    <Text style={[Entry_style.agree_text, { justifyContent: 'center', height: '50%' }, Fonts.Bold]}>Skip Login</Text>
                                </TouchableRipple>
                            </ImageBackground>
                        </View>
                        <View style={{ flex: 1 }}>
                            
                        <Modal transparent={true} visible={true} >
                            <View style={Entry_style.centeredView}>
                            <View style={Entry_style.modalView}>
                                    <Image source={require('../../../assets/icons/pin1.png')}  style={{height:40, width:40,marginTop:26}}/>
                                    <Text style={[Fonts.Normal,{marginTop:13,color:'black',fontSize:15}]}  >
                                            Allow HariBhari to access this device's location?
                                    </Text>
                                    <View style={{flexDirection:'row', marginTop:40,alignItems:'flex-start'}}>
                                        <TouchableRipple style={{paddingRight:48}}>
                                            <View>
                                            <Image source={require('../../../assets/icons/Precise.png')} style={{height:100,width:100}} />
                                            <Text style={{textAlign:'center'}}>Precise</Text>
                                            </View>
                                        </TouchableRipple>
                                        <TouchableRipple>
                                            <View>
                                            <Image source={require('../../../assets/icons/Approximate.png')} style={{height:100,width:100}} />
                                            <Text style={{textAlign:'center'}}>Approximate</Text>
                                            </View>
                                        </TouchableRipple>
                                    </View>
                                    <View style={{marginTop:10,justifyContent:'center'}}>
                                    <TouchableRipple onPress={()=>(props.navigation.navigate('Login'))}>
                                    <Text  style={[Fonts.Bold,{fontSize:20}]}>While using the app</Text>
                                    </TouchableRipple>
                                    <TouchableRipple onPress={()=>(props.navigation.navigate('Login'))}>
                                    <Text  style={[Fonts.Bold,{fontSize:20,textAlign:'center'}]}>Only this time</Text>
                                    </TouchableRipple>
                                    <TouchableRipple onPress={()=>(props.navigation.navigate('Login'))}>
                                    <Text  style={[Fonts.Bold,{fontSize:20,textAlign:'center'}]}>Don't Allow</Text>
                                    </TouchableRipple>
                                    </View>
                            </View>
                            </View>
                        </Modal>


                        </View>
                    </View>
                </ScrollView>
            </View>
      )
  }
export default Second;

const Entry_style = StyleSheet.create({
    container: {
        flex: 1
    },
    semi_container: {
        height: SCREEN_HEIGHT * 0.40
    },
    agree_text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 13,
        height: '100%',
        width: '100%'
    },
    agree: {
        color: 'white',
        textAlign: 'center',
        fontSize: normalizeSize(14),
        height: '100%',
        width: 270,
    },
    text_Log: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        paddingHorizontal: '2%'
    },
    container_log: {
        marginTop: 4,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '50%',
        // backgroundColor:'aqua',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        height:428,
        width:'95%',
        backgroundColor: "white",
        borderRadius: 40,
        borderColor:'black',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
