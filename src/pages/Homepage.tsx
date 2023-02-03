import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {theme} from '../core/Theme';
export const Homepage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Number of Todos:</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: theme.dimensions.windowHeight,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textStyle: {
    alignSelf: 'center',
  },
});
