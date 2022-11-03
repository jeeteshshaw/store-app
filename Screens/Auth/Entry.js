import {View, ImageBackground, Text,StyleSheet,ScrollView,KeyboardAvoidingView } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { SCREEN_HEIGHT } from '../../utility';

function Entry(Component){
    return (props)=> (
        <KeyboardAvoidingView style={Entry_style.container}>
            <ScrollView scrollEnabled={true} style={{minHeight:SCREEN_HEIGHT,backgroundColor:'#9FCC3A'}}>
            <View style={[Entry_style.semi_container,{backgroundColor:'#A7A7A7'}]}>
                <ImageBackground source={require('../../assets/images/mp_1.png')} resizeMode="cover" style={{flex:1,width:'100%',height:'100%'}}>
                    <TouchableRipple onPress={()=>(props.navigation.navigate('Skip'))} style={{ backgroundColor:'black',justifyContent:'center', height:35,width:100,borderRadius:18, marginLeft:280, top:15}}>
                        <Text style={[Entry_style.agree_text,{justifyContent:'center',height:'50%'}]}>Skip Login</Text>
                    </TouchableRipple>
                </ImageBackground>
            </View>
            <View style={{height:SCREEN_HEIGHT*0.55}}>
                <View style={{flex:1}} >
                    <View>
                        <View style={{paddingTop:22}}>
                            <Text style={{textAlign:'center',fontSize:23,color:'black'}}>
                                Grocery delivery in minutes
                            </Text>
                        </View>
                            <View style={Entry_style.container_log}>
                                <Text  onPress={()=>(props.navigation.navigate('Login'))} style={[Entry_style.text_Log]}>
                                    Login 
                                </Text>
                                <Text style={[Entry_style.text_Log]}>
                                    or 
                                </Text>
                                <Text onPress={()=>(props.navigation.navigate('Signup'))} style={[Entry_style.text_Log]}>
                                    Signup
                                </Text>
                            </View>
                    </View>
                    <View style={{flex:1}}>
                    <Component {...props}/>    
                    </View>
                    <View style={{height:50, width:250,alignItems:'center',alignContent:'center',marginHorizontal:75}}>
                        <Text style={[Entry_style.agree_text,{textAlign:'center'}]}>
                            By continuing, you agree to our Terms of service & Privacy policy
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    )
}
export default Entry;

const Entry_style = StyleSheet.create({
    container:{
        flex:1
    },
    semi_container:{
    height:SCREEN_HEIGHT*0.45
    },
    agree_text:{
        color:'white',
        textAlign:'center',
        fontSize:13,
        height:'100%',
        width:'100%'
    },
    text_Log:{
        textAlign:'center',
        fontSize:18,
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

