import React from 'react';
import {StatusBar} from 'react-native';
import {Homepage} from './src/pages/Homepage';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        showHideTransition={'slide'}
        backgroundColor={'purple'}
        hidden={false}
        translucent={false}
      />
      <Homepage />
    </>
  );
}

export default App;
