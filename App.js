import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import {
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/MainNavigation/StackNavigation';
import AuthScreenNavigation from './navigations/AuthNavigations';
import { useLayoutEffect } from 'react';
import useFonts from './utility/FontLoad/index'
export default function App() {
  const fontLoad = async()=>{
    await useFonts();

  }
  useLayoutEffect(() => {
    fontLoad()
  
   
  }, [])
  
  return (
    <Provider store={store}>
      <NavigatorHandler />
    </Provider>
    
  );
}


const NavigatorHandler = ()=>{
  const token = useSelector(state=>(state.auth.token));
  console.log({token});
  return (
    <NavigationContainer>
      {
        token.length>0?
        <StackNavigation />
        :
        <AuthScreenNavigation />
        
      }
      <StatusBar  />

    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
