import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
const pp = [1, 2, 3, 4, 5, 6, 7, 8];
const DetailMovie = props => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  console.log(date);
  const handleBook = () => {
    console.log(props.navigation.navigate('OrderMovie'));
    // props.navigation.navigate('AppScreen', {
    //   screen: 'OrderMovie',
    // });
    // props.navigation
    props.navigation.navigate('OrderMovie', {
      params: {
        nama: 'Bagus TH',
      },
    });
  };
  let selectedDate = moment(date).format('DD/MM/YYYY');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageViewContainer}>
          <Image
            style={styles.imageView}
            source={require('../../assets/images/movie1.png')}
          />
        </View>
        <View>
          <Text style={styles.movieTitle}>Spider-Man: Homecoming</Text>
          <Text style={styles.movieGenre}>Adventure, Action, Sci-Fi</Text>
        </View>
        <View style={styles.movieDetailContainer}>
          <View style={styles.movieDetail}>
            <View style={styles.movieDetailItem}>
              <Text style={styles.detailQuenst}>Release date</Text>
              <Text style={styles.detailValue}>June 28, 2017</Text>
            </View>
            <View style={styles.movieDetailItem}>
              <Text style={styles.detailQuenst}>Directed by</Text>
              <Text style={styles.detailValue}>Jon Watss</Text>
            </View>
          </View>
          <View style={styles.movieDetail}>
            <View style={styles.movieDetailItem}>
              <Text style={styles.detailQuenst}>Duration</Text>
              <Text style={styles.detailValue}>2 hrs 13 min</Text>
            </View>
            <View style={styles.movieDetailItem}>
              <Text style={styles.detailQuenst}>Casts</Text>
              <Text style={styles.detailValue}>Tom Holland, Robert., etc.</Text>
            </View>
          </View>
          <View style={styles.hr}></View>
        </View>
        <View>
          <Text style={styles.movieSypnosisTitle}>Sypnosis</Text>
          <Text style={styles.movieSypnosis}>
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.{' '}
          </Text>
        </View>
        <View style={styles.showtimesContainer}>
          <Text style={styles.scheduleTitle}>Showtimes and Tickets</Text>

          <Picker
            style={styles.inputTimes}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Aceh" value="java" />
            <Picker.Item label="Makasar" value="js" />
          </Picker>

          <Pressable onPress={() => setOpen(true)}>
            <View pointerEvents="none">
              <View style={styles.inputTimes}>
                <Icon name="calendar" style={styles.inputIcon} />
                {/* <View> */}
                <Text style={styles.valueInput}>{selectedDate}</Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View>
          <View style={styles.scheduleCard}>
            <View style={styles.scheduleImageContainer}>
              <Image
                style={styles.scheduleImage}
                source={require('../../assets/images/sponsor1.png')}
              />
              <Text style={styles.scheduleAddress}>
                Whatever street No.12, South Purwokerto
              </Text>
            </View>
            <View style={styles.scheduleList}>
              {pp.map(e => {
                return (
                  // <View style={styles.scheduleListItem}>
                  <Text key={e} style={styles.scheduleListItem}>
                    {e}8:30am
                  </Text>
                  // {/* </View> */}
                );
              })}
            </View>
            <View style={styles.schedulePriceContainer}>
              <Text style={styles.schedulePrice}>Price</Text>
              <Text style={styles.schedulvePriceValue}>$10.00/seat</Text>
            </View>
            <TouchableOpacity style={styles.buttonBook} onPress={handleBook}>
              <Text style={styles.buttonBookText}>Book Now</Text>
            </TouchableOpacity>
            <View></View>
          </View>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          androidVariant="nativeAndroid"
          minimumDate={new Date()}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  containerChild: {
    margin: 20,
  },

  imageViewContainer: {
    padding: 40,
    margin: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 51.1,
    shadowRadius: 5,
  },
  imageView: {
    alignSelf: 'center',
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  buttonBook: {
    backgroundColor: '#5F2EEA',
    padding: 15,
    borderRadius: 5,
    paddingHorizontal: '38%',
    marginBottom: 30,
    elevation: 9,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 51.1,
    shadowRadius: 5,
  },
  buttonBookText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  textJoin: {
    textAlign: 'center',
    marginHorizontal: 40,
  },
  movieTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Mulish-Reguler',
  },
  movieGenre: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    fontFamily: 'Mulish-Reguler',
    marginBottom: 30,
  },
  hr: {
    borderBottomColor: '#D6D8E7',
    borderBottomWidth: 1,
    marginVertical: 30,
  },
  movieDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  movieDetailItem: {
    marginHorizontal: 10,
    width: 140,
  },
  detailQuenst: {
    fontSize: 14,
    fontFamily: 'Mulish-Regular',
    color: '#8692A6',
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'Mulish-Medium',
    fontWeight: '200',
    color: '#121212',
  },
  movieSypnosisTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: 'black',
    fontFamily: 'Mulish-Reguler',
  },
  movieSypnosis: {
    fontSize: 15,
    marginBottom: 60,
    color: '#4E4B66',
    fontFamily: 'Mulish-Medium',
    fontWeight: '400',
    lineHeight: 24,
  },
  scheduleTitle: {
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
    marginBottom: 30,
  },
  showtimesContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  inputTimes: {
    borderColor: '#EFF0F6',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#EFF0F6',
    borderRadius: 15,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    // paddingHorizontal: 20,
    fontSize: 25,
    // padding: 50,
  },
  valueInput: {
    margin: 15,
    fontSize: 15,
    alignItems: 'center',
    // position: 'absolute',
    // top: 30,
    color: 'black',
  },
  scheduleCard: {
    borderColor: '#EFF0F6',
    borderWidth: 2,
    padding: 30,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    elevation: 5,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 541,
    shadowRadius: 244,
    backgroundColor: 'white',
    display: 'flex',
    // marginHorizontal: 20,

    // alignItems: 'center',
  },
  scheduleImageContainer: {
    alignItems: 'center',
  },
  scheduleImage: {
    width: 100,
    height: 50,
    marginBottom: 10,
    padding: 0,
    margin: 0,
    resizeMode: 'contain',
  },
  scheduleList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scheduleListItem: {
    marginRight: '6%',
    marginTop: 20,
    flexWrap: 'nowrap',
    color: '#A0A3BD',
    color: '#4E4B66',
    fontSize: 15,
    fontFamily: 'Mulish-Reguler',
    fontWeight: '600',
  },
  scheduleAddress: {
    fontSize: 17,
    width: 230,
    textAlign: 'center',
    fontFamily: 'Mulish-Reguler',
    fontWeight: '600',
  },
  schedulePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  schedulePrice: {
    fontSize: 18,
  },
  schedulvePriceValue: {
    fontSize: 18,
    fontFamily: 'Mulish-Reguler',
    color: 'black',
    fontWeight: '700',
    marginRight: 20,
  },
});

export default DetailMovie;
