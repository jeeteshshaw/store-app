import { View, Text,Image,Dimensions,StyleSheet} from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import GButton from '../../../Components/GButton'
import { normalizeSize } from '../../../utility';

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
export default function Payment(props) {
  return(
    <View style={{flex:1, backgroundColor:'white'}}>
      <Rtext fontWeight='700' fontSize={15} style={{paddingLeft:10,marginBottom:15,marginTop:15}}>Recommended</Rtext>
      <View >
        <View style={[Styles.card,{marginTop:10}]}>
        <Rtext style={{paddingLeft:10, marginBottom:10}} fontWeight='700'>Cash on Delivery</Rtext>
        {/* Cash on Delivery  */}
        <View style={{flexDirection:'row'}}>
          <Image source={require("../../../assets/images/cash-on-delivery-2.png")}  style={{ resizeMode:"contain",height:80,width:80, marginLeft:10}}/>
          <View style={{ paddingTop:20,paddingLeft:10}}>
            <Rtext fontWeight='400' fontSize={12} style={{width:normalizeSize(230), color:'#7C7B7B'}}>Please pay ₹765 to the delivery executive when your order is delivered</Rtext>
            <View style={{paddingTop:5, paddingBottom:normalizeSize(25), paddingTop:20}}>
            <GButton press={()=>(props.navigation.navigate('Cart',{modal:true}))} style={{height:normalizeSize(24), width:normalizeSize(80),borderRadius:4,alignSelf:'flex-start'}} textStyle={{fontSize:13}} data="Place Order"/>
            </View>
          </View>
        </View>
        </View>
        {/*End of Cash on Delivery && Start of UPI*/}
        <View style={[Styles.card,{marginTop:10,height:deviceHeight/3.5,}]}>
          <Rtext style={{paddingLeft:10}} fontWeight='700'>UPI</Rtext>
          <View style={{flexDirection:'row',paddingLeft:10}}>
            <Image source={require('../../../assets/images/Phone_Pay.png')}  style={{height:normalizeSize(60), width:normalizeSize(100),resizeMode:"contain",paddingLeft:10}} />
            <Rtext fontWeight='400' fontSize={12} style={{paddingTop:35, paddingLeft:10,color:'#7C7B7B'}}>PhonePe</Rtext>
            <View style={{marginHorizontal:150,paddingTop:25}}>
            <Image source={require('../../../assets/icons/arrow_right.png')} style={{ height:15,width:15,resizeMode:'contain',color:'#A7A7A7'}} />
            </View>
          </View>
          <View style={{flexDirection:'row',paddingLeft:10,justifyContent:'flex-start', alignItems:'center'}}>
            <Image source={require('../../../assets/images/UPI.png')}  style={{height:normalizeSize(60), width:normalizeSize(100),resizeMode:"contain",paddingLeft:10}} />
            <Rtext fontWeight='400' fontSize={12} style={{paddingTop:normalizeSize(10), paddingLeft:10,color:'#7C7B7B'}}>Pay via UPI</Rtext>
            <View style={{alignSelf:'center',paddingLeft:normalizeSize(110)}}>
            <Image source={require('../../../assets/icons/arrow_right.png')} style={{ height:15,width:15,resizeMode:'contain',color:'#A7A7A7'}} />
            </View>
          </View>
          <View style={{flexDirection:'row', marginLeft:normalizeSize(60),marginTop:10}}>
            <Rtext fontWeight='400' fontSize={12} style={{color:'#056721'}}><Text style={{color:'black'}}>Mobile and</Text> more options</Rtext>
            <View style={{flexDirection:'row', paddingTop:5, marginLeft:10}}>
            <Image source={require('../../../assets/icons/down-filled1.png')} style={{ resizeMode:'contain', height:12,width:12, tintColor:'#056721'}}/>
            </View>
          </View>
        </View>
        {/*End of UPI && Start of Card*/}
        <View style={[Styles.card,{marginTop:10, paddingBottom:normalizeSize(30)}]}>
          <Rtext style={{paddingLeft:10}} fontWeight='700'>Card</Rtext>
          <View style={{flexDirection:'row', marginTop:10,paddingLeft:10}}>
            <Image source={require('../../../assets/images/Card.png')} style={{height:normalizeSize(60), width:normalizeSize(100),resizeMode:"contain"}}/>
            <Rtext fontWeight='400' fontSize={12} style={{paddingTop:25, paddingLeft:10,color:'#7C7B7B'}}>Add Credit, Debit & ATM Cards</Rtext>
            <View style={{marginHorizontal:25,paddingTop:25}}>
            <Image source={require('../../../assets/icons/arrow_right.png')} style={{ height:15,width:15,resizeMode:'contain',color:'#A7A7A7'}} />
            </View>
          </View>
        </View>
        {/*End of Card && Start of NetBanking*/}
        <View style={[Styles.card,{marginTop:10}]}>
          <Rtext style={{paddingLeft:10}} fontWeight='700'>Net Banking</Rtext>
          <View style={{flexDirection:'row', marginTop:10,paddingLeft:10}}>
            <Image source={require('../../../assets/images/NetBanking.png')} style={{height:normalizeSize(60), width:normalizeSize(100),resizeMode:"contain"}}/>
            <Rtext fontWeight='400' fontSize={12} style={{paddingTop:25, paddingLeft:10,color:'#7C7B7B'}}>Netbanking</Rtext>
            <View style={{marginHorizontal:140,paddingTop:25}}>
            <Image source={require('../../../assets/icons/arrow_right.png')} style={{ height:15,width:15,resizeMode:'contain',color:'#A7A7A7'}} />
            </View>
          </View>
        </View>
        {/*End NetBanking*/}
      </View> 
    </View>
  )
}

const Styles = StyleSheet.create({
  card:{
    width:deviceWidth,
    backgroundColor:'white',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
})