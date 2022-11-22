import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { ScrollView } from 'react-native-virtualized-view'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'
import ProductCard1 from '../../../Components/ProductCard1'
import Bottom from './Bottom'
import { TouchableRipple } from 'react-native-paper'

const ProductDetails = () => {
  return (
    <View style={[GS.container,]}>
      <ScrollView>
        <View style={[Styles.globalContainer, { paddingHorizontal: 0 }]}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={(i9tem, index) => "adsdsadasdas" + index + "asdas"}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: normalizeSize(10) }} />}
            ListHeaderComponent={() => <View style={{ width: normalizeSize(16) }} />}
            ListFooterComponent={() => <View style={{ width: normalizeSize(16) }} />}
            renderItem={() => (
              <View>
                <Image source={require("../../../assets/images/detailSample1.png")} style={{ width: normalizeSize(78), height: normalizeSize(92), resizeMode: "stretch" }} />
              </View>
            )}
          />
          <View style={{ padding: 20 }}>
            <Rtext fontWeight='700' fontSize={16}>Coffee Powder 25g</Rtext>
            <Rtext fontWeight='400' fontSize={12}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Rtext>
            <View style={[GS.row,{marginTop:10}]}>
              <Rtext fontSize={13}> <Text style={{ textDecorationLine: "line-through", color: "#8C8C8C" }}>₹500</Text>  ₹250</Rtext>
              <TouchableRipple style={{backgroundColor:"#1B23E7", borderRadius:4, marginLeft:16}}>
                <Rtext fontSize={11} style={{margin:4, color:"#fff"}} fontWeight={"700"}>20% OFF</Rtext>
              </TouchableRipple>
            </View>
            <View style={[GS.btn, GS.center, { width: normalizeSize(50), height: normalizeSize(25), padding: 0, borderRadius: 6, marginTop: 10 }]} >
              <Rtext style={{ color: "#fff" }} fontSize={14}>Add</Rtext>
            </View>
            <View style={{ padding: 10, marginTop: 20 }}>
              <Rtext fontWeight='700' fontSize={16}>Product Details</Rtext>
              <Rtext fontWeight='700' fontSize={16} style={{ marginTop: "10%" }}>Disclaimer</Rtext>
              <Rtext fontSize={11} style={{ marginTop: 4, color: "#7C7B7B" }}>Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</Rtext>
              <Rtext fontWeight='700' fontSize={16} style={{ marginTop: "10%" }}>Shelf Life</Rtext>
              <Rtext fontSize={11} style={{ marginTop: 4, color: "#7C7B7B" }}>18 months</Rtext>
              <Rtext fontWeight='700' fontSize={16} style={{ marginTop: "10%" }}>Customer Care Details</Rtext>
              <Rtext fontSize={11} style={{ marginTop: 4, color: "#7C7B7B" }}>{`Email: company@gmail.com
Customer Care Number: 18**-****-*88`}</Rtext>
              <Rtext fontWeight='700' fontSize={16} style={{ marginTop: "10%" }}>Product Class</Rtext>
              <Rtext fontSize={11} style={{ marginTop: 4, color: "#7C7B7B" }}>Packaged Goods</Rtext>
              <Rtext fontWeight='700' fontSize={16} style={{ marginTop: "10%" }}>Expiry Date</Rtext>
              <Rtext fontSize={11} style={{ marginTop: 4, color: "#7C7B7B" }}>25-05-2024</Rtext>

            </View>
          </View>
          <Bottom />
        </View>
      </ScrollView>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({})