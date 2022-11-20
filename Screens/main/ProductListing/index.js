import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'
import { CategoryList } from '../../../store/static'
import LeftCatrgoryList from './LeftCatrgoryList'
import { ThemeDarkGreen } from '../../../config/Colors'
import AddToCart from '../../Popups/AddToCart'

const rightHalf = SCREEN_WIDTH - normalizeSize(100)

const ProductListing = () => {
  return (
    <View style={GS.container}>
      <View style={GS.row}>
        <View style={{ height: SCREEN_HEIGHT, width: normalizeSize(75), alignItems: "center", elevation: 2, backgroundColor: "#fff" }}>
          <LeftCatrgoryList />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row", marginHorizontal:4 }}>

            <FlatList
              data={[1,2,3,4,5,6,7,8,9,10]}
              numColumns={3}
              renderItem={({index})=>(
                <View style={{ backgroundColor: "#fff", borderColor:ThemeDarkGreen,borderWidth:1,elevation: 2, width: ((SCREEN_WIDTH - normalizeSize(75)) / 3) - 8, minHeight: normalizeSize(130), margin:4 }}>
              <Image source={require("../../../assets/images/category1.png")} style={{ height: 80, width: "100%", resizeMode: "stretch", }} />
              <View style={{ borderWidth: 3, borderColor: "#314602", borderTopColor: "#fff", flex:1, paddingHorizontal: 4 }}>
                <View style={[GS.container]}>
                <Rtext fontSize={8}>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,</Rtext>
                </View>
                <View style={[GS.row_Between, { padding: 4 }]}>
                  <Rtext fontSize={10} style={{ color: "#000" }} numberOfLines={1}>20$</Rtext>
                  {/* <Rtext fontSize={10} style={{ color:"#fff"}} numberOfLines={1}>20$</Rtext> */}
                  <View style={[GS.btn, GS.center, { padding:4 }]} >
                    <Rtext style={{ color: "#fff" }} fontSize={10}>Add</Rtext>
                  </View>

                </View>
              </View>
            </View>
              )}
            />

          </View>
        </View>
      </View>
      <AddToCart />
    </View>
  )
}

export default ProductListing

const styles = StyleSheet.create({})

