import {DefaultTheme} from 'react-native-paper';
import {Dimensions} from 'react-native';

export const theme = {
  ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors,
    themer: 'light',

    text: '#818181',
    primary: '#009243',

    secondary: '#818181',
    error: '#009243',
  },
  darkTheme: {
    themer: 'dark',

    text: 'white',
    primary: 'black',
    secondary: 'white',
    error: '#009243',
  },
  dimensions: {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height,
  },
};
