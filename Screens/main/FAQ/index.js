import {View, FlatList } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import { FAQ_Data } from '../../../store/static';
import FlatList_FAQ from './FAQList';

const FAQ = () => {
  return (
    <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
      <Rtext fontSize={18} fontWeight='700' style={{marginVertical:30, paddingLeft:10}}>Frequently Asked Questions</Rtext>
      <FlatList
          data={FAQ_Data}
          scrollEnabled={true}
          nestedScrollEnabled
          keyExtractor={(item) => item.key}
          // numColumns={5}
          pagingEnabled
          listKey={"title"}
          ItemSeparatorComponent={() => <View style={{ height:16 }} />}
          ListFooterComponent={() => <View style={{ height:16 }} />}
          ListHeaderComponent={() => <View style={{ height:1 }} />}
          renderItem={({ item, index }) => (
              <FlatList_FAQ img={item.img} index={index} text={item.title} />

          )}
      />
    </View>
  )
}

export default FAQ

