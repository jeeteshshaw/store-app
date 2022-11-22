import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import Styles from '../../../Styles'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import ProductCard1 from '../../../Components/ProductCard1'

const Bottom = () => {
  return (
    <View>
      <View>
            <Rtext style={[Styles.globalContainer, { paddingVertical: 4 }]} fontWeight='Medium'>Similar Products</Rtext>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              keyExtractor={(i9tem, index) => "ads312321das" + index + "asdas"}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListHeaderComponent={() => <View style={{ width: 10 }} />}
              renderItem={() => (
                <View style={{ width: ((SCREEN_WIDTH - normalizeSize(75)) / 3) - 8, height: normalizeSize(90), margin: 4 }}>
                  <Image source={require("../../../assets/images/sample3.png")} style={{ width: "100%", height: "100%", resizeMode: "stretch" }} />
                </View>
              )}
            />
          </View>
          <View>
            <Rtext style={[Styles.globalContainer, { paddingVertical: 4 }]} fontWeight='Medium'>You might also like</Rtext>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(i9tem, index) => "adshjklghjdas" + index + "asdas"}
              horizontal
              ListHeaderComponent={() => <View style={{ width: 10 }} />}
              renderItem={() => (
                <View style={{ width: ((SCREEN_WIDTH - normalizeSize(75)) / 3) - 8, height: normalizeSize(130), margin: 4 }}>
                  <ProductCard1 />
                </View>
              )}
            />
          </View>
    </View>
  )
}

export default Bottom

const styles = StyleSheet.create({})