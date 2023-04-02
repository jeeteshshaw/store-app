import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { normalizeSize } from '../../../utility'
import { ThemeLightGreen } from '../../../config/Colors'
import { HomePageBannersList } from '../../../store/static'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { Request } from '../../../config/Request'
import { baseUrl } from '../../../config/Constants'

const OffersBanner = () => {
    const [BannerList, setBannerList] = useState([])
    const getBannersData = async () => {
        try {
            const banners = await Request("get","banner");
            console.log({banners:banners.data.info});
            setBannerList(banners.data.info);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getBannersData()
    }, [])
    

    return (
        <View style={styles.container}>
            <FlatList
                data={BannerList}
                scrollEnabled={false}
                nestedScrollEnabled
                listKey={"HomePageBannersList"}
                numColumns={2}
                keyExtractor={(item, index) => item._id}
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
        {console.log(baseUrl+item.banner_image)}
        <Image source={{uri:baseUrl+"/"+item.banner_image}} style={styles.cardImg} />
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
