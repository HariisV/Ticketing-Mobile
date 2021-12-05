import React, {useState} from 'react';
import moment from 'moment';
import ListHistory from '../../components/listHistory';
import styles from './style';
import {View, ScrollView} from 'react-native';
const CheckoutMovie = props => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <ListHistory navigation={props.navigation} />
        <ListHistory navigation={props.navigation} />
        <ListHistory navigation={props.navigation} />
      </View>
    </ScrollView>
  );
};

export default CheckoutMovie;
