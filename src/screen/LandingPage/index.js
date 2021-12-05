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
  return (
    <View style={styles.Wrapper}>
      <View style={styles.containerTop}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          // barStyle={statusBarStyle}
          hidden={true}
        />
        <Image
          source={require('../../assets/images/logo-w.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/lotie/home.json')}
          autoPlay
          loop
          style={styles.animated}
        />
      </View>
      <View style={styles.containerBottom}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          // barStyle={statusBarStyle}
          hidden={true}
        />
        {/* <Image
          source={require('../../assets/images/logo-w.png')}
          style={styles.logo}
        /> */}
        <Text></Text>
        <TouchableOpacity style={styles.buttonDetail}>
          <Text style={styles.textButtonDetail}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonDetail}>
          <Text style={styles.textButtonDetail}>Update</Text>
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
    marginTop: 50,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  animated: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonDetail: {
    borderRadius: 10,
    marginBottom: 30,
    borderColor: '#5F2EEA',
    backgroundColor: 'red',
    borderWidth: 1,
    color: 'black',
    padding: 15,
  },
  textButtonDetail: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LandingPage;
