import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH, showFlashMessage } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'
import { CategoryList } from '../../../store/static'
import LeftCatrgoryList from './LeftCatrgoryList'
import { ThemeDarkGreen } from '../../../config/Colors'
import AddToCart from '../../Popups/AddToCart'
import { useNavigation } from '@react-navigation/native'
import ProductCard1 from '../../../Components/ProductCard1'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../../../store/common'
import { Request } from '../../../config/Request'

const rightHalf = SCREEN_WIDTH - normalizeSize(100)

const ProductListing = (props) => {
  // https://apidevelopment.hari-bhari.com/product/find/
  const navigation = useNavigation()
  const cartOptionShow = useSelector(state=> state.common.cart)
  const dispatch = useDispatch()
  const [ProductList, setProductList] = useState([])
  const getProductsData = async () => {
      try {
          const products = await Request("get","/product/find/"+props.route.params.item._id);
          console.log({products:products.data.info});
          setProductList(products.data.info);
      } catch (error) {
        console.log(error.response.data.errors.error);
          showFlashMessage(error.response.data.errors.error,"", "danger")
      }
  }


  useEffect(() => {
    getProductsData()

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
              data={ProductList}
              numColumns={3}
              ListFooterComponent={()=><View style={{height:normalizeSize(50)}} />}
              renderItem={({index, item})=>(

                <View style={{ width: ((SCREEN_WIDTH - normalizeSize(75)) / 3) - 8, height: normalizeSize(130),margin:4  }}>
                <ProductCard1 item={item} />
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

