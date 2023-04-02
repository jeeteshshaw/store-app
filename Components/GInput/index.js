import { View, TextInput, StyleSheet, Image, Touchable } from 'react-native'
import React, { useState } from 'react'
import { TouchableRipple } from 'react-native-paper';
import { normalizeSize } from '../../utility';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useController } from 'react-hook-form';
import { useEffect } from 'react';

function GInput(props) {
  const { field = {} } = props.control
    ? useController({
      control: props?.control,
      defaultValue: '',
      name: props?.name,
    })
    : { field: {} };

  const [text, setText] = useState('');

  const [SecureText, setSecureText] = useState(props.secureType);
  const [Icons, setIcons] = useState(false)
  const OnIconPress = () => {
    setIcons(!Icons);
    setSecureText(!SecureText);
  }


  if (!props.secureType) {
    return (
      <View style={[styles.container, props.containerStyle]}>
        <TextInput
          style={[styles.inputField, props.style]}
          
          placeholder={props.placeholder}
          keyboardType={props.keyboardtype}
          onChangeText={props.control ? field.onChange : (props?.onChange || ((e) => setText(e)))}
          // ref={field.ref}
          value={field.value}
          secureTextEntry={SecureText}
          {...props}
        />

        {props.SearchType ? (
          <TouchableRipple onPress={() => props?.OnIconPress() || console.log('pressed')} style={{ width: '10%', justifyContent: 'center' }}>
            <Icon size={40} name="search" color={'#9DE601'} />
          </TouchableRipple>
        ) : <></>}
      </View>
    )
  } else {
    return (
      <View style={[styles.container, props.containerStyle]}>
        <TextInput
          style={[styles.inputField, props.style]}
          placeholder={props.placeholder}
          keyboardType={props.keyboardtype}
          // onChangeText={text => setText(text)}
          secureTextEntry={SecureText}
          onChangeText={props.control ? field.onChange : (props?.onChange || ((e) => setText(e)))}

          value={field.value}
          {...props}
        />
        <TouchableRipple onPress={OnIconPress} style={{ width: '10%', justifyContent: 'center' }}>
          {
            Icons === false ? <Image style={styles.icon} source={require('../../assets/icons/view_open.png')} /> : <Image style={styles.icon} source={require('../../assets/icons/view_closed.png')} />
          }
        </TouchableRipple>
      </View>
    )

  }
}
export default GInput;


const styles = StyleSheet.create({
  container: {
    height: normalizeSize(40),
    width: '90%',
    marginLeft: '5%',
    borderRadius: 15,
    backgroundColor: 'white',
    marginBottom: '4%',
    flexDirection: 'row',
  },
  inputField: {
    height: '100%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    width: '80%',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginLeft: '5%',
    color: '#000'
    // backgroundColor:'tomato'
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: "contain"
  }
})