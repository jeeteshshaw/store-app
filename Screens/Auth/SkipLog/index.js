import { View, Text, StyleSheet, Modal, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Fonts } from '../../../utility/CommonFonts'
import { TouchableRipple } from 'react-native-paper';
import GInput from '../../../Components/GInput';
import { normalizeSize, SCREEN_HEIGHT } from '../../../utility';
import { Rtext } from '../../../Components/Rtext';



export default function SkipLog(props) {

  const [ModalActivation, setModalActivation] = useState(true)

  const ModalFunction = () => {
    // setModalActivation(false);
    props.navigation.navigate('Location');
  }

  return (
    <View style={{flex:1}}>

      <ScrollView scrollEnabled={false} style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
        <View style={{minHeight:SCREEN_HEIGHT-normalizeSize(22)}}>
          <Rtext style={[{ color: 'black', justifyContent: 'center', textAlign: 'center', marginTop: 16 }]} fontWeight={"700"} fontSize={24}>Waiting For Location</Rtext>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "flex-end", }} >
              <View style={SkipLogStyle.centeredView}>
                <View style={SkipLogStyle.modalView}>
                  <View style={{ backgroundColor: '#9DE6014D', width: '100%', height: normalizeSize(80), flexDirection: 'row', paddingTop: 10 }}>
                    <TouchableRipple onPress={ModalFunction} style={{ marginHorizontal: 30, marginTop: 15 }}>
                      <Image source={require('../../../assets/icons/location_cross.png')} style={{ height: 45, width: 45 }} />
                    </TouchableRipple>
                    <View style={{  width: '70%' }}>
                      <Text style={[Fonts.Light, { fontSize: 15, color: 'black', lineHeight: 22 }]}>Location permission is off Please enable device location for faster and hassle-free delivery</Text>
                    </View>
                  </View>
                  <View style={{ width: '100%', height: '20%', justifyContent: 'center' }}>
                    <GInput placeholder={'Search delivery location'} OnIconPress={ModalFunction} SearchType={true}  containerStyle={{ borderRadius: 50, borderWidth: 2, borderColor: 'black' }} />
                  </View>
                  <View style={{  width: '100%', height: '60%' }}>
                    <Image source={require('../../../assets/icons/Enable_on_turn_on.png')} style={{ height: '100%', width: '100%', resizeMode:"contain", }} />
                  </View>
                </View>
              </View>
            </View>

        </View>


        </View>

      </ScrollView>
    </View>

  )
}

const SkipLogStyle = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    // marginTop: 100,
  },
  modalView: {
    marginBottom: 20,
    height:SCREEN_HEIGHT*0.7,
    width: '95%',
    backgroundColor: "white",
    borderColor: 'black',
    alignItems: "center",
    shadowColor: "#000",
    paddingBottom:20,
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