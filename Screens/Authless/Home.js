import { Text, View,Image,Dimensions} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native-virtualized-view';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 function Authless_Home() {
    return (
    <ScrollView>
      <View style={{borderRadius:30,backgroundColor:'blue'}}>
        <TextInput
        // style={{width:windowWidth-60,alignSelf:'center',borderRadius:50, marginVertical:10}}
        style={{ height: 60, width: windowWidth-60,alignSelf:'center', borderColor: 'gray', borderWidth: 2, borderRadius: 20,  marginVertical: 10, fontSize: 18 }}
        />
      </View>
      <Image
       source={require('../../assets/images/Rectangle_88.png')} 
       resizeMode='cover'
       style={{width:windowWidth, height:300}}
       />
       <View>

       </View>
    </ScrollView>
    )
  }

export default Authless_Home