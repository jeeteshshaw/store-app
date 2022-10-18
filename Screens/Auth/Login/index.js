import { View, Text,StyleSheet} from 'react-native'
import React from 'react';
import Entry from '../Entry';
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import GCheck from '../../../Components/GCheck';


const Login=(props)=>{
    return(
        <View>
            <View style={Login_style.container_log}>
                <Text  onPress={()=>(console.warn("Text Clicked"))} style={[Login_style.text_Log,{paddingLeft:30}]}>
                    Login 
                </Text>
                <Text style={[Login_style.text_Log,{paddingLeft:5}]}>
                     or 
                </Text>
                <Text onPress={()=>(props.navigation.navigate('Signup'))} style={[Login_style.text_Log,{paddingLeft:5}]}>
                    Signup
                </Text>
            </View>
            <GInput placeholder={"Email"}  keyboardtype={'email-address'} />
            <GInput placeholder={"Password"} secureText={true} keyboardtype={'visible-password'}/>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <GCheck  style={{paddingLeft:20}}/>
                <Text style={{paddingLeft:10,fontSize:15,color:'white'}}>
                Remember Me
                </Text>    
            </View>
            <View >
                <GButton data={"Continue"} press={()=>(console.log('Clicked Continue'))}/>
                <Text onPress={()=>(props.navigation.navigate('Enter_Email'))} style={{textAlign:'center',fontSize:15,color:'white',marginBottom:10}}>
                    Forget Password
                </Text>
            </View>
        </View>
    );
}

export default Entry(Login);

const Login_style = StyleSheet.create({
text_Log:{
    textAlign:'center',
    fontSize:18,
    color:'white'
},
container_log:{
    paddingTop:20,
    flexDirection:'row',
    // backgroundColor:'aqua',
    width:170,
    alignSelf:'center'}
})