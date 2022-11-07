import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rtext } from '../../../Components/Rtext'
import GS from '../../../Styles/GlobalStyle'
import { CategoryList } from '../../../store/static'
import { normalizeSize } from '../../../utility'

const LeftCatrgoryList = () => {
    return (
        <View style={GS.container}>
            <FlatList
            style={{width:normalizeSize(75)}}
            data={CategoryList}
            renderItem={({item, index})=> <RenderItemCard  item={item} index={index} />}
            keyExtractor={(i9tem, index)=>"adsdas"+index+"asdas"}
            ItemSeparatorComponent={()=><View style={{height:normalizeSize(32)}} />}
            ListHeaderComponent={()=><View style={{height:normalizeSize(32)}} />}
            ListFooterComponent={()=><View style={{height:normalizeSize(32)}} />}

            legacyImplementation={true}
            persistentScrollbar={true}
           />

        </View>
    )
}

export default LeftCatrgoryList

const styles = StyleSheet.create({})


const RenderItemCard = React.memo(({ item, index }) => (

    <View style={{ alignItems: "center" }}>
        <Image source={require("../../../assets/images/category1.png")} style={{ height: normalizeSize(55), width: normalizeSize(55), resizeMode: "stretch", borderRadius: 70,  }} />
        <Rtext style={{ color: "#000", lineHeight: 20 }} fontSize={12}>Vegitable</Rtext>
    </View>
));