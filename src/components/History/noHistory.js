import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import styles from '../screen/main/history/style';
import styles from '../../screen/Main/history/style';
const ListHistory = props => {
  console.log(props);
  const handleChangePage = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.card}>
      <Text style={[styles.movie, {textAlign: 'center', marginTop: 20}]}>
        You never bought a ticket
      </Text>
      <View style={styles.hr} />
      <TouchableOpacity
        style={styles.buttonCheckout}
        onPress={handleChangePage}>
        <Text style={styles.buttonCheckoutText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ListHistory;
