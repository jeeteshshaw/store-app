import React from 'react';
import {View, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AppTheme } from '../../config/Constants';

const Rloader = ({color = AppTheme, containerstyle = {}}) => {
  return (
    // <View style={[RloaderStyle.container,{containerstyle}]}>
    //   <Spinner color={color} visible={true}></Spinner>
    // </View>
    <Spinner color={color} visible={true}></Spinner>

  );
};
const RloaderStyle = StyleSheet.create({
    container: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Rloader;
