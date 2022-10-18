import { View, Text } from 'react-native'
import React from 'react'
import GButton from '../../../Components/GButton';
import GInput from '../../../Components/GInput';
import Entry from '../Entry';


    function OTP(props) {
        return(
            <View>
            <View style={{ marginTop:30, marginBottom:10}}>
                    <Text style={{textAlign:'center',fontSize:18,color:'white'}}>
                      ENTER  OTP
                    </Text>
                    <GInput placeholder={"OTP"} keyboardtype={'numeric'}/>
            </View>
            {/* <GButton data={"Continue"} press={()=>(console.warn('Continue OTP'))}/> */}
            <GButton data={"Continue"} press={()=>(props.navigation.navigate('Reset'))}/>
        </View>
        )
    }

    export default Entry(OTP);
    // export default Entry(Enter_OTP)