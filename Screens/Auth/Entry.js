import { View, ImageBackground, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { LoginSuccessfully } from '../../store/auth';
import { normalizeSize, SCREEN_HEIGHT } from '../../utility';
import { Fonts } from '../../utility/CommonFonts';

function Entry(Component) {
    return (props) => {
        const dispatch = useDispatch();
        return (
            <View style={Entry_style.container}>
                <ScrollView scrollEnabled={true} style={{ backgroundColor: '#9FCC3A' }}>
                    <View style={{ minHeight: SCREEN_HEIGHT }}>

                        <View style={[Entry_style.semi_container, { backgroundColor: '#A7A7A7' }]}>
                            <ImageBackground source={require('../../assets/images/mp_1.png')} resizeMode="cover" style={{ flex: 1, width: '100%', height: '100%' }}>
                                <TouchableRipple onPress={() => (dispatch(LoginSuccessfully()))} style={{ backgroundColor: 'black', justifyContent: 'center', height: 35, width: 100, borderRadius: 18, alignSelf: 'flex-end', marginRight: 5, top: 15 }}>
                                    <Text style={[Entry_style.agree_text, { justifyContent: 'center', height: '50%' }, Fonts.Bold]}>Skip Login</Text>
                                </TouchableRipple>
                            </ImageBackground>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1 }} >
                                <View style={{}}>
                                    <View style={{ marginTop: 22 }}>
                                        <Text style={[Fonts.Bold, { textAlign: 'center', fontSize: 23, color: 'black' }]}>
                                            Grocery delivery in minutes
                                        </Text>
                                    </View>
                                    <View style={[Entry_style.container_log]}>
                                        <Text onPress={() => (props.navigation.navigate('Login'))} style={[Entry_style.text_Log, Fonts.Normal]}>
                                            Login
                                        </Text>
                                        <Text style={[Entry_style.text_Log, Fonts.Normal]}>
                                            or
                                        </Text>
                                        <Text onPress={() => (props.navigation.navigate('Signup'))} style={[Entry_style.text_Log, Fonts.Normal]}>
                                            Signup
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, marginTop: 16 }}>
                                    <Component {...props} />
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', width: '100%', height: 50 }}>
                            <Text style={[{ textAlign: 'center' }, Entry_style.agree, Fonts.Normal]}>
                                By continuing, you agree to our Terms of service & Privacy policy
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Entry;

const Entry_style = StyleSheet.create({
    container: {
        flex: 1
    },
    semi_container: {
        height: SCREEN_HEIGHT * 0.40
    },
    agree_text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 13,
        height: '100%',
        width: '100%'
    },
    agree: {
        color: 'white',
        textAlign: 'center',
        fontSize: normalizeSize(14),
        height: '100%',
        width: 270,
    },
    text_Log: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        paddingHorizontal: '2%'
    },
    container_log: {
        marginTop: 4,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '50%',
        // backgroundColor:'aqua',
    },
})

