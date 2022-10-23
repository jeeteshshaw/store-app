import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeSize } from '../../../utility'
import { ThemeLightGreen } from '../../../config/Colors'
import { HomePageBannersList } from '../../../store/static'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'

const OffersBanner = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={HomePageBannersList}
                scrollEnabled={false}
                nestedScrollEnabled
                listKey={"HomePageBannersList"}
                numColumns={2}
                keyExtractor={(item, index) => index + "asdasdasd"}
                renderItem={({ item, index }) => (
                   <RenderItemCard item={item} index={index} />
                )}
            />
        </View>
    )
}

export default OffersBanner



const RenderItemCard = React.memo(({item, index})=>(

    <View style={[styles.cardContainer, GS.center]}>
        <Image source={item.image} style={styles.cardImg} />
    </View>
))






const styles = StyleSheet.create({
    container:{
        width: "100%", 
        backgroundColor: ThemeLightGreen, 
        padding: 8, 
        paddingVertical: 16 
    },
    cardContainer:{
        width: "50%",
        height: normalizeSize(140),padding: 8 
    },
    cardImg:{
        width: "100%", 
        height: "100%", 
        resizeMode: "stretch"
    }
})
