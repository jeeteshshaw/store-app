import  React,{useState} from 'react';
import Checkbox from 'expo-checkbox';


function GCheck(props){
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <Checkbox
            // disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
  );
};

export default GCheck;