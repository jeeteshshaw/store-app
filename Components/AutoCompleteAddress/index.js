import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../utility'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API } from '../../config/Constants';
import GS from '../../Styles/GlobalStyle'
import { Colors } from '../../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const AutoCompleteAddress = (props) => {
  return (
    <View style={styles.container}>
      {/* <Text>AutoCompleteAddress</Text> */}
      <View style={[GS.row, {backgroundColor:"#fff"}]}>
          <Icon name="map-marker" size={24} style={{paddingHorizontal:8}} />


        <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        
        enableHighAccuracyLocation
        enablePoweredByContainer={false}
        textInputProps={{
          value:props.defaultText||"",
          placeholder:"Location...",
          style:{transform:[{translateY:2}]}
          
        }}
        query={{
          key: GOOGLE_API,
          language: 'en',
          types: 'geocode', // default: 'geocode'
          components:"country:in"
        }}
      />
      </View>
    </View>
  )
}

export default React.memo(AutoCompleteAddress)

const styles = StyleSheet.create({
    container:{
        
        minHeight:50
    }
})