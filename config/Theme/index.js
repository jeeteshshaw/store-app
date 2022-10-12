import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { White } from "../Colors";
import { AppTheme } from "../Constants";

export const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: AppTheme,
      background: '#F5F6FF',
      text: '#000000',
      card: '#FFFFFF',
    },
    custom: {
      tabInactivetextColor: AppTheme,
      tabInactiveCardColor: '#cdcdcd',
      tabActivetextColor: White,
      tabActiveCardColor: AppTheme,
      tableColor: '#e6e6e6',
      stabColor: 'rgba(50, 57, 67, 0.7)',
      selectedTab: 'rgba(248, 248, 248, 0.4)',
      unSelectedTabText: '#cccccc',
      iconGrey: '#6C757D',
      authHeader1:"#dce5ef"
    },
  };
  
export  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: AppTheme,
      background: '#22303C',
      text: '#FFFFFF',
      card: '#15202B',
      tableColor: '#939CA4',
    },
    custom: {
      tabInactivetextColor: AppTheme,
      tabInactiveCardColor: '#cdcdcd',
      tabActivetextColor: White,
      stabColor: '#15202B',
      tabActiveCardColor: AppTheme,
      tableColor: '#454545',
      selectedTab: 'rgba(53, 70, 86, 0.44)',
      unSelectedTabText: 'grey',
      iconGrey: '#D3D3D3',
      authHeader1:"#252628"

    },
  };