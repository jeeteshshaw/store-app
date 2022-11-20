import { useTheme } from '@react-navigation/native';
import React from 'react'
import { Modal, StyleSheet, View } from 'react-native';
import { AppTheme } from '../../config/Constants';
import { Abutton } from '../Abutton';

    const Amodal = ({ children, modalVisible, handleModalClose=()=>{}, close = true, ButtonText='Close', style={} }) => {
       const {colors}=useTheme()
        return (
            <Modal
            
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={[aModal.centeredView]}>
                    <View style={[aModal.modalView,style]}>
                        {children}
                    </View>
                    {close && <View>
                        <Abutton onPress={() => handleModalClose()}>{ButtonText}</Abutton>
                    </View>
                    }
                </View>
            </Modal>
        )
    }

const aModal = StyleSheet.create({
    centeredView: {
        padding: 20,
        backgroundColor: 'rgba(49, 48, 49, 0.8)',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        textAlign: 'center', 
        marginVertical: 16,
        fontWeight: '700'
    }
})

export default Amodal;
