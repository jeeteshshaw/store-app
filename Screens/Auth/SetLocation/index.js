import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import GInput from '../../../Components/GInput'

const SetLocation = (props) => {
  return (
    <View style={{flex:1, backgroundColor:'#A7A7A7'}}>
        <View style={{ height:'20%'}}>
                <TouchableRipple onPress={()=>(props.navigation.navigate('Login'))} style={{justifyContent:'center',margin:50, height:50, width:50,alignSelf:'center'}}>
                    <Image source={require('../../../assets/icons/cancel_1.png')}  resizeMode={'contain'}  style={{height:'100%',width:'100%'}}/>
                </TouchableRipple>
        </View>
        <View style={{ backgroundColor:'white', height:'80%', width:'100%', borderTopLeftRadius:30, borderTopRightRadius:30}}>
            <Text style={{textAlign:'center', marginVertical:30, fontSize:25, color:'black'}}>Select Location</Text>
            <GInput placeholder={'Search delivery location'} SearchType={true}  containerStyle={{borderRadius:50,borderWidth:2, borderColor:'black',marginVertical:10}}/>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../../../assets/icons/pin1.png')} style={{height:30,width:30, marginHorizontal:40}}/>
                <Text style={{borderBottomColor:'#77A615',borderLeftColor:'white',borderRightColor:'white',borderTopColor:'white', borderWidth:2}}>Use current location</Text>
                <Image source={require('../../../assets/icons/Right_arrow.png')} style={{height:30,width:30, marginHorizontal:20}}/>
            </View>
        </View>
    </View>
  )
}

export default SetLocation