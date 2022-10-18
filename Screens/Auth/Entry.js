import {View, ImageBackground, Text,StyleSheet,ScrollView,KeyboardAvoidingView } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

function Entry(Component){
    return (props)=> (
        <View style={Entry_style.container}>
                <View style={[Entry_style.semi_container,{backgroundColor:'#A7A7A7'}]}>
                <ImageBackground source={require('../../assets/images/mp_1.png')} resizeMode="cover" style={{flex:1}}>
                    <TouchableRipple onPress={()=>(props.navigation.navigate('Skip'))} style={{ backgroundColor:'black', height:35,width:100,borderRadius:18, marginLeft:280, top:15}}>
                    <Text style={[Entry_style.agree_text,{margin:6}]}>Skip Login</Text>
                    </TouchableRipple>
                </ImageBackground>
                </View>
                            <KeyboardAvoidingView style={[Entry_style.semi_container,{backgroundColor:'#9FCC3A'}]}>
                            <ScrollView style={{flex:1}} bounces={false}>
                            <View style={{flex:1}}>
                                <View style={{paddingTop:22}}>
                                        <Text style={{textAlign:'center',fontSize:25,color:'black'}}>
                                        Grocery delivery in minutes
                                        </Text>
                                </View>
                                <View style={Entry_style.container_log}>
                                        <Text  onPress={()=>(props.navigation.navigate('Login'))} style={[Entry_style.text_Log,{paddingLeft:30}]}>
                                            Login 
                                        </Text>
                                        <Text style={[Entry_style.text_Log,{paddingLeft:5}]}>
                                            or 
                                        </Text>
                                        <Text onPress={()=>(props.navigation.navigate('Signup'))} style={[Entry_style.text_Log,{paddingLeft:5}]}>
                                            Signup
                                        </Text>
                                </View>
                                <Component {...props}/>    
                            </View>
                    <View style={{paddingBottom:10, backgroundColor:'#9FCC3A'}}>
                        <Text style={Entry_style.agree_text}>
                        By continuing, you agree to our Terms of 
                        </Text>
                        <Text style={Entry_style.agree_text}>
                        service & Privacy policy
                        </Text>
                    </View>
            </ScrollView>
            </KeyboardAvoidingView>
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
    },
    text_Log:{
        textAlign:'center',
        fontSize:18,
        color:'white'
    },
    container_log:{
        paddingVertical:15,
        alignSelf:'center',
        flexDirection:'row',
        width:'50%',
        alignSelf:'center'},
})

