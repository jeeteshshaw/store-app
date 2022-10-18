import  React,{useState} from 'react';
import { Checkbox } from 'react-native-paper';

function GCheck(props){
  const [check, setCheck] = useState(false);
  return (
    <Checkbox
    style={props.style}
      status={check ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheck(!check);
      }}
      uncheckedColor={'#A7A7A7'}
    />
  );
};

export default GCheck;