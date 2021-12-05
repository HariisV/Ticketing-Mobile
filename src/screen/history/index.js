import React, {useState} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const CheckoutMovie = props => {
  return (
    // // <SafeAreaView style={styles.container}>

    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* <Text style={styles.title}>Thank You!</Text>
          <View style={styles.hr}></View> */}
          <Image
            source={require('../../assets/images/sponsor1.png')}
            style={styles.imageSponsor}
          />
          <Text style={styles.time}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={styles.movie}>Spider-Man: Homecoming</Text>
          <View style={styles.hr}></View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text style={styles.buttonCheckoutText}>Ticket in Active</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* <Text style={styles.title}>Thank You!</Text>
          <View style={styles.hr}></View> */}
          <Image
            source={require('../../assets/images/sponsor2.png')}
            style={styles.imageSponsor}
          />
          <Text style={styles.time}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={styles.movie}>Spider-Man: Homecoming</Text>
          <View style={styles.hr}></View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text style={styles.buttonCheckoutText}>Ticket in Active</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* <Text style={styles.title}>Thank You!</Text>
          <View style={styles.hr}></View> */}
          <Image
            source={require('../../assets/images/sponsor3.png')}
            style={styles.imageSponsor}
          />
          <Text style={styles.time}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={styles.movie}>Spider-Man: Homecoming</Text>
          <View style={styles.hr}></View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text style={styles.buttonCheckoutText}>Ticket in Active</Text>
          </TouchableOpacity>
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
    borderRadius: 20,
  },

  hr: {
    borderBottomColor: '#D6D8E7',
    borderBottomWidth: 1,
    marginTop: 30,
  },
  directionRow: {
    flexDirection: 'row',
  },
  between: {
    justifyContent: 'space-between',
  },

  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 36,
    fontFamily: 'Mulish-Regular',
    fontWeight: '700',
  },
  imageSponsor: {
    // alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  buttonCheckout: {
    marginTop: 30,
    backgroundColor: '#00BA88',
    padding: 15,
    // paddingHorizontal: '38%',
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
  movie: {
    ...fontFam,
    fontWeight: '600',
    fontSize: 22,
    color: 'black',
  },
  time: {
    fontSize: 16,
    // marginTop: 10,
    marginBottom: 10,
  },
});

export default CheckoutMovie;
