import {View, ImageBackground, Text,StyleSheet,ScrollView,KeyboardAvoidingView,SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { LoginSuccessfully } from '../../store/auth';
import { SCREEN_HEIGHT } from '../../utility';
import { Fonts } from '../../utility/CommonFonts';

function Entry(Component){
    return (props)=>{
        const dispatch = useDispatch();
    
    return (
        // <SafeAreaView style={{flex:1}}>
        <View style={Entry_style.container}>
            <ScrollView style={{minHeight:SCREEN_HEIGHT-StatusBar.currentHeight,backgroundColor:'#9FCC3A'}}>
            <View style={[Entry_style.semi_container,{backgroundColor:'#A7A7A7'}]}>
                <ImageBackground source={require('../../assets/images/mp_1.png')} resizeMode="cover" style={{flex:1,width:'100%',height:'100%'}}>
                    <TouchableRipple onPress={()=>{
                        console.log("login");
                        dispatch(LoginSuccessfully())
                    }} style={{ backgroundColor:'black',justifyContent:'center', height:35,width:100,borderRadius:18, marginLeft:280, top:15}}>
                        <Text style={[Entry_style.agree_text,{padding:6,height:'100%',borderRadius:18}]}>Skip Login</Text>
                    </TouchableRipple>
                </ImageBackground>
            </View>
            <View style={{backgroundColor:'#9FCC3A', flex:1}}>
                <View style={{flex:1}} >
                    <View>
                        <View style={{paddingTop:13}}>
                            <Text style={[{textAlign:'center',fontSize:20,color:'black'},Fonts.Bold]}>
                                Grocery delivery in minutes
                            </Text>
                        </View>
                            <View style={Entry_style.container_log}>
                                <TouchableOpacity onPress={()=>(props.navigation.navigate('Login'))}>
                                    
                                <Text style={[Entry_style.text_Log,{textDecorationLine:"underline"}]}>
                                    Login 
                                </Text>
                                </TouchableOpacity>

                                <Text style={[Entry_style.text_Log]}>
                                    or 
                                </Text>
                                <TouchableOpacity onPress={()=>(props.navigation.navigate('Signup'))}>
                                <Text  style={[Entry_style.text_Log,{textDecorationLine:"underline"} ]}>
                                    Signup
                                </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={{flex:1, minHeight:SCREEN_HEIGHT*0.35}}>
                    <Component {...props}/>    
                    </View>
                    <View style={{paddingVertical:16}}>
                        <Text style={Entry_style.agree_text}>
                            By continuing, you agree to our Terms of 
                        </Text>
                        <Text style={Entry_style.agree_text}>
                            service & Privacy policy
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
    // </SafeAreaView>
    )}
}
export default Entry;

const Entry_style = StyleSheet.create({
    container:{
        flex:1,
    },
    semi_container:{
    height:SCREEN_HEIGHT*0.45
    },
    agree_text:{
        color:'white',
        textAlign:'center',
        fontSize:13,
    },
    text_Log:{
        textAlign:'center',
        fontSize:15,
        color:'white',
        paddingHorizontal:'2%'
    },
    container_log:{
        paddingTop:15,
        paddingBottom:20,
        justifyContent:'center',
        alignSelf:'center',
        flexDirection:'row',
        width:'50%',
    // backgroundColor:'tomato',
},
})

