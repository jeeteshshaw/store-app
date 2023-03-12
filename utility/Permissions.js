// import { PermissionsAndroid, Platform } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';

// export const LocationsPermission = async()=>{
//     if(Platform.OS==="ios"){
//         const res = await Geolocation.requestAuthorization()
//         console.log("location permission");
//         return res
//     }
//     const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: "Fako App need Location Permission",
//           message:
//             "Fako app need location permission to function properly.",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK"
//         }
//       );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can use the location");
//       } else {
//         console.log("location permission denied");
//       }
// }