import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../../store/common'

const rightHalf = SCREEN_WIDTH - normalizeSize(100)

const ProductListing = () => {
  const navigation = useNavigation()
  const cartOptionShow = useSelector(state=> state.common.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCart(false));

  }, [])
  
  return (
    <View style={GS.container}>
      <View style={GS.row}>
        <View style={{ height: SCREEN_HEIGHT-StatusBar.currentHeight, width: normalizeSize(75), alignItems: "center", elevation: 2, backgroundColor: "#fff" }}>
          <LeftCatrgoryList />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row", paddingHorizontal:4 }}>
            
            <FlatList
              data={[1,2,3,4,5,6,7,8,9,10,12,12,18]}
              numColumns={3}
              ListFooterComponent={()=><View style={{height:normalizeSize(50)}} />}
              renderItem={({index})=>(

                <View style={{ width: ((SCREEN_WIDTH - normalizeSize(75)) / 3) - 8, height: normalizeSize(130),margin:4  }}>
                <ProductCard1 />
                </View>
            
                )}
            />

          </View>
        </View>
      </View>
      {
        cartOptionShow && (

          <AddToCart />
        )
      }
    </View>
  )
}

export default ProductListing

const styles = StyleSheet.create({})

