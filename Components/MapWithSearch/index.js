import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AutoCompleteAddress from '../AutoCompleteAddress'
import MapView, { AnimatedRegion, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { useRef,useState,useEffect,useLayoutEffect } from 'react'
import RevGeolocation from '../../utility/RevGeolocation'
import axios from 'axios'
import { SCREEN_WIDTH } from '../../utility'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_API } from '../../config/Constants'


const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const MapWithSearch = (props) => {
    const {coords, Extra, bottom,mapPadding,polygonConfig} = props
    const map = useRef(null)
    const mapHeight = useRef(0);
    const marker = useRef(null)
    const [LastDropPoint, setLastDropPoint] = useState({
        latitude: coords.latitude,
        longitude:   coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [MarkerLocationDetails, setMarkerLocationDetails] = useState({});
    const [CurrentPos, setCurrentPos] = useState(new AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }));


    
      
    useEffect(() => {
        setTimeout(() => animateMarker(), 3000);
    }
    ,[]);
    const animateMarker = () => {
        const newCoordinate = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        };
        // console.log({newCoordinate});
        map.current?.animateToRegion(newCoordinate,1000*3)
        CurrentPos?.timing(newCoordinate,1000).start();
    };

    let cancelToken;
    const handleSearchChange = async e => {
        

        //Check if there are any previous pending requests
        if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.")
        }

        //Save the cancel token for the current request
        cancelToken = axios.CancelToken.source()
        // console.log(LastDropPoint.latitude,LastDropPoint.longitude);
        try {
        const results = await RevGeolocation(LastDropPoint.latitude,LastDropPoint.longitude,
            { cancelToken: cancelToken.token } //Pass the cancel token to the current request
        )
        // console.log("Results for ",results.results[0])
        setMarkerLocationDetails(results.results[0])
        } catch (error) {
        console.log(error)
        }
    };


    useLayoutEffect(() => {
        
        handleSearchChange();
        
    }, [LastDropPoint]);

  return (
    <View style={{position:"relative", flex:1}} onLayout={(e)=>{
        mapHeight.current = e.nativeEvent.layout.height
      }}>
        
      <MapView.Animated
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={{flex:1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // showsUserLocation={true}
        
        showsTraffic={false}
        mapType="standard"
        
        // mapPadding={mapPadding&&{top: mapHeight.current-60, right: 0, bottom: 0, left: 0}}
        showsMyLocationButton={true}
        onRegionChange={(e)=>{
          setCurrentPos(new AnimatedRegion(e))
        }}
        onRegionChangeComplete={(e)=>{
          setLastDropPoint(e);
        }}
      >
        {
            polygonConfig && (
                <MapViewDirections
                    origin={polygonConfig.origin}
                    destination={polygonConfig.destination}
                    waypoints={polygonConfig.waypoints || []}
                    optimizeWaypoints={true}
                   
                    // strokeColors={"black"}
                    precision="high"
                    strokeWidth={2}
                    
                    apikey={GOOGLE_API}
                />
            )
        }
        <Marker.Animated ref={marker} coordinate={CurrentPos} />
      </MapView.Animated>
      <View style={styles.com}> 

      {
        Extra && !bottom && (

            <Extra />
        )
      }
      <AutoCompleteAddress defaultText={MarkerLocationDetails.formatted_address || ""} />
      </View>

      </View>
  )
};

export default React.memo(MapWithSearch)

const styles = StyleSheet.create({
    com:{
        position:"absolute",
        top:16,
        left:0,
        // backgroundColor:"#fff",
        paddingHorizontal:20,
        width:SCREEN_WIDTH,
    }
})