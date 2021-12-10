import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import {connect} from 'react-redux';

import axios from '../../../../utils/axios';

const CheckoutMovie = props => {
  const params = props.route.params.setData;
  const user = props.auth.userLogin;

  const [form, setForm] = useState({
    name: user.firstName + ' ' + user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
  useEffect(() => {
    props.navigation.setOptions({
      title: `Pay Your Order`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#5F2EEA',
      },
    });
  });
  const handleCheckout = async () => {
    try {
      const setData = {
        Email: form.email,
        fullName: form.name,
        phoneNumber: form.phoneNumber,
        paymentMethod: 'Midtrans',
        dateBooking: params.dateBooking,
        movieId: params.movie.id,
        scheduleId: params.schedule.id,
        timeBooking: params.timeBooking,
        seat: params.selectedSeat,
      };
      const result = await axios.post('/booking', setData);
      props.navigation.navigate('WebViewScreen', {
        url: result.data.data.paymentUrl,
      });
      console.log('HHH');
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleInput = (data, name) => {
    setForm({...form, [name]: data});
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.totalPrice}>
        <View style={styles.d_row}>
          <Text style={styles.payment}>Total Payment</Text>
          <Text style={styles.totalPayment}>$30.00</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.Title}>Payment Method</Text>
          <View style={styles.cardPaymentContainer}>
            <View style={styles.cardPayment}>
              <Image
                source={require('../../../../assets/images/payment1.png')}
                style={styles.cardPaymentImage}></Image>
            </View>
            <View style={styles.cardPayment}>
              <Image
                source={require('../../../../assets/images/payment2.png')}
                style={styles.cardPaymentImage}></Image>
            </View>
            <View style={styles.cardPayment}>
              <Image
                source={require('../../../../assets/images/payment3.png')}
                style={styles.cardPaymentImage}></Image>
            </View>
            <View style={styles.cardPayment}>
              <Image
                source={require('../../../../assets/images/payment4.png')}
                style={[
                  styles.cardPaymentImage,
                  styles.cardPaymentPaypal,
                ]}></Image>
            </View>
            <View style={styles.cardPayment}>
              <Image
                source={require('../../../../assets/images/payment5.png')}
                style={styles.cardPaymentImage}></Image>
            </View>
            <View style={styles.cardPayment}>
              <Image
                source={require('../../../../assets/images/payment6.png')}
                style={styles.cardPaymentImage}></Image>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.Title}>Personal Info</Text>
          <View>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Your Full Name"
              value={form.name}
              onChangeText={e => handleInput(e, 'name')}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Your Email"
              value={form.email}
              onChangeText={e => handleInput(e, 'email')}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Your Phone Number"
              value={form.phoneNumber}
              onChangeText={value => handleInput(value, 'phoneNumber')}
            />
          </View>
          <View style={[styles.dRow, styles.alertWarning]}>
            <Image
              source={require('../../../../assets/images/warning.png')}
              style={styles.alertImage}
            />
            <Text style={styles.alertText}>Fill your data correctly</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonCheckout}
          onPress={handleCheckout}>
          <Text style={styles.buttonCheckoutText}>Pay your order</Text>
        </TouchableOpacity>
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
  hrPrimary: {
    marginTop: 20,
    borderWidth: 6,
    borderRadius: 20,
    borderColor: primary,
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
  cardPaymentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardPayment: {
    borderRadius: 5,
    borderWidth: 1,
    width: '45%',
    borderColor: '#E6E6E6',
    marginVertical: 20,
    justifyContent: 'center',
  },
  cardPaymentImage: {
    width: 100,
    height: 80,

    alignSelf: 'center',
    resizeMode: 'contain',
  },
  cardPaymentPaypal: {
    height: 50,
  },
  Title: {
    fontWeight: 'bold',
    color: '#14142B',
    fontSize: 20,
    fontFamily: 'Mulish-Regular',
    marginBottom: 20,
  },
  buttonCheckout: {
    marginTop: 40,
    backgroundColor: '#5F2EEA',
    padding: 20,
    borderRadius: 5,
    marginBottom: 30,
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 51.1,
    shadowRadius: 5,
    borderRadius: 10,
  },
  buttonCheckoutText: {
    color: 'white',
    fontWeight: '700',
    alignSelf: 'center',
    fontSize: 16,
  },
  totalPrice: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingLeft: 50,
    borderColor: '#E6E6E6',
    borderTopWidth: 1,
  },
  d_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  totalPayment: {
    ...fontFam,
    fontSize: 20,
    color: 'black',
  },
  payment: {
    ...fontFam,
    fontSize: 18,
    alignSelf: 'center',
  },
  input: {
    height: 60,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 20,
    marginTop: 15,
  },
  inputLabel: {
    marginTop: 15,
    fontFamily: 'Mulish-Regular',
    fontWeight: '400',
    fontSize: 19,
  },
  dRow: {
    flexDirection: 'row',
  },
  alertWarning: {
    backgroundColor: 'rgba(244, 183, 64, 0.3);',
    padding: 15,
    marginBottom: 20,
  },
  alertImage: {
    width: 30,
    height: 30,
  },
  alertText: {
    ...fontFam,
    fontSize: 16,
    marginLeft: 20,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(CheckoutMovie);
// export default CheckoutMovie;
