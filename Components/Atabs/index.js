import { useTheme } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {White} from '../../config/Colors';
import {AppTheme} from '../../config/Constants';
import {Rtext} from '../Rtext';

const Atabs = ({options, value, onChange, tabStyle}) => {
  const {colors, custom}=useTheme()
  return (
    <View style={tabStyle}>
      {options.map((option, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onChange(option.value)}
            style={[
              Style.tabBtn,
              {
                backgroundColor: value == option.value ? custom.tabActiveCardColor : custom.tabInactiveCardColor,
                borderTopLeftRadius: index == 0 ? 5 : 0,
                borderBottomLeftRadius: index == 0 ? 5 : 0,
                borderTopRightRadius: index == options.length - 1 ? 5 : 0,
                borderBottomRightRadius: index == options.length - 1 ? 5 : 0,
                width: 100 / options.length + '%',
              },
            ]}>
            <Rtext style={{color:value == option.value ? custom.tabActivetextColor : custom.tabInactivetextColor}}>{option.title}</Rtext>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Style = StyleSheet.create({
  tabBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default Atabs;
