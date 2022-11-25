import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import GInput from '../../../Components/GInput'
import { normalizeSize } from '../../../utility'

const SetLocation = (props) => {

  const SetHand = ()=>{
    console.log("Start")
    props.navigation.navigate('Login')
    console.log("End")
  }

  return (
    <View style={{flex:1, backgroundColor:'#A7A7A7'}}>
        <View style={{ height:'20%'}}>
                <TouchableRipple onPress={SetHand} style={{justifyContent:'center',margin:50, height:50, width:50,alignSelf:'center'}}>
                    <Image source={require('../../../assets/icons/cancel_1.png')}  resizeMode={'contain'}  style={{height:'100%',width:'100%'}}/>
                </TouchableRipple>
        </View>
        <View style={{ backgroundColor:'white', height:'80%', width:'100%', borderTopLeftRadius:30, borderTopRightRadius:30}}>
            <Text style={{margin:normalizeSize(28), marginBottom:20, fontSize:normalizeSize(20), color:'black'}}>Select Location</Text>
            <GInput placeholder={'Search delivery location'} SearchType={true}  containerStyle={{borderRadius:50,borderWidth:2, borderColor:'black',marginTop:10}}/>
            <View style={{flexDirection:'row', marginTop:16}}>
                <Image source={require('../../../assets/icons/pin1.png')} style={{height:normalizeSize(25),width:normalizeSize(30), resizeMode:"contain", marginHorizontal:40}}/>
                <Text style={{borderBottomColor:'#77A615',borderLeftColor:'white', textAlign:"center",borderRightColor:'white',borderTopColor:'white', borderWidth:2, flex:0.8}}>Use current location</Text>
                <Image source={require('../../../assets/icons/right_arrow.png')} style={{height:normalizeSize(20),width:normalizeSize(20), marginHorizontal:20,resizeMode:"contain",}}/>
            </View>
        </View>
    </View>
  )
}

export default SetLocation