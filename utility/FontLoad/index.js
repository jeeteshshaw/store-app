import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    "K2D-400": require('../../assets/fonts/K2D-400.ttf'),
    "K2D-700": require('../../assets/fonts/K2D-700.ttf'),
    "K2D-ExtraBold": require('../../assets/fonts/K2D-ExtraBold.ttf'),
    "K2D-ExtraLight": require('../../assets/fonts/K2D-ExtraLight.ttf'),
    "K2D-Light": require('../../assets/fonts/K2D-Light.ttf'),
    "K2D-Medium": require('../../assets/fonts/K2D-Medium.ttf'),
    "K2D-Thin": require('../../assets/fonts/K2D-Thin.ttf'),
    "K2D-SemiBold": require('../../assets/fonts/K2D-SemiBold.ttf'),
    // "Inter-900": require('../../assets/fonts/Inter-900.ttf'),
    // "Inter-Bold": require('../../assets/fonts/Inter-600.ttf'),
    // "Inter-Regular": require('../../assets/fonts/Inter-400.ttf'),
    // "Bengali-Regular":require("../../assets/fonts/Bengali-Regular.ttf"),
    // "Bengal-Italic":require("../../assets/fonts/Bengal-Italic.ttf")
  });