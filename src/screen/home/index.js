import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';

function App(props) {
  const viewMovie = () => {
    props.navigation.navigate('Main', {screen: 'DetailMovie'});
    console.log('NGEKLIk');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        // backgroundColor="#D6D8E7"
        barStyle="dark-content"
        showHideTransition="fade"
      />

      <ScrollView style={styles.scrollView}>
        <View>
          <View>
            <Text style={styles.heroDesc}>Nearest Cinema,s Newest Movie,</Text>
            <Text style={styles.heroTitle}>Find out now!</Text>
            <Image
              style={styles.imageHero}
              source={require('../../assets/images/hero.png')}
            />
          </View>
          <View>
            <View>
              <View style={styles.title}>
                <Text style={styles.textTitle}>Now Showing</Text>
                <Text style={styles.textDesc}>view alls</Text>
              </View>
              <View style={styles.cardContainer}>
                <ScrollView horizontal={true}>
                  <View style={styles.card}>
                    <Image source={require('../../assets/images/movie1.png')} />
                  </View>
                  <View style={styles.card}>
                    <Image source={require('../../assets/images/movie1.png')} />
                  </View>
                  <View style={styles.card}>
                    <Image source={require('../../assets/images/movie1.png')} />
                  </View>
                  <View style={styles.card}>
                    <Image source={require('../../assets/images/movie1.png')} />
                  </View>
                  <View style={styles.card}>
                    <Image source={require('../../assets/images/movie1.png')} />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.textTitleUpcoming}>
              <Text style={styles.textTitle}>Upcoming Movies</Text>
              <Text style={styles.textDesc}>view alls</Text>
            </View>
            <View style={styles.listMonth}>
              <ScrollView horizontal={true}>
                <Button
                  color="black"
                  title="September"
                  buttonStyle={styles.listMonthItem}
                />
                <Button title="November" buttonStyle={styles.listMonthItem} />
                <Button title="Desember" buttonStyle={styles.listMonthItem} />
                <Button title="Januari" buttonStyle={styles.listMonthItem} />
                <Button title="Februari" buttonStyle={styles.listMonthItem} />
                <Button title="Maret" buttonStyle={styles.listMonthItem} />
                <Button title="April" buttonStyle={styles.listMonthItem} />
                <Button title="Mei" buttonStyle={styles.listMonthItem} />
                <Button title="Juni" buttonStyle={styles.listMonthItem} />
                <Button title="Juli" buttonStyle={styles.listMonthItem} />
                <Button title="Agustus" buttonStyle={styles.listMonthItem} />
              </ScrollView>
            </View>
            <View>
              <ScrollView horizontal={true}>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie1.png')}
                    style={styles.upcomingImage}
                  />
                  <Text style={styles.titleUpcoming}>Black Widow</Text>
                  <Text style={styles.genreUpcoming}>
                    Action, Adventure, Sci-Fi
                  </Text>
                  <Button
                    title="detail"
                    onPress={viewMovie}
                    type="outline"
                    buttonStyle={styles.buttonDetail}
                  />
                </View>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie2.png')}
                    style={styles.upcomingImage}
                  />
                  <Text style={styles.titleUpcoming}>Black Widow</Text>
                  <Text style={styles.genreUpcoming}>
                    Action, Adventure, Sci-Fi
                  </Text>
                  <TouchableOpacity style={styles.buttonDetail}>
                    <Text style={styles.textButtonDetail}>Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie1.png')}
                    style={styles.upcomingImage}
                  />
                </View>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie1.png')}
                    style={styles.upcomingImage}
                  />
                </View>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie1.png')}
                    style={styles.upcomingImage}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.sectionEmail}>
            <Text style={styles.heroDesc}>Be the vanguard of the</Text>
            <Text style={styles.heroTitle}>Moviegoers</Text>
            <TextInput style={styles.input} placeholder="Input Your Email" />
            {/* <View style={styles.shadowButtonJoin}>
              <Button buttonStyle={styles.buttonJoin} title="Join Now"></Button>
            </View> */}
            <TouchableOpacity style={styles.buttonJoin}>
              <Text style={{color: 'white'}}>Join Now</Text>
            </TouchableOpacity>
            <Text style={styles.textJoin}>
              By joining you as a Tickitz member, we will always send you the
              latest updates via email .
            </Text>
          </View>
          <View>
            <Text style={styles.sponsorTitle}>Our Sponsor</Text>
            <View style={styles.sponsorContainer}>
              <View style={styles.sponsor}>
                <Image
                  source={require('../../assets/images/sponsor3.png')}
                  style={styles.sponsorImage}
                />
                <Image
                  source={require('../../assets/images/sponsor2.png')}
                  style={styles.sponsorImage}
                />
                <Image
                  source={require('../../assets/images/sponsor1.png')}
                  style={styles.sponsorImage}
                />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.paymentTitle}>Payment Method</Text>
            <View style={styles.paymentContainer}>
              <View style={styles.payment}>
                <Image
                  source={require('../../assets/images/payment1.png')}
                  style={styles.paymentImage}
                />
                <Image
                  source={require('../../assets/images/payment2.png')}
                  style={styles.paymentImage}
                />
                <Image
                  source={require('../../assets/images/payment3.png')}
                  style={styles.paymentImage}
                />
              </View>
            </View>
          </View>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>
              <Image
                styl={styles.legendImage}
                source={require('../../assets/images/logo.png')}
              />
            </Text>
            <Text style={styles.legendText}>
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </Text>
          </View>
          <View style={styles.footer}>
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  containerChild: {
    margin: 20,
  },
  imageHero: {
    width: '100%',
    height: 500,
    marginTop: 40,
  },
  heroTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 52,
    fontWeight: '800',
    color: '#5F2EEA',
  },
  heroDesc: {
    fontSize: 18,
    marginTop: 30,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  textTitleUpcoming: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  cardContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },
  card: {
    padding: 20,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 30,
  },
  footer: {
    // backgroundColor: 'grey',
    marginTop: 30,
  },
  listMonth: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 40,
  },
  listMonthItem: {
    marginRight: 15,
    width: 150,
    backgroundColor: '#5F2EEA',
    borderColor: '#5F2EEA',
    borderWidth: 1,
    height: 60,
  },
  buttonDetail: {
    borderRadius: 10,
    marginBottom: 30,
    borderColor: '#5F2EEA',
    borderWidth: 1,
    color: 'black',
    paddingVertical: 5,
  },
  textButtonDetail: {
    color: '#5F2EEA',
    textAlign: 'center',
  },
  cardUpcoming: {
    paddingHorizontal: 20,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 30,
    width: 200,
  },
  upcomingImage: {
    alignSelf: 'center',
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  titleUpcoming: {
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
    fontWeight: '600',
    color: 'black',
  },
  genreUpcoming: {
    textAlign: 'center',
    // width: 140,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionEmail: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 70,
    marginHorizontal: 40,
    width: 300,
  },
  input: {
    height: 60,
    borderColor: '#DEDEDE',
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    borderRadius: 15,
  },
  shadowButtonJoin: {
    elevation: 10,
    marginBottom: 30,
    borderRadius: 15,
  },
  buttonJoin: {
    backgroundColor: '#5F2EEA',
    padding: 15,
    borderRadius: 15,
    paddingHorizontal: '38%',
    marginBottom: 30,
  },
  textJoin: {
    textAlign: 'center',
    marginHorizontal: 40,
  },
  sponsorTitle: {
    fontFamily: 'Mulish-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  sponsorContainer: {
    borderColor: '#DEDEDE',
    borderWidth: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  sponsor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sponsorImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textTitle: {
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
    fontWeight: '700',
    color: '#14142B',
  },
  textDesc: {
    fontSize: 14,
    color: '#5F2EEA',
    justifyContent: 'flex-end',
  },
  paymentTitle: {
    fontFamily: 'Mulish-Bold',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 30,
  },
  paymentContainer: {
    borderColor: '#DEDEDE',
    borderWidth: 1,
    paddingHorizontal: 30,
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentImage: {
    width: 60,
    height: 60,
    // marginRight: 30,
    resizeMode: 'contain',
  },
  fieldSet: {
    marginTop: 50,
    padding: 30,
    paddingHorizontal: 15,
    // paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#5F2EEA',
  },
  legend: {
    position: 'absolute',
    top: -40,
    height: 70,
    left: 30,
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF',
  },
  legendText: {
    color: 'black',
  },
  legendImage: {
    width: 10,
  },
});

export default App;
