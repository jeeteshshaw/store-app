import { StyleSheet, Text, View,Image,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import GCButton from '../../../Components/GCButton'
import Carousel from './Carousel';
import { TouchableRipple } from 'react-native-paper';
import { normalizeSize } from '../../../utility';

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const Cart = (props) => {
  return (
    < ScrollView scrollEnabled={true}   style={{flex:1, backgroundColor:'white'}}>
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
          <Image source={require('../../../assets/images/Cart_1.png')} style={{resizeMode:"contain",height:100,width:80}}/>
          <View style={{marginTop:15, marginLeft:15}}>            
            <Rtext fontWeight='400' fontSize={12} style={[styles.Rcolor,{width:deviceWidth-100}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elite</Rtext>
            <View style={{flexDirection:'row', marginTop:5}}>
              <Rtext style={{marginHorizontal:20}}> ₹80</Rtext>
              <GCButton style={{height:30, width:70,borderRadius:4}} />
            </View>
          </View>
        </View>
        {/* Element 2 */}
        <View style={{flexDirection:'row', paddingLeft:15}}>
          <Image source={require('../../../assets/images/Cart_2.png')} style={{resizeMode:"contain",height:100,width:80}}/>
          <View style={{marginTop:15, marginLeft:15}}>            
            <Rtext fontWeight='400' fontSize={12} style={[styles.Rcolor,{width:deviceWidth-100}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elite</Rtext>
            <View style={{flexDirection:'row', marginTop:8}}>
              <Rtext style={{marginHorizontal:20}}> ₹700</Rtext>
              <GCButton style={{height:30, width:70,borderRadius:4}} textStyle={{fontSize:13}} data="Place Order"/>
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
      {/* End of Checkouts */}
      <View style={{paddingLeft:10 }}>
        <View style={[styles.ROW,{marginVertical:4, justifyContent:'space-between'}]}>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-start'}]}>Lorem Ipsum MRP</Rtext>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-end', paddingRight:80}]}>₹85</Rtext>
        </View>
        <View style={[styles.ROW,{marginVertical:4,justifyContent:'space-between'}]}>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-start'}]}>Lorem Ipsum MRP</Rtext>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-end', paddingRight:70}]}>₹700</Rtext>
        </View>
        <View style={[styles.ROW,{marginVertical:4, justifyContent:'space-between'}]}>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-start'}]}>Product Discount</Rtext>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-end', paddingRight:80}]}>- ₹15</Rtext>
        </View>
        <View style={[styles.ROW,{marginVertical:4, justifyContent:'space-between'}]}>
          <Rtext fontSize={12} style={[styles.Rcolor, {alignSelf:'flex-start'}]}>Delivery charge  </Rtext>
          <Rtext fontSize={12} style={[styles.Rcolor,{ alignSelf:'flex-end', marginRight:45}]}>₹15 FREE</Rtext>
        </View>
        <View style={[styles.ROW,{marginVertical:2, justifyContent:'space-between'}]}>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-start'}]}>Grand Total</Rtext>
          <Rtext fontSize={12} style={[styles.Rcolor,{alignSelf:'flex-end', paddingRight:70}]}>₹765</Rtext>
        </View>
      </View>
      {/* End Value start */}
      <View>
        <View style={[styles.Proceed,styles.ROW]}>
          <View>
            <Rtext style={{color:'white'}}>2 items :  <Text style={{color:'white',textDecorationLine:'line-through'}}>₹780</Text>    ₹765</Rtext>
          </View>
          <TouchableRipple>
            <View style={[styles.ROW, {alignItems:'center'}]}>
            <Rtext style={{color:'white'}}>Proceed</Rtext>
            <View style={{paddingLeft:14}}>
            <Image source={require('../../../assets/images/white_right_arrow.png')} style={{resizeMode:'contain',height:12,width:12}}/>
            </View>
            </View>
        </TouchableRipple>
      </View>
      <View style={{justifyContent:'center'}}>
        <Rtext fontSize={12} style={{ alignSelf:'center', color:'#77A615'}}>Hooray! You saved ₹15 on delivery charge and</Rtext>
        <Rtext fontSize={12} style={{alignSelf:'center',color:'#77A615'}}>Product discount  ₹15</Rtext>
      </View>
      </View>
      {/* End value end */}
    </ScrollView>
  )
}

export default Cart

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
  }
})