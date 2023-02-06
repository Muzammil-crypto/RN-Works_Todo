import {StyleSheet} from 'react-native';
import {theme} from '../core/Theme';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    height: theme.dimensions.windowHeight,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputBox: {
    width: '100%',
    borderColor: theme.colors.primary,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
    marginBottom: 10,
  },
  title: {
    marginTop: 80,
    fontSize: 30,
    marginBottom: 5,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  subtitle1: {
    fontSize: 14,
    marginBottom: 20,
    color: theme.colors.secondary,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    color: theme.colors.primary,
  },
  listItem: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    backgroundColor: theme.colors.themer,
  },
  addButton: {
    alignItems: 'flex-end',
  },
  task: {
    marginLeft: 5,
    width: 200,
  },
  error: {
    color: theme.colors.error,
  },
});
