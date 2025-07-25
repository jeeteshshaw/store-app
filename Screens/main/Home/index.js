import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utility'
import { CategoryList, HomePageBannersList } from '../../../store/static'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { ScrollView } from 'react-native-virtualized-view'
import { ThemeLightGreen } from '../../../config/Colors'
import { Rtext } from '../../../Components/Rtext'
import HeaderBanner from './HeaderBanner'
import OffersBanner from './OffersBanner'
import CategoryListing from './CategoryListing'
import CarouselDisplay from './CarouselDisplay'

const Home = () => {
    // console.log(SCREEN_WIDTH);
    return (
        <ScrollView>
            <HeaderBanner />
            <OffersBanner />

            <CategoryListing />

            <ImageBackground style={{ width: SCREEN_WIDTH }} source={require("../../../assets/images/home_carousel_bg.png")} resizeMode="cover">
                
                <View style={[{ backgroundColor: "rgba(0,0,0,0.75)", width: SCREEN_WIDTH, padding: 8, paddingVertical: 16 }]}>
                    <View>
                        <CarouselDisplay />

                    </View>
                    <View style={{marginTop:16}}>
                        <CarouselDisplay />

                    </View>


                </View>
            </ImageBackground >
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})