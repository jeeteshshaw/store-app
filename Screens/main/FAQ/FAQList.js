import { View, Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext';
import { TouchableRipple } from 'react-native-paper';
import { useState } from 'react';

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const FlatList_FAQ = (props) => {
  const [DropDown, setDropDown] = useState(false)
  return (
    <View style={styles.card}>
      <View style={[ { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }]}>
        <View style={{  alignSelf: 'center', width: deviceWidth - 50 }}>
          <Rtext fontWeight='700' fontSize={15} style={{ color: '#314602' }}>{props.text}</Rtext>
        </View>
        <TouchableRipple onPress={()=> setDropDown(!DropDown)} style={{ alignContent: 'flex-end', alignSelf: 'center' }}>
          <Image source={require('../../../assets/icons/Down_Dark.png')} style={{ resizeMode: 'contain', height: 20, width: 20, tintColor: "#314602" }} />
        </TouchableRipple>
      </View>
      {
        DropDown && (
            <View style={{padding:16}}>
              <Rtext fontSize={12} fontWeight={"Medium"}>Lorem ipsum dolor sit amet ?</Rtext>
              <Rtext fontWeight='400' style={{color:"#747474"}} fontSize={10}>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</Rtext>
            </View>
        )
      }
    </View>
  );
}

export default FlatList_FAQ
const styles = StyleSheet.create({
  card: {
    padding:16,
    width: deviceWidth,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
})