import { View, Text, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import { Fonts } from '../../../utility/CommonFonts'
import { TouchableRipple } from 'react-native-paper';
import GInput from '../../../Components/GInput';



export default function SkipLog(props) {

  const [ModalActivation, setModalActivation] = useState(true)

  const ModalFunction =()=>{
    setModalActivation(false);
    props.navigation.navigate('Location');
  }

  return (

    <View style={{backgroundColor:'#A7A7A7',flex:1}}>
      <Text style={[Fonts.Bold,{fontSize:25, color:'black', justifyContent:'center',textAlign:'center',marginTop:75}]}>Waiting For Location</Text>
      <View style={{ flex: 1 }}>                    
        <Modal   transparent={true} visible={ModalActivation} >
            <View style={SkipLogStyle.centeredView}>
                <View style={SkipLogStyle.modalView}>
                    <View style={{backgroundColor:'#9DE6014D', width:'100%', height:'20%', flexDirection:'row', paddingTop:10}}>
                      <TouchableRipple onPress={ModalFunction} style={{ marginHorizontal:30 ,marginTop:15}}>
                        <Image source={require('../../../assets/icons/location_cross.png')}  style={{height:45, width:45}}/>
                      </TouchableRipple>
                        <View style={{height:65, width:'60%'}}>
                            <Text style={[Fonts.Bold,{fontSize:15, color:'black',lineHeight:22}]}>Location permission is off Please enable device location for faster and hassle-free delivery</Text>
                        </View>
                    </View>
                    <View style={{width:'100%', height:'20%', justifyContent:'center'}}>
                        <GInput placeholder={'Search delivery location'} SearchType={true}  containerStyle={{borderRadius:50,borderWidth:1, borderColor:'black'}}/>
                    </View>
                    <View style={{backgroundColor:'yellow', width:'100%', height:'60%'}}>
                        <Image source={require('../../../assets/icons/Enable_on_turn_on.png')}  style={{height:'100%', width:'100%'}}/>
                    </View>
                </View>
            </View>
        </Modal>
    
    
                            </View>

    </View>
    
  )
}

const SkipLogStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
      },
      modalView: {
        margin:20,
        height:'80%',
        width:'95%',
        backgroundColor: "white",
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