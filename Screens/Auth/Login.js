import { Text, View, ImageBackground} from 'react-native'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import GInput from '../../Components/GInput';
import GButton from '../../Components/GButton';
import GCheck from '../../Components/GCheck';
import Entry from './Entry';

const Login_rest=()=>{
    return(
            <View>

<View style={{marginTop:22}}>
                        <Text style={{textAlign:'center',fontSize:25,color:'black'}}>
                        Grocery delivery in minutes
                        </Text>
                    </View>
                    <View style={{ marginTop:10, marginBottom:10}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'white'}}>
                            Login or Signup
                        </Text>
                    </View>
                    <GInput place={"Email"} type={'email-address'} style={{backgroundColor:"red"}}/>
                    <GInput place={"Password"} type={'visible-password'}/>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text>Checkbox</Text>
                        </View>
                    <Text style={{textAlign:'left',fontSize:15,color:'white',marginBottom:10}}>
                    Remember Me
                    </Text>    
                    </View>
                    <View>
                        <GButton data={"Continue"}/>
                        <Text style={{textAlign:'center',fontSize:15,color:'white',marginBottom:10}}>
                            Forget Password
                        </Text>
                    </View>
                    <View>
                    <Text style={{ color:'white', textAlign:'center'}}>
                    By continuing, you agree to our Terms of 
                    </Text>
                    <Text style={{ color:'white', textAlign:'center'}}>
                    service & Privacy policy
                    </Text>
                    </View>

            </View>
    );
}

// ? yeh last 40% jo different hai sabme wo hai yeh wala otp wala hai
const Enter_OTP = () =>{
return(
    <View>


<View style={{marginTop:22}}>
                        <Text style={{textAlign:'center',fontSize:25,color:'black'}}>
                        Grocery delivery in minutes
                        </Text>
                    </View>
                    <View style={{ marginTop:10, marginBottom:10}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'white'}}>
                            OTP
                        </Text>
                        <GInput place={"OTP"} type={'numeric'}/>
                    </View>
                    <View>
                        <GButton data={"Continue"}/>
                        <Text style={{textAlign:'center',fontSize:15,color:'white',marginBottom:10}}>
                            Forget Password
                        </Text>
                    </View>
                    <View>
                    <Text style={{ color:'white', textAlign:'center'}}>
                    By continuing, you agree to our Terms of 
                    </Text>
                    <Text style={{ color:'white', textAlign:'center'}}>
                    service & Privacy policy
                    </Text>
                    </View>








        {/* <View style={{ marginTop:10, marginBottom:10}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'white'}}>
                            OTP
                        </Text>
        </View> */}
                    {/* <GInput place={"OTP"} type={'numeric'}/> */}
    </View>
);
}


// function Login(){
//     return (
//         <View style={{flex:1}}>
//                 <View style={{flex:0.5, backgroundColor:'#A7A7A7'}}>
//                 <ImageBackground source={require('../../assets/images/mp_1.png')} resizeMode="cover" style={{flex:1}}>
//                     <TouchableRipple style={{ backgroundColor:'black', height:35,width:100,borderRadius:18, left:280, top:15}}>
//                     <Text style={{color:'white', textAlign:'center', margin:6}}>Skip Login</Text>
//                     </TouchableRipple>
//                 </ImageBackground>
//                 </View>
//                 <View style={{flex:0.5, backgroundColor:'#9FCC3A'}}>
//                     {/* <Login_rest/> */}
//                     <Enter_OTP/>
//                 </View>
//     </View>
//     )
// }



function Login() {
    return(
        // <Entry data={<Enter_OTP/>}/>
        <Login_rest />
    );
}

// kya hai ye



export default Entry(Login)