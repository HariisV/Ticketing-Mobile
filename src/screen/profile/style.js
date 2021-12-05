import {StyleSheet} from 'react-native';

const primary = '#5F2EEA';
const fontFam = {fontFamily: 'Mulish-Bold'};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    alignSelf: 'center',
  },

  value: {
    ...fontFam,
    color: 'black',
    marginBottom: 20,
  },
  title: {
    ...fontFam,
    color: 'black',
    fontSize: 20,
    fontFamily: 'Mulish-Bold',
    fontWeight: '600',
  },
  desc: {
    marginBottom: 30,
    marginTop: 5,
    fontSize: 16,
  },

  input: {
    height: 60,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 40,
  },
  buttonDetail: {
    borderRadius: 10,
    marginBottom: 30,
    borderColor: '#5F2EEA',
    backgroundColor: '#5F2EEA',
    borderWidth: 1,
    color: 'black',
    padding: 15,
    marginTop: 300,
  },
  textButtonDetail: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
  },
});
export default styles;
