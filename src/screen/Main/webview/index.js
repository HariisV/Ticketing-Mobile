import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Index(props) {
  let url = props.route.params.url;
  return (
    <>
      <WebView source={{uri: url}} />
    </>
  );
}
