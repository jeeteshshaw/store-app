import { View, Text, Modal,Alert,StyleSheet, Pressable, Image} from 'react-native'
import React, { useState } from 'react'
import { Fonts } from '../../utility/CommonFonts';

export default function GModal(props) {

  return (
    <View >
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={props.modalVisiblity}
        >

        <View style={{flex: 1,backgroundColor:'#000000aa'}}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={props.modalVisiblity}
            >
              <Image source={require('../../assets/icons/check.png')} style={{ height:40,width:40}}  />
            </Pressable>
            <Text style={[{fontSize:22,color:'white', marginLeft:15},Fonts.Bold]}>{props.text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "#78A615",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      flexDirection:'row',
    }
  });
  