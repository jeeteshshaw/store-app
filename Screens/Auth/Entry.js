import {View, ImageBackground, Text,StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

function Entry(Component){
    return (props)=> (
        <View style={Entry_style.container}>
                <View style={[Entry_style.semi_container,{backgroundColor:'#A7A7A7'}]}>
                <ImageBackground source={require('../../assets/images/mp_1.png')} resizeMode="cover" style={{flex:1}}>
                    <TouchableRipple onPress={()=>(props.navigation.navigate('Skip'))} style={{ backgroundColor:'black', height:35,width:100,borderRadius:18, marginLeft:280, top:15}}>
                    <Text style={{color:'white', textAlign:'center', margin:6}}>Skip Login</Text>
                    </TouchableRipple>
                </ImageBackground>
                </View>
                <View style={[Entry_style.semi_container,{backgroundColor:'#9FCC3A'}]}>
                    <View style={{flex:1}}>
                <View style={{paddingTop:22}}>
                        <Text style={{textAlign:'center',fontSize:25,color:'black'}}>
                        Grocery delivery in minutes
                        </Text>
                </View>
                <Component {...props}/>    
                <View style={{paddingBottom:10,backgroundColor:'tomato'}}>
                    <Text style={Entry_style.agree_text}>
                    By continuing, you agree to our Terms of 
                    </Text>
                    <Text style={Entry_style.agree_text}>
                    service & Privacy policy
                    </Text>
                </View>
                    </View>
                </View>
    </View>
    )
}
export default Entry;

const Entry_style = StyleSheet.create({
    container:{
        flex:1
    },
    semi_container:{
    flex:0.5
    },
    agree_text:{
        color:'white',
        textAlign:'center',
        backgroundColor:'red'
    },
})

