import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Seat from '../../../../components/seat';

const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const DetailMovie = props => {
  const params = props.route.params.setData;
  console.log(params);
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);

  useEffect(() => {
    props.navigation.setOptions({
      title: `Choose Seat`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#5F2EEA',
      },
    });
  });
  useEffect(() => {
    console.log(props.route.params);
  }, []);

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      if (selectedSeat.length < 4) setSelectedSeat([...selectedSeat, data]);
    }
  };
  const handleCheckout = () => {
    const setData = {
      ...params,
      selectedSeat: selectedSeat,
    };
    props.navigation.navigate('Main', {
      screen: 'CheckoutMovie',
      params: {setData},
    });
  };

  let bookingDay = moment(params.dateBooking).format('dddd, DD/MM/YYYY');
  // let selectedSeatView = selectedSeat.join(', ');

  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        showHideTransition="fade"
      />
      <View style={styles.card}>
        <Text style={styles.Title}>Choose Your Seat</Text>
        <View style={styles.hrPrimary}></View>
        <View style={styles.seatContainer}>
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />
        </View>
        {selectedSeat.length == 4 ? (
          <Text style={styles.limitSeat}>Maksimal 4 Seat</Text>
        ) : null}
        <Text style={styles.titleKey}>Seating Key</Text>
        <View style={styles.keyContainer}>
          <View style={styles.keyTitleContainer}>
            <Icon name="arrow-down" style={styles.keyIcon} />
            <Text style={styles.titleListSeat}> A-G</Text>
          </View>
          <View style={styles.keyTitleContainer}>
            <Icon name="arrow-right" style={styles.keyIcon} />
            <Text style={styles.titleListSeat}> 1-14</Text>
          </View>
        </View>
        <View style={styles.keyContainer}>
          <View style={styles.keyList}>
            <View style={styles.keyAvailable}></View>
            <Text style={styles.keyTitle}>Availabe</Text>
          </View>
          <View style={styles.keyList}>
            <View style={styles.keySelected}></View>
            <Text style={styles.keyTitle}>Selected</Text>
          </View>
          <View style={styles.keyList}>
            <View style={styles.keySold}></View>
            <Text style={styles.keyTitle}>Sold </Text>
          </View>
        </View>
      </View>

      <View style={[styles.orderInfo, styles.card]}>
        <View style={styles.infoContainer}>
          <Image
            // source={require('../../../../assets/images/sponsor1.png')}
            source={
              params.schedule.premier == 'hiFlix'
                ? require(`../../../../assets/images/hiFlix.png`)
                : params.schedule.premier == 'ebuId'
                ? require(`../../../../assets/images/ebuId.png`)
                : params.schedule.premier == 'CineOne21'
                ? require(`../../../../assets/images/CineOne21.png`)
                : require(`../../../../assets/images/CineOne21.png`)
            }
            style={styles.infoImage}
          />
          <Text style={styles.infoSchedule}>
            {params.schedule.premier} Cinema
          </Text>
          <Text style={styles.infoMovie}>{params.movie.name}</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailQ}>{bookingDay}</Text>
            <Text style={styles.detailA}>{params.timeBooking}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailQ}>One ticket price</Text>
            <Text style={styles.detailA}>${params.schedule.price}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailQ}>Seat choosed</Text>
            <Text style={styles.detailA}>
              {selectedSeat.length > 0 ? selectedSeat.join(', ') : '-'}
            </Text>
          </View>
          <View style={styles.hrLight}></View>
          <View style={styles.detailContainer}>
            <Text style={styles.detailQPrice}>Total Payment</Text>
            <Text style={styles.detailAPrice}>
              $ {selectedSeat.length * params.schedule.price}
            </Text>
          </View>
        </View>
      </View>
      {selectedSeat.length > 0 ? (
        <TouchableOpacity
          style={styles.buttonCheckout}
          onPress={handleCheckout}>
          <Text style={styles.buttonCheckoutText}>Checkout Now</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonBookLocked}>
          <Text style={styles.buttonCheckoutText}>Please Select One Seat</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const primary = '#5F2EEA';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FC',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
    marginHorizontal: 20,
  },
  hrPrimary: {
    marginTop: 20,
    borderWidth: 6,
    borderRadius: 20,
    borderColor: primary,
  },
  hrPrimary2: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: primary,
    marginVertical: 30,
  },
  title2: {
    textAlign: 'center',
  },
  hrLight: {
    marginTop: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#E6E6E6',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {width: 410, height: 550},
    shadowOpacity: 444,
    shadowRadius: 445,
  },
  available: {
    backgroundColor: '#D6D8E7',
    marginRight: 8,
    paddingBottom: 10,
    flex: 1,
  },
  seatContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  jarak: {
    backgroundColor: 'white',
    height: 5,
  },
  keyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 205,
  },
  keyList: {
    flexDirection: 'row',
    marginBottom: 25,
    // marginRight: 30,
    // justifyContent: 'space-between',
  },
  keyAvailable: {
    backgroundColor: '#D6D8E7',
    marginRight: 8,
    paddingBottom: 10,
    height: 25,
    width: 25,
    borderRadius: 5,
  },
  keySelected: {
    backgroundColor: primary,
    marginRight: 8,
    paddingBottom: 10,
    height: 25,
    width: 25,
    borderRadius: 5,
  },
  keySold: {
    backgroundColor: '#6E7191',
    marginRight: 8,
    paddingBottom: 10,
    height: 25,
    width: 25,
    borderRadius: 5,
  },
  keyTitle: {
    alignSelf: 'center',
    fontSize: 16,
  },
  titleListSeat: {
    fontWeight: '600',
    color: '#4E4B66',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'Mulish-Reguler',
    // marginTop: 24,
  },
  keyTitleContainer: {
    flexDirection: 'row',
    // marginBottom: 20,
    // marginVertical: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  keyIcon: {
    fontSize: 28,
    color: 'black',
    marginRight: 5,
  },
  titleKey: {
    marginTop: 10,
    // marginBottom: 2,
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Mulish-Reguler',
  },
  Title: {
    fontWeight: '800',
    color: '#14142B',
    fontSize: 24,
    fontFamily: 'Mulish-Medium',
  },
  infoImage: {
    // marginTop: 10,
    alignSelf: 'center',
    width: 100,
    // height: 100,
    resizeMode: 'contain',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoSchedule: {
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
    fontSize: 26,
    color: '#14142B',
    fontWeight: '600',
  },
  infoMovie: {
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: '#14142B',
    fontWeight: '200',
    marginTop: 5,
    marginBottom: 35,
  },
  detailQ: {
    color: '#6B6B6B',
    fontFamily: 'Mulish-Bold',
    fontWeight: '400',
    fontSize: 18,
  },
  detailA: {
    color: '#14142B',
    fontFamily: 'Mulish-Bold',
    fontWeight: '600',
    fontSize: 18,
  },
  detailQPrice: {
    color: '#6B6B6B',
    fontFamily: 'Mulish-Bold',
    fontWeight: '400',
    fontSize: 20,
    alignSelf: 'center',
  },
  detailAPrice: {
    color: primary,
    fontFamily: 'Mulish-Bold',
    fontWeight: '800',
    fontSize: 26,
  },
  buttonCheckout: {
    marginTop: 40,
    backgroundColor: '#5F2EEA',
    padding: 20,
    borderRadius: 5,
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
  limitSeat: {
    textAlign: 'center',
    marginVertical: 5,
  },

  buttonBookLocked: {
    marginTop: 40,
    backgroundColor: '#9985d0',
    padding: 20,
    borderRadius: 5,
    marginBottom: 30,
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 51.1,
    shadowRadius: 5,
    borderRadius: 10,
  },
});

export default DetailMovie;
