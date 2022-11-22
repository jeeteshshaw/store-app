import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'
import { CategoryList } from '../../../store/static'
import LeftCatrgoryList from './LeftCatrgoryList'
import { ThemeDarkGreen } from '../../../config/Colors'
import AddToCart from '../../Popups/AddToCart'
import { useNavigation } from '@react-navigation/native'
import ProductCard1 from '../../../Components/ProductCard1'

const rightHalf = SCREEN_WIDTH - normalizeSize(100)

const ProductListing = () => {
  const navigation = useNavigation()
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
              // ItemSeparatorComponent={()=><View style={{height:16}} />}
              renderItem={({index})=>(

                <View style={{ width: ((SCREEN_WIDTH - normalizeSize(75)) / 3) - 8, height: normalizeSize(130),margin:4  }}>
                <ProductCard1 />
                </View>
            
                )}
            />

          </View>
        </View>
      </View>
      {/* <AddToCart /> */}
    </View>
  )
}

export default ProductListing

const styles = StyleSheet.create({})

