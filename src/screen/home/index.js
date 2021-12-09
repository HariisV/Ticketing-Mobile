import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style';
import axios from '../../utils/axios';

import UpcomingMovieList from '../../components/Home/upcoming';

function App(props) {
  const [movieShowing, setMovieShowing] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);

  useEffect(() => {
    getDataMovieShowing();
    getDataMovieUpcoming();
  }, []);

  const getDataMovieShowing = async () => {
    try {
      const result = await axios.get(
        'movie?page=1&limit=7&sort=id&sortType=ASC',
      );
      setMovieShowing(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getDataMovieUpcoming = async () => {
    try {
      const result = await axios.get('movie/upcoming');
      setMovieUpcoming(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
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
                <FlatList
                  horizontal={true}
                  data={movieShowing}
                  navigation={props.navigation}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => {
                    <View style={styles.card}>
                      <Image
                        source={require('../../assets/images/movie1.png')}
                        style={styles.showingImage}
                      />
                    </View>;
                  }}
                  renderItem={({item}) => (
                    <View style={styles.card}>
                      <Image
                        source={require('../../assets/images/movie1.png')}
                        style={styles.showingImage}
                      />
                    </View>
                  )}
                />
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
              <FlatList
                horizontal={true}
                data={movieUpcoming}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <UpcomingMovieList {...props} data={item} />
                )}
              />
            </View>
          </View>
          <View style={styles.sectionEmail}>
            <Text style={styles.heroDesc}>Be the vanguard of the</Text>
            <Text style={styles.heroTitle}>Moviegoers</Text>
            <TextInput style={styles.input} placeholder="Input Your Email" />
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
