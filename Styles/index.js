import {StyleSheet} from 'react-native';
import { normalizeSize, SCREEN_WIDTH } from '../utility';
import {AppTheme} from '../config/Constants';



export default StyleSheet.create({
  



  buttonStyle: {
    borderRadius: 5,
    backgroundColor: AppTheme,
    color: 'white',
    height: normalizeSize(38),
    // alignItems: 'center',
    justifyContent: 'center',
    fontSize: normalizeSize(16),
  },
  smallText: {
    fontSize: 12,
    color: AppTheme,
  },
  normalText: {
    fontSize: 14,
  },
  bigText: {
    fontSize: 16,
  },
  globalContainer: {
    padding: 20
  },
 
 
});
