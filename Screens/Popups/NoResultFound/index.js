import { Modal, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext';
import { normalizeSize } from '../../../utility';
import { TouchableRipple } from 'react-native-paper';
import { useState,useEffect} from 'react';
import Globalstyles from '../../../Styles/GlobalStyle';
// import { useEffect } from 'react';

function NoResultFound(props){
  useEffect(() => {
    // props.modalactivity();
  },[])
  
  
  
    return(
      <View>
          <Modal animationType="slide" transparent={true} visible={props.modalVisiblity} onRequestClose={props.onClose}>
            <View style={{flex: 1,backgroundColor:'#000000aa',justifyContent:'center',alignItems:'center'}}>
              <View style={[styles.modalView,Globalstyles.center]}>
                <View style={Globalstyles.row}>

                  <Image source={require('../../../assets/icons/ic_outline-search-off.png')} style={{height:normalizeSize(25), width:normalizeSize(25), resizeMode:'contain'}}/>
                  <Rtext style={{color:"#747474"}}> Sorry, no result found.</Rtext>
                </View >
                  
              </View>
            </View>
          </Modal>
        </View>
    );
    }
export default NoResultFound;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22,
      backgroundColor:'tomato'
    },
    modalView: {
      marginTop: 20,
      backgroundColor: "white",
      borderRadius: 20,
      shadowColor: "#000",
      height:normalizeSize(200),
      width:'90%',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button:{},
    text:{color:"#648D0B", alignSelf:'center'},
    tracking:{color:"#1B23E7", alignSelf:'center', marginVertical:10},
  })