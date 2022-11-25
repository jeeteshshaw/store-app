import { View, Text, Image } from 'react-native'
import React from 'react'
import GButton from '../../../Components/GButton'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'

const Location = (props) => {


    const ButtonFunction =()=>{
        console.log('Button Function')
        props.navigation.navigate('SetLocation');
    }

  return (
    <View style={{flex:1}}>
      <View style={{height:'60%', width:'100%'}}>
        <Image source={require('../../../assets/icons/Why-no-location-found.png')}  style={{height:'100%', width:'100%'}}/>
      </View>
      <View style={{height:'40%', width:'100%'}}>
        <Rtext style={{color:'black', textAlign:'center', marginVertical:20}} fontWeight={"700"} fontSize={24}>Not available</Rtext>
        <Rtext style={{ paddingHorizontal:10, color:'black', width:"100%"}} fontSize={16}>Sorry, Hari Bhari is not available at your current location yet. We will be there soon hang on tight.</Rtext>
        <GButton style={{ height:50, width:"85%", marginVertical:50}} textStyle={{justifyContent:'center', fontFamily:"K2D-700", fontSize:normalizeSize(18)}} press={ButtonFunction} data={'Set location manually'}/>
      </View>
    </View>
  )
}

export default Location