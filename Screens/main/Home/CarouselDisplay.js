import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import { CategoryList } from '../../../store/static'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { ThemeLightGreen } from '../../../config/Colors'

const CarouselDisplay = () => {
    return (
        <View>
            <View style={[GS.row_Between, { marginVertical: 8 }]}>
                <View style={[GS.btn, GS.center]} >
                    <Rtext style={{ color: "#fff" }} fontSize={10}>Vegetables & Fruits</Rtext>
                </View>
                <View style={[GS.btn, GS.center]} >
                    <Rtext style={{ color: "#fff" }} fontSize={10}>See More</Rtext>
                </View>
            </View>
            <View style={[GS.row, { marginTop: 10 }]}>

                <FlatList
                    data={CategoryList}
                    scrollEnabled={true}
                    nestedScrollEnabled
                    keyExtractor={(item, index) => index + "aasdasd"}
                    // numColumns={5}
                    horizontal

                    pagingEnabled
                    listKey={"CategoryList"}
                    ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                    renderItem={({ item, index }) => (
                        <RenderItemCard item={item} index={index} />

                    )}
                />
                <View style={[styles.rightArrowContainer, GS.center]} >
                    <Image source={require("../../../assets/icons/right-filled1.png")} style={[styles.rightArrowIcon]} />
                </View>
            </View>
        </View>
    )
}

export default CarouselDisplay

const RenderItemCard = React.memo(({ item, index }) => (
    <View style={[styles.cardContainer, GS.center]}>
        <ImageBackground source={require('../../../assets/images/slider_img1.png')} style={styles.cardContainerImage} resizeMode="stretch" >
            <ImageBackground source={require('../../../assets/images/back_and_white_linear.png')} style={GS.container} resizeMode="stretch">
                <View style={{ flex: 1, justifyContent: "flex-end", paddingVertical: 8 }}>

                    <Rtext fontSize={7} style={{ color: "#fff" }} numberOfLines={3}>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet,</Rtext>
                    <View style={[GS.row_Between, { padding: 4 }]}>
                        <Rtext fontSize={10} style={{ color: "#fff" }} numberOfLines={1}>20$</Rtext>
                        {/* <Rtext fontSize={10} style={{ color:"#fff"}} numberOfLines={1}>20$</Rtext> */}
                        <View style={[GS.btn, GS.center, { marginLeft: 4, padding:3 }]} >
                            <Rtext style={{ color: "#fff" }} fontSize={10}>Add</Rtext>
                        </View>

                    </View>
                </View>

            </ImageBackground>
        </ImageBackground>
    </View>
))

const styles = StyleSheet.create({
    rightArrowContainer:{
        backgroundColor: ThemeLightGreen, 
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
        width: (SCREEN_WIDTH / 4) - 16, 
        height: normalizeSize(85) 
    },
    cardContainerImage:{
        width: "100%", 
        height: normalizeSize(85) 
    }
})