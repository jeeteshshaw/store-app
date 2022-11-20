import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {useController} from 'react-hook-form';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import {BottomTabBackground, Colors, White} from '../../config/Colors';
import {AppTheme} from '../../config/Constants';
import Style from '../../Styles';
import {normalizeSize} from '../../utility';
const Ainput = ({
  autoFocus = false,
  value = '',
  onChangeText = val => {},
  multiline = false,
  onBlur = () => {},
  placeholder = '',
  numberOfLines = 1,
  secureTextEntry = false,
  border = '#76A8C8',
  marginTop = {},
  marginBottom = {},
  style = {},
  keyboardType = 'default',
  view = false,
  search = false,
  type = 'default',
  roundness = 10,
  outlineColor = AppTheme,
  editable = true,
  mode = 'outlined',
  label = '',
  control,
  returnKeyType="default",
  activeOutlineColor=AppTheme,
  name,
  onSubmitEditing,
  onChange,
}) => {
  const {colors} = useTheme();
  const [lcSecureTextEntry, setLcSecureTextEntry] = useState(secureTextEntry);
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  const passwordEyeChange = () => {
    if (lcSecureTextEntry == false) {
      setLcSecureTextEntry(true);
    } else {
      setLcSecureTextEntry(false);
    }
  };
  return (
    <TextInput
      onChange={onChange}
    
      style={[
        inputText,
        {
          // color: AppTheme,
          // backgroundColor: colors.background,
          // borderColor: BottomTabBackground,
        },
        style,
      ]}
      returnKeyType={returnKeyType}
      mode={mode}
      editable={editable}
      label={label}
      value={field.value}
      autoFocus={autoFocus}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={field.onChange}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={lcSecureTextEntry}
      outlineColor={outlineColor}
      multiline={multiline}
      numberOfLines={numberOfLines}
      activeOutlineColor={activeOutlineColor}
      theme={{
        roundness: roundness,
        colors:{}
      }}
      right={
        view ? (
          <TextInput.Icon
            name={lcSecureTextEntry ? 'eye-off' : 'eye'}
            onPress={() => passwordEyeChange()}
            color={Colors().black}
          />
        ) : null
      }
      left={
        search ? (
          <TextInput.Icon
            name="magnify"
            onPress={() => passwordEyeChange()}
            color={AppTheme}
            style={{marginTop: 15}}
          />
        ) : null
      }
    />
  );
};
const inputText = StyleSheet.create({
  paddingLeft: normalizeSize(5),
  fontSize: normalizeSize(16),
  height: normalizeSize(35),
});
export {Ainput};
