import {StyleSheet} from 'react-native';
import { normalizeSize, SCREEN_WIDTH } from '../utility';
import {AppTheme} from '../config/Constants';

const lo_dynamicStyle = {};
for(let i =4; i < 32; i=i+4) {
  lo_dynamicStyle['ml'+i] = {
      marginLeft: i
  }
  lo_dynamicStyle['mr'+i] = {
    marginRight: i
  }
  lo_dynamicStyle['mt'+i] = {
    marginTop: i
  }
  lo_dynamicStyle['mb'+i] = {
    marginBottom: i
  }
  lo_dynamicStyle['pl'+i] = {
    paddingLeft: i
  }
  lo_dynamicStyle['pr'+i] = {
    paddingRight: i
  }
  lo_dynamicStyle['pt'+i] = {
    paddingTop: i
  }
  lo_dynamicStyle['pb'+i] = {
    paddingBottom: i
  }

  lo_dynamicStyle['m'+i] = {
    margin: i
  }
  lo_dynamicStyle['p'+i] = {
    padding: i
  }
}


export default StyleSheet.create({
  ...lo_dynamicStyle,
  buttonText: {
    fontSize: normalizeSize(16),
    textTransform: 'capitalize',
    color: 'white',
  },
  logoText: {
    fontSize: normalizeSize(28),
    alignSelf: 'center',
    fontWeight: 'bold',
  },

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
  bottomDialogWidth:{
    width:SCREEN_WIDTH - 24
  },
  borderRounded: {
    borderRadius: 4
  }
});
