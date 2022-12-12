import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import { CategoryList,List } from '../../../store/static'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { ThemeLightGreen } from '../../../config/Colors'



const Carousel = () => {
    return (
        <View style={{backgroundColor:'#9DE60163'}}>
            <View style={[GS.row, { marginTop: 10 }]}>
            <Image source={require("../../../assets/images/Left_Arrow_Cart.png")} style={[styles.rightArrowIcon,{marginRight:5}]} />
                <FlatList
                    data={List}
                    scrollEnabled={true}
                    nestedScrollEnabled
                    keyExtractor={(item, index) => index + "aasdasd"}
                    // numColumns={5}
                    horizontal

                    pagingEnabled
                    listKey={"List"}
                    ItemSeparatorComponent={() => <View style={{ width: 6 }} />}
                    renderItem={({ item, index }) => (
                        <RenderItemCard item={item} index={index} />

                    )}
                />
                <View style={[styles.rightArrowContainer, GS.center]} >
                    <Image source={require("../../../assets/images/Right_Arrow_Cart.png")} style={[styles.rightArrowIcon]} />
                </View>
            </View>
        </View>
    )
}

export default Carousel

const RenderItemCard = React.memo(({ item, index }) => (
    <View style={[styles.cardContainer, GS.center]}>
        <ImageBackground source={require("../../../assets/images/sample3.png")} style={[styles.cardContainerImage]} resizeMode="stretch" >
            <ImageBackground source={require('../../../assets/images/back_and_white_linear.png')} style={GS.container} resizeMode="stretch">
                <View style={{ flex: 1, justifyContent: "flex-end", paddingVertical: 8 }}>

                    <Rtext fontSize={8} fontWeight='700' style={{ color: "#fff" ,paddingLeft:7}} numberOfLines={3}>{item.text}</Rtext>
                    <View style={[GS.row_Between, { padding: 4 }]}>
                        <Rtext fontSize={10} style={{ color: "#fff",paddingLeft:4 }} numberOfLines={1}>$20</Rtext>
                        <View style={[GS.btn, GS.center, { marginLeft: 4,height:25,justifyContent:'center',paddingTop:10,paddingHorizontal:13,marginRight:10}]} >
                            <Rtext style={{ color: "#fff", height:25 ,alignSelf:'center'}} fontSize={10}>Add</Rtext>
                        </View>

                    </View>
                </View>

            </ImageBackground>
        </ImageBackground>
    </View>
))

const styles = StyleSheet.create({
    rightArrowContainer:{
        // backgroundColor: "#9DE60163", 
        borderRadius: 2, 
        padding: 4, 
        marginLeft: 4 
    },
    rightArrowIcon:{
        width: 9, 
        height: 9, 
        resizeMode: "contain" 
    },
    cardContainer:{
        width: (SCREEN_WIDTH /3) - 16, 
        height: normalizeSize(85),
        marginBottom:10, 
    },
    cardContainerImage:{
        width: "100%", 
        height: normalizeSize(85) 
    }
})