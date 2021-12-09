import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import styles from '../screen/main/history/style';
import styles from '../screen/Main/history/style';
const ListHistory = props => {
  console.log(props);
  const handleChangePage = () => {
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
