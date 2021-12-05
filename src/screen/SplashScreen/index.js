import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      const token = false;
      token
        ? props.navigation.navigate('AppScreen')
        : props.navigation.navigate('AuthScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo-w.png')}
        style={styles.logo}
      />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F2EEA',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
