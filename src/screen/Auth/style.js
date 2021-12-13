import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    margin: 20,
    marginTop: 50,
  },
  h1: {
    marginTop: 60,
    marginBottom: 40,
  },
  btn: {
    color: '#5F2EEA',
  },
  alReady: {
    // fontWeight: 600,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16,
    color: '#6E7191',
  },
  input: {
    height: 70,
    borderColor: '#DEDE',
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 20,
    marginTop: 5,
    // marginBottom: 20,
  },
  inputInvalid: {
    borderColor: '#dc3545e3',
  },
  label: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Mulish-Regular',
  },
  invalid: {
    marginBottom: 20,
    marginTop: 10,
    fontFamily: 'Mulish-Regular',
    color: '#dc3545e3',
  },
  none: {
    display: 'none',
  },
  button: {
    backgroundColor: '#5F2EEA',
    // height: 70,
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Mulish-Bold',
    fontWeight: '600',
  },
  alReadyLink: {
    color: '#5F2EEA',
    fontWeight: 'bold',
  },
});
export default styles;
