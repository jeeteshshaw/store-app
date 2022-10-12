import React from 'react';
import {ActivityIndicator, StyleSheet, View, Image} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import { White } from '../../config/Colors';
import Styles from '../../Styles';
import { normalizeSize } from '../../utility';
import { Rtext } from '../Rtext';

const Abutton = ({
  children,
  style = {},
  onPress,
  loader = false,
  fontSize = 16,
  fontWeight = '500',
  icon = false,
  textColor = White,
  materialIcon,
}) => {
  return (
    <TouchableRipple
      style={[Styles.buttonStyle, styles.default, style]}
      onPress={onPress}>
      {loader ? (
        <ActivityIndicator color="#fff"></ActivityIndicator>
      ) : (
        <View style={styles.iconBackground}>
          {icon && materialIcon}
          <Rtext
            style={[
              {
                color: textColor,
              },
            ]}
            fontSize={fontSize}
            fontWeight={fontWeight}>
            {children}
          </Rtext>
        </View>
      )}
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  default: {
    marginTop: normalizeSize(20),
    width: '100%',
  },
  iconBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
export {Abutton};
