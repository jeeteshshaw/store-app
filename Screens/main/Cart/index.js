import { StyleSheet, Text, View,Image,Dimensions, ScrollView} from 'react-native'
import React,{useState} from 'react'
import { Rtext } from '../../../Components/Rtext'
import GCButton from '../../../Components/GCButton'
import Carousel from './Carousel';
import { TouchableRipple } from 'react-native-paper';
import { normalizeSize } from '../../../utility';
import CompletePayment from '../../Popups/CompletePayment';
import Globalstyles from '../../../Styles/GlobalStyle';
import { useEffect } from 'react';

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);




function Cart(props){
  const [show, setShow] = useState(false);
   const Update_State =(props)=>{
    console.log("Reached Update State")
    setTimeout(function(){
      Update();
    },5000);
  }


  const Update =()=>{
    console.log("From Update --------------------------")
    setShow(!show);
    console.log("From Down Update -------",show)
  }
  

  return (
    <ScrollView scrollEnabled={true}   style={{flex:1, backgroundColor:'#fff'}}>
      {/* Details Part */}
      <View style={{ paddingLeft:10, marginTop:10}}>
        <Rtext fontWeight='700' fontSize={15} style={{paddingTop:5}}>My Cart</Rtext>
        <View style={{marginTop:10}}>
            <Rtext fontWeight='400' fontSize={10} style={styles.Rcolor}>2 items </Rtext>
            <Rtext fontWeight='400' fontSize={10} style={styles.Rcolor}>Order ID- OID54211874 </Rtext>
            <Rtext fontWeight='700' fontSize={12} >Delivery in 12 minutes</Rtext>
        </View>
      </View>
      {/* End of Details && Start of Display */}
      <View>
        <View style={{flexDirection:'row', marginTop:25, paddingLeft:15}}>
          <Image source={require('../../../assets/images/Cart_1.png')} style={{resizeMode:"contain",height:normalizeSize(100),width:normalizeSize(80)}}/>
          <View style={{marginTop:15, marginLeft:15}}>            
            <Rtext fontWeight='400' fontSize={12} style={[styles.Rcolor,{width:normalizeSize(deviceWidth-150)}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elite</Rtext>
            <View style={{flexDirection:'row', marginTop:5}}>
              <Rtext style={{marginTop:6}}> ₹80</Rtext>
              <GCButton style={{height:normalizeSize(30), width:normalizeSize(70),borderRadius:4,marginHorizontal:20}} />
            </View>
          </View>
        </View>
        {/* Element 2 */}
        <View style={{flexDirection:'row', paddingLeft:15}}>
          <Image source={require('../../../assets/images/Cart_2.png')} style={{resizeMode:"contain",height:normalizeSize(100),width:normalizeSize(80)}}/>
          <View style={{marginTop:15, marginLeft:15}}>            
            <Rtext fontWeight='400' fontSize={12} style={[styles.Rcolor,{width:deviceWidth-100}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elite</Rtext>
            <View style={{flexDirection:'row', marginTop:8}}>
              <Rtext style={{marginTop:6}}> ₹700</Rtext>
              <GCButton style={{height:normalizeSize(30), width:normalizeSize(70),borderRadius:4, marginHorizontal:20}} textStyle={{fontSize:13}} data="Place Order"/>
            </View>
          </View>
        </View>
        {/* End of Element 2  */}
      </View>
      {/* End of Display && Start of Checkouts */}
      <View>
        <Rtext fontWeight='700' style={{paddingLeft:10, paddingTop:30, paddingBottom:20}}>Before you checkout</Rtext>
         {/* Starting Carosel */}
          <Carousel/>
         {/* Endinging Carosel */}
        <Rtext fontWeight='700' style={{marginVertical:20, paddingLeft:10}}>Bill details</Rtext>
      </View>
        <View style={Globalstyles.row_Between}>
              <View style={Globalstyles.row}>
                    <Rtext fontSize={12} style={{paddingLeft:10}}>Lorem Ipsum MRP</Rtext>
              </View>
              <View style={{paddingRight:normalizeSize(67)}}>
                    <Rtext fontSize={12}>₹85</Rtext>
              </View>
        </View>
        <View style={[Globalstyles.row_Between,styles.Rcolor]}>
              <View style={Globalstyles.row}>
                    <Rtext fontSize={12} style={{paddingLeft:10}}>Lorem Ipsum MRP</Rtext>
              </View>
              <View style={{paddingRight:normalizeSize(60)}}>
                    <Rtext fontSize={12}>₹700</Rtext>
              </View>
        </View>
        <View style={[Globalstyles.row_Between,styles.Rcolor]}>
              <View style={Globalstyles.row}>
                    <Rtext fontSize={12} style={{paddingLeft:10}}>Product Discount</Rtext>
              </View>
              <View style={{paddingRight:normalizeSize(67)}}>
                    <Rtext fontSize={12}>- ₹15</Rtext>
              </View>
        </View>
        <View style={[Globalstyles.row_Between,styles.Rcolor]}>
              <View style={Globalstyles.row}>
                    <Rtext fontSize={12} style={{paddingLeft:10}}>Delivery charges</Rtext>
              </View>
              <View style={{paddingRight:normalizeSize(40)}}>
                    <Rtext fontSize={12}>₹15 FREE</Rtext>
              </View>
        </View>
        <View style={[Globalstyles.row_Between,styles.Rcolor]}>
              <View style={Globalstyles.row}>
                    <Rtext fontSize={12} style={{paddingLeft:10}}>Grand Total</Rtext>
              </View>
              <View style={{paddingRight:normalizeSize(60)}}>
                    <Rtext fontSize={12}>₹765</Rtext>
              </View>
        </View>
      {/* End Value start */}
      <View>
        <View style={[styles.Proceed,styles.ROW]}>
          <View>
            <Rtext style={{color:'white'}}>2 items :  <Text style={{color:'white',textDecorationLine:'line-through'}}>₹780</Text>    ₹765</Rtext>
          </View>
          <TouchableRipple onPress={()=>props.navigation.navigate('Payment',{amount:800,showModal:Update},)}>
            <View style={[styles.ROW, {alignItems:'center'}]}>
            <Rtext style={{color:'#fff'}}>Proceed</Rtext>
            <TouchableRipple  style={{paddingLeft:14}}>
            <Image source={require('../../../assets/images/white_right_arrow.png')} style={{resizeMode:'contain',height:12,width:12}}/>
            </TouchableRipple>
            </View>
        </TouchableRipple>
      </View>
      <View style={{justifyContent:'center', marginBottom:20}}>
        <Rtext fontSize={12} style={{ alignSelf:'center', color:'#77A615'}}>Hooray! You saved ₹15 on delivery charge and</Rtext>
        <Rtext fontSize={12} style={{alignSelf:'center',color:'#77A615'}}>Product discount  ₹15</Rtext>
      </View>
      </View>
      {/* End value end */}
      {show && <CompletePayment modalactivity={Update_State} modalVisiblity={show} text="Your Order is Confirmed" />}
      {/* <CompletePayment modalactivity={Update_State} modalVisiblity={first} text="Your Order is Confirmed" /> */}
    </ScrollView>
  )
}

export default Cart;

const styles = StyleSheet.create({
  ROW:{flexDirection:'row'},
  Rcolor:{color:'#504F4F'},
  Proceed:{
    justifyContent:'space-around',
    alignItems:'center',
    height:normalizeSize(40),
    width:normalizeSize(250),
    backgroundColor:'#77A615',
    marginHorizontal:40,
    marginTop:30,
    marginBottom:10,
    borderRadius:10,
  },
  modalView: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    
    shadowColor: "#000",
    height:'40%',
    width:'90%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})