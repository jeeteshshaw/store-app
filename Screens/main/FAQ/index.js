import { StyleSheet,View,Image,Dimensions, FlatList } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
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


const Data = [
    {
        key:1,
        title:"General",
        text:" Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
        img:'../../../assets/icons/Down_Dark.png',
    },
    {
        key:2,
        title:"Miscellaneous",
        text:" Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
        img:'../../../assets/icons/Down_Dark.png',
    },
    {
        key:3,
        title:"Delivery",
        text:" Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
        img:'../../../assets/icons/Down_Dark.png'
    },
    {
        key:4,
        title:"Cancellation and return",
        text:" Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
        img:'../../../assets/icons/Up_Dark.png'
    },
    
]

const FAQ = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Rtext fontSize={18} fontWeight='700' style={{marginVertical:30, paddingLeft:10}}>Frequently Asked Questions</Rtext>
      <FlatList
                    data={Data}
                    scrollEnabled={true}
                    nestedScrollEnabled
                    keyExtractor={(item) => item.key}
                    // numColumns={5}
                    pagingEnabled
                    listKey={"title"}
                    ItemSeparatorComponent={() => <View style={{ height:2 }} />}
                    renderItem={({ item, index }) => (
                        <FlatList_FAQ img={item.img} index={index} text={item.title} />

                    )}
                />
    </View>
  )
}

export default FAQ

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