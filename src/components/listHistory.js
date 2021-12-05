import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../screen/history/style';

const ListHistory = props => {
  const handleChangePage = () => {
    // console.log(props.props, 'asd');
    // props.props.navigate('MainScreen', {screen: 'ResultTicket'});
    // console.log(props.navigation.navigate);
    props.navigation.navigate('Main', {
      screen: 'ResultTicket',
    });
  };
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/sponsor2.png')}
        style={styles.imageSponsor}
      />
      <Text style={styles.time}>Tuesday, 07 July 2020 - 04:30pm</Text>
      <Text style={styles.movie}>Spider-Man: Homecoming</Text>
      <View style={styles.hr}></View>
      <TouchableOpacity
        style={styles.buttonCheckout}
        onPress={handleChangePage}>
        <Text style={styles.buttonCheckoutText}>Ticket in Active</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ListHistory;
