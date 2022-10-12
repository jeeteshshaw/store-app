import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useController} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {BottomTabBackground, White} from '../../config/Colors';
import {AppTheme} from '../../config/Constants';
import {normalizeSize, SCREEN_WIDTH} from '../../utility';
import {Rtext} from '../Rtext';

const AdropDown = ({
  label = 'Select',
  dropDownValue,
  control,
  useControl = true,
  name,
  dropDownList = [],
  option = false,
  search = false,
  dropdownButtonStyle = {
    height: 58,
    width: SCREEN_WIDTH - 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: AppTheme,
    marginBottom: 10,
  },
  labelKey = 'title',
  valueKey = 'value',
}) => {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  useEffect(() => {
    console.log(' field.value', field.value);
  }, [field.value]);

  const {colors} = useTheme();
  const styles = getStyles(colors);
  const getdropDownValue = value => {
    dropDownValue(value);
  };

  return (
    <SelectDropdown
      data={dropDownList}
      onSelect={(selectedItem, index) => {
        useControl
          ? field.onChange(selectedItem[valueKey])
          : getdropDownValue(selectedItem[valueKey]);
      }}
      defaultButtonText={
        option
          ? field.value
          : dropDownList.find(
              option ? selectedItem.option : x => x.value == field?.value,
            )?.[labelKey] || label
      }
      buttonTextAfterSelection={(selectedItem, index) => {
        return (
          <View style={{justifyContent: 'center'}}>
            <Rtext style={{fontSize: normalizeSize(14)}}>
              {selectedItem[labelKey]}
            </Rtext>
          </View>
        );
      }}
      rowTextForSelection={(item, index) => {
        return item[labelKey];
      }}
      buttonStyle={dropdownButtonStyle}
      buttonTextStyle={styles.dropdown1BtnTxtStyle}
      renderDropdownIcon={isOpened => {
        return (
          <FontAwesome
            name={isOpened ? 'chevron-up' : 'chevron-down'}
            color={colors.text}
            size={12}
          />
        );
      }}
      dropdownIconPosition={'right'}
      dropdownStyle={styles.dropdown1DropdownStyle}
      rowStyle={styles.dropdown1RowStyle}
      rowTextStyle={styles.dropdown1RowTxtStyle}
    />
  );
};
const getStyles = colors =>
  StyleSheet.create({
    dropdownsRow: {flexDirection: 'row', width: '100%'},
    dropdown1BtnStyle: {
      height: 40,
      width: SCREEN_WIDTH - 20,
      backgroundColor: '#FFF',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: AppTheme,
      marginBottom: 10,
    },
    dropdown1BtnTxtStyle: {
      color: colors.text,
      textAlign: 'left',
      fontSize: normalizeSize(14),
      fontFamily: 'NoirPro-Regular',
    },
    dropdown1DropdownStyle: {backgroundColor: White, borderRadius: 5},
    dropdown1RowStyle: {
      backgroundColor: '#EFEFEF',
      borderBottomColor: '#C5C5C5',
    },
    dropdown1RowTxtStyle: {
      color: BottomTabBackground,
      textAlign: 'left',
      fontSize: normalizeSize(14),
    },
    divider: {width: 12},
    dropdown2BtnStyle: {
      flex: 1,
      height: 50,
      backgroundColor: '#FFF',

      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#444',
    },
    dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown2RowStyle: {
      backgroundColor: '#EFEFEF',

      borderBottomColor: '#C5C5C5',
    },
    dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
  });
export default AdropDown;
