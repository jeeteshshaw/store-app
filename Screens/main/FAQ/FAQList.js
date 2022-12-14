import { View,Dimensions,StyleSheet} from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext';
import { TouchableRipple } from 'react-native-paper';

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const FlatList_FAQ =(props) =>{
    return(
        <View style={[styles.card,{flexDirection:'row', justifyContent:'flex-start',alignItems:'center', height:50}]}>
          <View style={{ paddingLeft:20, alignSelf:'center', width:deviceWidth-50}}>
            <Rtext fontWeight='700' fontSize={15} style={{color:'#314602'}}>{props.text}</Rtext>
          </View>
            <TouchableRipple style={{alignContent:'flex-end', alignSelf:'center'}}>
                <Image source={require('../../../assets/icons/Down_Dark.png')} style={{resizeMode:'contain', height:20,width:20, tintColor:"#314602"}}/>
            </TouchableRipple>
    </View>
    );
}

export default FlatList_FAQ
const styles = StyleSheet.create({
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