import { useTheme } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Styles from '../../Styles';
import {normalizeSize} from '../../utility';

const Rtext = ({
  style = {},
  normalizeFontSize = 0,
  fontSize = 14.5,
  lgFontSize = 0,
  smFontSize = 0,
  fontStyle = 'normal',
  children = '',
  checkbox = false,
  color = '#353535',
  fontWeight = 'normal',
  numberOfLines = 0,
}) => {
  const { colors } = useTheme();

  const cusStyle = {
    fontStyle,
    color:"#000",

    fontSize:
      normalizeFontSize == 0
        ? normalizeSize(fontSize, lgFontSize, smFontSize)
        : normalizeFontSize,
    fontWeight,
    fontFamily: 'NoirPro-Regular'
  };
  return (
    <View>
      {checkbox ? (
        <View style={[Styles.bottomDialogWidth,{flexDirection: 'row', justifyContent:'space-between', paddingEnd:10, paddingStart:10 }]}>
         
          <Text
            style={[styles.default, style,cusStyle]}
            numberOfLines={numberOfLines}>
            {children}
          </Text>
          <Checkbox.Android
            uncheckedColor="#7dbc6b"
            color="#7dbc6b"
            // status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              handleCheckbox();
            }}></Checkbox.Android>
        </View>
      ) : (
        <Text
          style={[styles.default,cusStyle, style]}
          numberOfLines={numberOfLines}>
          {children}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {

  },
});

export {Rtext};
