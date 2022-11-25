import { View, Text } from 'react-native'
import React from 'react'
import Entry from '../Entry'

// const Second=(props)=>{
//   return (
//     <View style={{flex:1}}>
//       <Text onPress={()=>(console.log("Pressed !!"))} style={{margin:100,color:'red', fontSize:20}}>Second</Text>
//     </View>
//   )
// }

// export default Entry(Second);

export default function Second(){

    return(
        <View style={{flex:1}}>
            <Text style={{margin:100,fontSize:50,color:'tomato'}}>Second </Text>
        </View>
    )
}