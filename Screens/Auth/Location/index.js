import { View, Text, Image } from 'react-native'
import React from 'react'
import GButton from '../../../Components/GButton'

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
        <Text style={{fontSize:25, color:'black', textAlign:'center', marginVertical:20}}>Not available</Text>
        <Text style={{fontSize:18,width:'90%',marginHorizontal:40, color:'black'}}>Sorry, Hari Bhari is not available at your current location yet. We will be there soon hang on tight.</Text>
        <GButton style={{ height:50, width:300, marginVertical:50}} textStyle={{paddingTop:5,justifyContent:'center'}} press={ButtonFunction} data={'Set location manually'}/>
      </View>
    </View>
  )
}

export default Location