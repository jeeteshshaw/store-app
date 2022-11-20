import React, {useEffect} from 'react';
import {KeyboardAvoidingView, Modal} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {ANIMATION_TIME, SCREEN_WIDTH} from '../../utility';
import {Abutton} from '../Abutton';
import * as Animatable from 'react-native-animatable';
import Styles from '../../Styles';
import {Provider} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import {Red} from '../../config/Constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-virtualized-view';

const Rmodal = ({
  visible = false,
  background = 'white',
  modalBackground = 'rgba(17, 17, 17, 0.5)',
  children = <></>,
  listBg = {},
  onCancel = () => {},
  onComplete=()=>{},
  style = {},
  cancelable = true,
  showCancelBtn = true,
  btnText = 'Cancel',
  bottomList = [],
  showSubmitButton=false,
  animatable = true,
}) => {
  modalBackground =
    cancelable === true ? modalBackground : 'rgba(17, 17, 17, 0.75)';

  const {colors} = useTheme();
  return (
    <Provider>
      <Modal
        animationType="none"
        transparent={true}
        style={[style, {zIndex: 1}]}
        visible={visible}
        onRequestClose={() => {
          if (cancelable === true) onCancel();
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          style={[styles.centeredView, {backgroundColor: modalBackground}]}>
          {animatable ? (
            <>
              <Animatable.View
                style={[
                  styles.modalView,
                  listBg,
                  {backgroundColor: colors.background},
                ]}
                animation="fadeIn"
                duration={ANIMATION_TIME}>
                {<ScrollView>{children}</ScrollView>}
                {/* {children} */}
              </Animatable.View>
            </>
          ) : (
            <View style={[Styles.bottomDialogWidth, listBg]}>
              {
                <>
                  <MaterialIcons
                    name={'cancel'}
                    size={35}
                    onPress={() => onCancel()}
                    style={{
                      color: Red,
                      position: 'absolute',
                      top: 10,
                      right: 10,
                    }}
                  />
                  {children}
                </>
              }
            </View>
          )}

          {showCancelBtn && (
            <Abutton
              style={styles.cancelBtnStyle}
              onPress={() => onCancel()}
              fontWeight="bold">
              {btnText}
            </Abutton>
          )}
          {showSubmitButton && (
             <Abutton
             style={styles.cancelBtnStyle}
             onPress={() => onComplete()}
             fontWeight="bold">
             Set
           </Abutton>
          )}
        </KeyboardAvoidingView>
      </Modal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 8,
    width: SCREEN_WIDTH - 24,
    shadowColor: '#000',
    maxHeight: '75%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cancelBtnStyle: {
    marginHorizontal: 32,
    paddingVertical: 12,
    marginTop: 10,
    marginBottom: 16,
    width: SCREEN_WIDTH - 24,
    borderRadius: 8,
  },
});

export default Rmodal;
