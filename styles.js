import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontFamily: 'Roboto-Thin',
    fontSize: 90,
    color: '#ffffff'
  },
  buttons: {
    padding: 20,
    width: Dimensions.get('window').width
  },
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto-Light',
    padding: 10,
    fontSize: 18,
    color: '#D95893'
  },
  camera: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  wrapper: {
    flexDirection: 'column'
  },
  fullWidth: {
    width: Dimensions.get('window').width,
  },
  nameWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    flex: 1
  },
  circle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#c9c9c9',
    margin: 20
  }
});

export default styles;
