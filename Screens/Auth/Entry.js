import {View, ImageBackground, Text } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

function Entry(Component){
    return (props)=> (
        <View style={{flex:1}}>
                <View style={{flex:0.5, backgroundColor:'#A7A7A7'}}>
                <ImageBackground source={require('../../assets/images/mp_1.png')} resizeMode="cover" style={{flex:1}}>
                    <TouchableRipple style={{ backgroundColor:'black', height:35,width:100,borderRadius:18, left:280, top:15}}>
                    <Text style={{color:'white', textAlign:'center', margin:6}}>Skip Login</Text>
                    </TouchableRipple>
                </ImageBackground>
                </View>
                <View style={{flex:0.5, backgroundColor:'#9FCC3A'}}>
                <Component />    
                </View>
    </View>
    )
}
export default Entry;
