import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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

  return (
    // // <SafeAreaView style={styles.container}>

    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/success.png')}
            style={styles.successImage}
          />
          <Text style={styles.title}>Thank You!</Text>
          <Text style={styles.success}>Your transaction was successful</Text>
          <Image
            source={require('../../assets/images/qr.png')}
            style={styles.qr}
          />
          <View style={styles.hr}></View>
          <View>
            <View style={[styles.directionRow, styles.between]}>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Movie</Text>
                <Text style={styles.value} numberOfLines={1}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  at ipsam necessitatibus perferendis sit consequuntur
                  consequatur hic. Magni, laboriosam dolorem rerum beatae
                  excepturi asperiores, labore inventore quam reiciendis
                  veritatis iusto!
                </Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Category</Text>
                <Text style={styles.value}>PG-13</Text>
              </View>
            </View>
            <View style={[styles.directionRow, styles.between]}>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>07 Jul</Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Time</Text>
                <Text style={styles.value}>2:00pm</Text>
              </View>
            </View>
            <View style={[styles.directionRow, styles.between]}>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Count</Text>
                <Text style={styles.value}>3 pcs</Text>
              </View>
              <View style={styles.containerDetail}>
                <Text style={styles.label}>Seats</Text>
                <Text style={styles.value}>C4, C5, C6</Text>
              </View>
            </View>
            <View style={[styles.card2, styles.directionRow, styles.between]}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>$30.00</Text>
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
    width: 200,
    height: 200,
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
