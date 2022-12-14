import {View, FlatList } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import { FAQ_Data } from '../../../store/static';
import FlatList_FAQ from './FAQList';

const FAQ = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Rtext fontSize={18} fontWeight='700' style={{marginVertical:30, paddingLeft:10}}>Frequently Asked Questions</Rtext>
      <FlatList
                    data={FAQ_Data}
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

