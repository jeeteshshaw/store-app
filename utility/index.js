// import moment from 'moment';
import {
  Dimensions,
  Platform,
  PixelRatio,
  Linking,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';



export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

// Set the Animation Time here globally
export const ANIMATION_TIME = 2000;

export const normalizeSize = (size, lgSize = 0, smSize = 0) => {
  if (SCREEN_WIDTH >= 600) size = (lgSize != 0 ? lgSize : size) - 2;
  else if (SCREEN_WIDTH <= 330) size = (smSize != 0 ? smSize : size) - 1;

  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

// export const openUrl = url => {
//   if (url && url.trim() != '') {
//     url = url.trim();
//     Linking.canOpenURL(url).then(supported => {
//       if (supported) {
//         Linking.openURL(url);
//       } else {
//         console.log("Don't know how to open URI: " + url);
//       }
//     });
//   }
// };

export const fieldToLebel = field => {
  field = field.replace(/_/g, ' ');
  field = field.toUpperCase();
  return field;
};

export const showYupValidationError = response => {
  let errorMessage = '';
  for (const [key, value] of Object.entries(response)) {
    console.log(value);
    errorMessage += '* '  + value.message + '\n';
  }
  if(!errorMessage)
  return;
  errorMessage = errorMessage.replace(/\n+$/, '');
  showFlashMessage(errorMessage, '', 'danger');
};


export const showFlashMessage = (
  message = '',
  description = '',
  type = 'success',
  onPress = () => {},
  duration = 2000,
) => {
  showMessage({
    message: message,
    description: description,
    type: type,
    onPress,
    duration,
    floating: true,
  });
};
