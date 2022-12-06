import React, { useState } from 'react'
import { Dimensions, FlatList, Image, Modal, TextInput, TouchableOpacity, View } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useSelector } from 'react-redux'
import { Rtext } from '../../../Components/Rtext'
// import { Rtext } from '../../components' 
// import { firebaseAnalyticsDataEntry } from '../../Services/Analytics'
// import { request } from '../../Services/common'
// import { RootState } from '../../store'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { normalizeSize, SCREEN_WIDTH } from '../../../utility'
import Globalstyles from '../../../Styles/GlobalStyle'

const Search = (props) => {
    const [SearchText, setSearchText] = useState("")

    const [ProductAutoCompleteData, setProductAutoCompleteData] = useState([])

    const SearchTextHandler = (e) => setSearchText(e);

    const setProductAutoCompleteDataHandler = (data) => {
        setProductAutoCompleteData(data)
    }



    const SelectOptionHandler = (text) => {
        SearchTextHandler(text)
        // SearchHandler(text)
    }
    return (
        <View style={{ flex: 1 }}>
            <View>
                <View
                    key={'cvxcv'}
                    style={{
                        backgroundColor: '#fff',
                        padding: 4,
                        flexDirection: 'row',
                        alignItems: 'center',
                        elevation: 3,
                        shadowColor: '#470000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.2
                    }}>
                    {/* <Rtext
              style={{
                marginLeft: 15,
                width: width - 60,
                padding: 10,
                color: '#f1f1f1',
              }}>
              Search medicine/health products
            </Rtext> */}
                    <TextInput style={{
                        marginLeft: 15,
                        width: SCREEN_WIDTH - 60,
                        padding: 10,
                        color: '#000',
                    }}
                        autoFocus={true}
                        onKeyPress={() => AutoCompleteHandler(SearchText)}
                        returnKeyType="search"
                        onSubmitEditing={() => SearchHandler(SearchText)}
                        onChangeText={SearchTextHandler}
                        placeholder="Search products"
                        placeholderTextColor="#747474"
                    />
                    <TouchableOpacity
                        onPress={() => SearchHandler(SearchText)}
                    >
                        <MCI name="magnify" size={24} color={"#9DE601"} />
                        {/* <Image source={require("../../assets/icons/down-filled1.png")} style={{ width: 6, height: 6, resizeMode: "contain" }} /> */}
                    </TouchableOpacity>
                </View>
                <View>
                    {
                        SearchText.length < 3 || ProductAutoCompleteData.length === 0
                            ?
                            (<FlatList
                                data={["Blazee", "Jzen", "Senpai"]}
                                renderItem={({ item, index }) => {
                                    return (
                                        <TouchableOpacity onPress={() => SelectOptionHandler(item.text)} style={{ marginHorizontal: 16, padding: 10, borderBottomWidth: 0.3, borderBottomColor: "rgba(0,0,0,0.4)" }}>
                                            <View style={Globalstyles.row}>
                                                <Image source={require("../../../assets/images/detailSample1.png")} style={[{width:normalizeSize(30), height:normalizeSize(30), resizeMode:"contain"}]} />

                                                <Rtext style={{paddingHorizontal:16}}>{item}</Rtext>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }}
                                keyExtractor={(item, index) => index + "jjjghjkbjk"}
                            />)
                            : (
                                (<FlatList
                                    data={["Blazee", "Jzen", "Senpai"]}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => SelectOptionHandler(item.product_name)} style={{ marginHorizontal: 16, padding: 10, borderBottomWidth: 0.3, borderBottomColor: "rgba(0,0,0,0.4)" }}>
                                                <Rtext>{item}</Rtext>
                                            </TouchableOpacity>
                                        )
                                    }}
                                    keyExtractor={(item, index) => index + "ggjhhbvjhghjg"}

                                />)
                            )
                    }
                </View>
            </View>
        </View>
    )
}

export default Search
