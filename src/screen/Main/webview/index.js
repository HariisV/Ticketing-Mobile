import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {HeaderBackButton} from 'react-navigation';

export default function Index(props) {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Pay Your Order',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#5F2EEA',
      },
    });
  }, []);
  let url = props.route.params.url;
  return (
    <>
      <WebView source={{uri: url}} />
    </>
  );
}
