import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {URL_BACKEND} from '@env';

const CheckoutMovie = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: `Detail Transaction`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#5F2EEA',
      },
    });
  });
  console.log(props);
  let data = props.route.params.data;
  return (
    // // <SafeAreaView style={styles.container}>

    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../../../assets/images/success.png')}
            style={styles.successImage}
          />
          <Text style={styles.title}>Thank You!</Text>
          <Text style={styles.success}>Your transaction was successful</Text>
          <View style={styles.qr}>
            <QRCode
              value={`${URL_BACKEND}/booking/usedTicket/${data.id}`}
              size={150}
            />
          </View>
          <View style={styles.hr}></View>
          <View>
            <View style={[styles.directionRow, styles.between]}>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Movie</Text>
                <Text style={styles.value} numberOfLines={1}>
                  {data.name}
                </Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Premier</Text>
                <Text style={styles.value}>{data.premier}</Text>
              </View>
            </View>
            <View style={[styles.directionRow, styles.between]}>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>
                  {moment(data.dateBooking).format('DD MMM')}
                </Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.value}>
                  {data.timeBooking ? data.timeBooking.slice(0, 5) : ''}
                </Text>
              </View>
            </View>
            <View style={[styles.directionRow, styles.between]}>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Count</Text>
                <Text style={styles.value}>{data.totalTicket} pcs</Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Seats</Text>
                <Text style={styles.value}>
                  {data.seat.length > 0 ? data.seat.join(', ') : '-'}
                </Text>
              </View>
            </View>
            <View style={[styles.card2, styles.directionRow, styles.between]}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>${data.totalPayment}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const primary = '#5F2EEA';
const fontFam = {fontFamily: 'Mulish-Bold'};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  scrollView: {
    backgroundColor: '#F7F7FC',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {width: 410, height: 550},
    shadowOpacity: 444,
    shadowRadius: 445,
  },
  card2: {
    padding: 10,
    marginVertical: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#E6E6E6',
  },
  successImage: {
    alignSelf: 'center',
    width: 70,
    height: 70,
  },
  hr: {
    marginTop: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#E6E6E6',
  },
  directionRow: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: 5,
  },
  value: {
    ...fontFam,
    color: 'black',
    marginBottom: 20,
    // overflow: 'hidden',
    // textov
  },
  containerDetail: {
    width: 105,
  },
  total: {
    ...fontFam,
    color: 'black',
    fontSize: 20,
    marginRight: 25,
  },
  qr: {
    marginVertical: 20,
    // width: 200,
    // height: 200,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 36,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  success: {
    textAlign: 'center',
    ...fontFam,
    // color: 'black',
    fontSize: 16,
  },
});

export default CheckoutMovie;
