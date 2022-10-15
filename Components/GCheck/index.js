import  React,{useState} from 'react';
import { Checkbox } from 'react-native-paper';

function index(){
  const [check, setCheck] = useState(false);
  return (
    <Checkbox
      status={check ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheck(!check);
      }}
      uncheckedColor={'#A7A7A7'}
    />
  );
};

export default index;