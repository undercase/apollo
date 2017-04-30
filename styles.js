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
    textAlign: 'center',
    fontFamily: 'Roboto-Thin',
    fontSize: 40
  },
  circle: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#c9c9c9',
    margin: 20
  },
  candidate: {
    fontFamily: 'Roboto-Light',
    fontSize: 40
  },
  header: {
    fontFamily: 'Roboto-Light',
    padding: 20,
    fontSize: 25,
    color: '#e281a6'
  },
  preview: {
    fontFamily: 'Roboto-Light',
    fontSize: 20
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  yesno: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  choice: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choiceText: {
    fontFamily: 'Roboto-Light',
    padding: 20,
    fontSize: 18,
    color: '#D95893'
  },
});

export default styles;
