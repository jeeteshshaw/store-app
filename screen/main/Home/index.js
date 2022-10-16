import {  FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { normalizeSize, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../utility'
import { CategoryList, HomePageBannersList } from '../../../store/static'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { ScrollView } from 'react-native-virtualized-view'
import { ThemeLightGreen } from '../../../config/Colors'
import { Rtext } from '../../../Components/Rtext'

const Home = () => {
  return (
    <ScrollView>
        <View  style={{width:"100%", height:normalizeSize(SCREEN_HEIGHT/3)}}>
            <Image source={require("../../../assets/images/home_banner.png")} style={{height:normalizeSize(SCREEN_HEIGHT/3), width:SCREEN_WIDTH, resizeMode:"stretch"}} />
        </View>
        <View style={{width:"100%", backgroundColor:ThemeLightGreen, padding:8, paddingVertical:16}}>
        <FlatList
            data={HomePageBannersList}
            scrollEnabled={false}
            nestedScrollEnabled
            listKey={"HomePageBannersList"}
            numColumns={2}
            keyExtractor={(item, index)=> index+"asdasdasd"}
            renderItem={({item})=>(
                <View style={[{width:"50%", height:normalizeSize(140), padding:8   }, GS.center]}>
                    <Image source={item.image} style={{width:"100%", height:"100%", resizeMode:"stretch"}} />
                </View>
            )}
        />
        </View>

        <ImageBackground  style={{width:SCREEN_WIDTH, backgroundColor:ThemeLightGreen, padding:8, paddingVertical:16}} source={require("../../../assets/images/linear_gradient_light_green_bg.png")} resizeMode="cover">

        <FlatList
            data={CategoryList}
            scrollEnabled={false}
            nestedScrollEnabled
            keyExtractor={(item, index)=> index+"aasdasd"}
            numColumns={5}
            listKey={"CategoryList"}

            renderItem={({item})=>(
                <View style={[{width:"20%", height:normalizeSize(90), padding:8   }, GS.center]}>
                    <Image source={item.image} style={{width:"100%", height:normalizeSize(45), resizeMode:"stretch"}} />
                    <Rtext fontSize={11} style={{height : 45}} numberOfLines={3}>{item.title}</Rtext>
                </View>
            )}
        />
        </ImageBackground >
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})