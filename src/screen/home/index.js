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
import styles from './style';
// impor styles
function App(props) {
  const viewMovie = () => {
    props.navigation.navigate('Main', {screen: 'DetailMovie'});
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar
        animated={true}
        // backgroundColor="#D6D8E7"
        barStyle="dark-content"
        showHideTransition="fade"
      /> */}

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
                    <Image
                      source={require('../../assets/images/movie1.png')}
                      style={styles.showingImage}
                    />
                  </View>
                  <View style={styles.card}>
                    <Image
                      source={require('../../assets/images/movie1.png')}
                      style={styles.showingImage}
                    />
                  </View>
                  <View style={styles.card}>
                    <Image
                      source={require('../../assets/images/movie1.png')}
                      style={styles.showingImage}
                    />
                  </View>
                  <View style={styles.card}>
                    <Image
                      source={require('../../assets/images/movie1.png')}
                      style={styles.showingImage}
                    />
                  </View>
                  <View style={styles.card}>
                    <Image
                      source={require('../../assets/images/movie1.png')}
                      style={styles.showingImage}
                    />
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

                  <TouchableOpacity
                    style={styles.buttonDetail}
                    onPress={viewMovie}>
                    <Text style={styles.textButtonDetail}>Details</Text>
                  </TouchableOpacity>
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

                  <TouchableOpacity
                    style={styles.buttonDetail}
                    onPress={viewMovie}>
                    <Text style={styles.textButtonDetail}>Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie3.png')}
                    style={styles.upcomingImage}
                  />
                  <Text style={styles.titleUpcoming}>Black Widow</Text>
                  <Text style={styles.genreUpcoming}>
                    Action, Adventure, Sci-Fi
                  </Text>

                  <TouchableOpacity
                    style={styles.buttonDetail}
                    onPress={viewMovie}>
                    <Text style={styles.textButtonDetail}>Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie4.png')}
                    style={styles.upcomingImage}
                  />
                  <Text style={styles.titleUpcoming}>Black Widow</Text>
                  <Text style={styles.genreUpcoming}>
                    Action, Adventure, Sci-Fi
                  </Text>

                  <TouchableOpacity
                    style={styles.buttonDetail}
                    onPress={viewMovie}>
                    <Text style={styles.textButtonDetail}>Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardUpcoming}>
                  <Image
                    source={require('../../assets/images/movie5.png')}
                    style={styles.upcomingImage}
                  />
                  <Text style={styles.titleUpcoming}>Black Widow</Text>
                  <Text style={styles.genreUpcoming}>
                    Action, Adventure, Sci-Fi
                  </Text>

                  <TouchableOpacity
                    style={styles.buttonDetail}
                    onPress={viewMovie}>
                    <Text style={styles.textButtonDetail}>Details</Text>
                  </TouchableOpacity>
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

                  <TouchableOpacity
                    style={styles.buttonDetail}
                    onPress={viewMovie}>
                    <Text style={styles.textButtonDetail}>Details</Text>
                  </TouchableOpacity>
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
            {/* <Text style={styles.legend}> */}
            <View style={styles.legendImageContainer}>
              <Image
                style={styles.legendImage}
                source={require('../../assets/images/logo.png')}
              />
            </View>
            {/* </Text> */}
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

export default App;
