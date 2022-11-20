import React, {useState} from 'react';
import {Modal, View, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {White} from '../../config/Colors';
import {normalizeSize} from '../../utility';
import {Rtext} from '../Rtext';

const DropDown = ({data = {}}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={dropDownStyle.overlay}
        onPress={() => setVisible(true)}>
        <Rtext color="black">Select Financial Year</Rtext>
      </TouchableOpacity>
      <Modal
        transparent={true}
        onCance
        visible={visible}
        onRequestClose={()=>setVisible(false)}
        animationType="none">
        <View style={[dropDownStyle.overlay]}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => <Rtext>{item.label}</Rtext>}
          />
        </View>
      </Modal>
    </View>
  );
};
const dropDownStyle = StyleSheet.create({
  overlay: {
    width: normalizeSize(100),
    height: 50,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
});
export default DropDown;
