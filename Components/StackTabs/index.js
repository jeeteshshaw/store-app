import { useTheme } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Rtext} from '../Rtext';

const StackTabs = ({options, value, onChange, tabStyle}) => {
  const {colors, custom}=useTheme()
  return (
    <View style={[tabStyle,{elevation:2}]}>
      {options.map((option, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onChange(option.value)}
            style={[
              Style.tabBtn,
              {
                backgroundColor: value == option.value ? custom.selectedTab : null,       
                borderRadius:20,
                width: 85 / options.length + '%',
              },
            ]}
            
            >
            <Rtext style={{color:value == option.value ? custom.tabActivetextColor : custom.unSelectedTabText}}>{option.title}</Rtext>
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
    padding: 0,
  },
});

export default StackTabs;
