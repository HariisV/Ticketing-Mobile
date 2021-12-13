import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../screen/Main/history/style';
import moment from 'moment';

const ListHistory = props => {
  const handleChangePage = () => {
    props.navigation.navigate('Main', {
      screen: 'ResultTicket',
      params: {
        data: props.data,
      },
    });
  };
  // Tuesday, 07 July 2020
  let data = props.data;
  let date = moment(data.dateBooking).format('dddd, DD MMM YYYY');
  return (
    <View style={styles.card}>
      <Image
        source={
          data.premier == 'hiFlix'
            ? require(`../../assets/images/hiFlix.png`)
            : props.data.premier == 'ebuId'
            ? require(`../../assets/images/ebuId.png`)
            : props.data.premier == 'CineOne21'
            ? require(`../../assets/images/CineOne21.png`)
            : require(`../../assets/images/CineOne21.png`)
        }
        style={styles.imageSponsor}
      />
      <Text style={styles.time}>
        {date} - {data.timeBooking.slice(0, 5)}
      </Text>
      <Text style={styles.movie}>{data.name}</Text>
      <View style={styles.hr}></View>
      {data.statusPayment == 'Pending' ? (
        <TouchableOpacity
          style={[styles.buttonCheckout, {backgroundColor: '#adb5bd'}]}>
          <Text style={styles.buttonCheckoutText}>Waiting Your Payment</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonCheckout}
          onPress={handleChangePage}>
          <Text style={styles.buttonCheckoutText}>Ticket in Active</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ListHistory;
