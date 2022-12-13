import { Modal, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext';
import { normalizeSize } from '../../../utility';
import { TouchableRipple } from 'react-native-paper';

function CompletePayment(props){
    return(
      <View>
          <Modal animationType="slide" transparent={true} visible={false}>
            <View style={{flex: 1,backgroundColor:'#000000aa',justifyContent:'center',alignItems:'center'}}>
              <View style={styles.modalView}>
                <TouchableRipple style={styles.button}onPress={()=>(console.log("Tick is clicked !!"))}>
                  <Image source={require('../../../assets/images/complete_tick.png')} style={{height:normalizeSize(55), width:normalizeSize(55), resizeMode:'contain'}}/>
                </TouchableRipple>
                  <View style={{justifyContent:'center', marginTop:normalizeSize(20)}}>
                    <Rtext fontSize={18} fontWeight="700" style={styles.text}>Your order has been confirmed</Rtext>
                    <Rtext fontSize={12} fontWeight="700" style={[{color:'black',alignSelf:'center',marginTop:normalizeSize(30)}]}>Thank You for purchase !</Rtext>
                    <Rtext fontSize={11} style={[{color:'#6A6868',alignSelf:'center',}]}>Your Order ID is - OID54211874</Rtext>
                    <TouchableRipple onPress={()=>(console.log("Track Order"))}>
                    <Rtext fontSize={12} fontWeight="700" style={styles.tracking}>Track your order</Rtext>
                    </TouchableRipple>
                    <Rtext fontSize={12} style={styles.text}>Hooray! You saved ₹15 on delivery charge and</Rtext>
                    <Rtext fontSize={12} style={styles.text}>Product discount  ₹15</Rtext>
                  </View>
              </View>
            </View>
          </Modal>
        </View>
    );
    }
export default CompletePayment;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 22,
      backgroundColor:'tomato'
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
    },
    button:{paddingTop:normalizeSize(40),paddingLeft:normalizeSize(120)},
    text:{color:"#648D0B", alignSelf:'center'},
    tracking:{color:"#1B23E7", alignSelf:'center', marginVertical:10},
  })