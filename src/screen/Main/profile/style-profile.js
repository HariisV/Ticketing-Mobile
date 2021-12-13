import {StyleSheet} from 'react-native';

const fontFam = {fontFamily: 'Mulish-Bold'};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    marginTop: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  inputTimes: {
    borderColor: '#EFF0F6',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#EFF0F6',
    borderRadius: 15,
  },
  valueInput: {
    ...fontFam,
    padding: 25,
    fontSize: 20,
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 15,
  },
  name: {
    ...fontFam,
    textAlign: 'center',
    fontSize: 28,
    marginTop: 20,
    fontWeight: 'bold',
  },
  email: {
    ...fontFam,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 30,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  inputIcon: {
    // width: 18,/
    // height: 18,
    color: '#5F2EEA',
    // marginTop: 5,
    marginRight: 10,
  },
  textIcon: {
    // marginTop: 15,
    // alignItems: 'center',
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
  },
  containerComponent: {
    marginTop: 5,
    marginHorizontal: 10,
  },
  containerText: {
    flexDirection: 'row',
  },
  hrComponent: {
    borderColor: '#d8d8d8',
    borderBottomWidth: 1,
    marginVertical: 13,
  },
});

export default styles;
