import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {getHistory} from '../../../stores/action/history';
import {connect} from 'react-redux';

const WaitingPayment = props => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  setTimeout(() => {
    props.navigation.navigate('WebViewScreen', {
      url: props.route.params.url,
    });
  }, 3000);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Waiting Your Payment</Text>
      <ActivityIndicator size="large" color="#00ff00" />
      <Text
        style={styles.text2}
        onPress={() => {
          props.getHistory(props.auth.id);
          props.navigation.navigate('History Transaction');
        }}>
        Back To Home
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    marginVertical: 40,
    fontFamily: 'Mulish-Bold',
  },
  text2: {
    marginTop: 40,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history,
});

const mapDispatchToProps = {
  getHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingPayment);
