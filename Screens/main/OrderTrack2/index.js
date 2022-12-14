import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../../../Styles'
import StepIndicator from 'react-native-step-indicator';
import GS from '../../../Styles/GlobalStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Rtext } from '../../../Components/Rtext';
import { normalizeSize, SCREEN_HEIGHT } from '../../../utility';

const thirdIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 0,
  stepStrokeCurrentColor: '#A7A7A7',
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: '#648D0B',
  stepStrokeUnFinishedColor: '#A7A7A7',
  separatorFinishedColor: '#648D0B',
  separatorUnFinishedColor: '#A7A7A7',
  stepIndicatorFinishedColor: '#648D0B',
  stepIndicatorUnFinishedColor: '#A7A7A7',
  stepIndicatorCurrentColor: '#A7A7A7',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#A7A7A7',
  labelAlign:"flex-start"
};


const OrderTrack2 = () => {
  return (
    <View style={[Styles.globalContainer,{backgroundColor:"#fff"},GS.container]}>
        <ScrollView>
          <Rtext fontSize={12} style={{color:"#A7A7A7"}}>Order ID - OD54811154</Rtext>
          <View style={{marginVertical:20, alignItems:"center"}}>
            <Image source={require("../../../assets/images/OrderTrack.png")} style={{width:"90%",height:normalizeSize(210), resizeMode:"contain"}} />
          </View>
          <Rtext fontWeight='700' fontSize={16}>
            Ladies' Finger
          </Rtext>
          <Rtext style={{marginTop:4}}  fontSize={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Rtext>
          <View style={[{marginTop:10},GS.row]}>
            <Rtext style={{textDecorationLine:"line-through",color:"#8C8C8C"}} fontSize={13}> ₹500</Rtext>
            <Rtext style={{marginLeft:16}} fontSize={13}> ₹250</Rtext>
          </View>
          <View style={{height:normalizeSize(200)}}>
          <StepIndicator
          stepCount={2}

          customStyles={thirdIndicatorStyles}
          currentPosition={2}
          direction="vertical"
          // onPress={onStepPress}
        
          renderLabel={({position,label})=>(
            <View style={{ marginTop:  normalizeSize(16*1)}}>
              <Rtext fontWeight='600' fontSize={15} >{label}</Rtext>
              
                  <View style={{marginLeft:8}}>
                    <View style={{marginTop:4}}>
                      {/* <Rtext fontSize={12}>Your order has been placed.</Rtext> */}
                      <Rtext fontSize={12} >Sunday, Oct 16, 2022 - 2:19pm</Rtext>
                    </View>
                    
                    
                  </View>
                
            </View>
          )}
          labels={['Order Confirmed', 'Delivered']}
        />
          </View>
        </ScrollView>
    </View>
  )
 
}

export default OrderTrack2

const styles = StyleSheet.create({})