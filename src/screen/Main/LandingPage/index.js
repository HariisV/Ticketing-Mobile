import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';

const LandingPage = props => {
  const handleChangePage = () => {
    props.navigation.navigate('Register');
  };
  return (
    <View style={styles.Wrapper}>
      <View style={styles.containerTop}>
        <Image
          source={require('../../../assets/images/logo-w.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.container}>
        <LottieView
          source={require('../../../assets/lotie/home.json')}
          autoPlay
          loop
          style={styles.animated}
        />
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.title}>Cara Baru Nonton Bioskop</Text>
        <Text style={styles.desc}>
          Stop waiting in line. Buy tickets conveniently, watch movies quietly.
        </Text>
        <TouchableOpacity
          style={styles.buttonDetail}
          onPress={handleChangePage}>
          <Text style={styles.textButtonDetail}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#5F2EEA',
    height: '100%',
  },
  container: {
    // flex: 1,
    width: '100%',
    height: 400,
    backgroundColor: '#5F2EEA',
    justifyContent: 'center',
  },
  containerBottom: {
    marginTop: 30,
  },

  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  animated: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonDetail: {
    borderRadius: 40,
    marginHorizontal: 20,
    marginBottom: 30,
    borderColor: '#5F2EEA',
    backgroundColor: 'white',
    borderWidth: 1,
    color: 'black',
    padding: 15,
  },
  textButtonDetail: {
    color: '#5F2EEA',
    fontFamily: 'Mulish-Bold',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontFamily: 'Mulish-Regular',
    color: 'white',
    fontSize: 26,
  },
  desc: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Mulish-Regular',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default LandingPage;
