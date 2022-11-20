import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { CategoryList } from '../../../store/static'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import { Rtext } from '../../../Components/Rtext'
import { ThemeLightGreen } from '../../../config/Colors'
import Styles from '../../../Styles'
import GS from '../../../Styles/GlobalStyle'
import { useNavigation } from '@react-navigation/native'

const CategoryListing = () => {
    const navigation = useNavigation();
    const onSelectCategory = useCallback(
      () => {
        return navigation.navigate("ProductListing")
      },
      [],
    )
    
    return (
        <ImageBackground style={styles.container} source={require("../../../assets/images/linear_gradient_light_green_bg.png")} resizeMode="cover">

            <FlatList
                data={CategoryList}
                scrollEnabled={false}
                nestedScrollEnabled
                keyExtractor={(item, index) => index + "aasdasd"}
                numColumns={5}
                listKey={"CategoryList"}

                renderItem={({ item, index }) => (
                    <RenderItemCard item={item} index={index} onPress={onSelectCategory} />
                )}
            />
        </ImageBackground >
    )
}

export default CategoryListing;

const RenderItemCard = React.memo(({ item, index,onPress }) => (

    <TouchableOpacity onPress={onPress} style={[styles.cardContainer, GS.center]}>
        <Image source={item.image} style={styles.cardImg} />
        <Rtext fontSize={11} style={styles.cardText} numberOfLines={3}>{item.title}</Rtext>
    </TouchableOpacity>
));


const styles = StyleSheet.create({
    container:{
        width: SCREEN_WIDTH, 
        backgroundColor: ThemeLightGreen, 
        padding: 8, 
        paddingVertical: 16 
    },
    cardText: {
        height: 45
    },
    cardContainer:{
        width: "20%", 
        height: normalizeSize(90), 
        padding: 8
    },
    cardImg: {
        width: "100%",
        height: normalizeSize(45),
        resizeMode: "stretch"
    }
})