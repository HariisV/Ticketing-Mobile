import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import { Button } from 'react-native-elements';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View>
            <Text>
              Nearest Cinema,s Newest Movie,
            </Text>
            <Text style={styles.heroTitle}>
              Find out now!
            </Text>
            <Image style={styles.imageHero} source={require('../../assets/images/hero.png')} />
          </View>
          <View >
            <View>
              <View style={styles.title}>
                <Text>
                  Now Showing
                </Text>
                <Text>
                  view alls
                </Text>
              </View>
              <View style={styles.cardContainer}>
                <ScrollView
                  horizontal={true}>
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
            <View style={styles.title}>
              <Text>
                Upcoming Movies
              </Text>
              <Text>
                view alls
              </Text>
            </View>
            <View style={styles.listMonth}>
              <ScrollView horizontal={true}>
                <Button color="black" title="September" buttonStyle={styles.listMonthItem} />
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
              <ScrollView
                horizontal={true}>
                <View style={styles.cardUpcoming}>
                  <Image source={require('../../assets/images/movie1.png')} style={styles.upcomingImage} />
                  <Text style={styles.titleUpcoming}>Black Widow</Text>
                  <Text style={styles.genreUpcoming}>Action, Adventure,Sci-Fi</Text>
                  <Button title='detail' type="outline" buttonStyle={styles.buttonDetail} />
                </View>
                <View style={styles.cardUpcoming}>
                  <Image source={require('../../assets/images/movie1.png')} style={styles.upcomingImage} />
                </View>
                <View style={styles.cardUpcoming}>
                  <Image source={require('../../assets/images/movie1.png')} style={styles.upcomingImage} />
                </View>
                <View style={styles.cardUpcoming}>
                  <Image source={require('../../assets/images/movie1.png')} style={styles.upcomingImage} />
                </View>
                <View style={styles.cardUpcoming}>
                  <Image source={require('../../assets/images/movie1.png')} style={styles.upcomingImage} />
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.Bootom}>
            <Text>
              Bootom
            </Text>
          </View>
        </View>
      </ScrollView >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10
  },
  containerChild: {
    margin: 20,
  },
  imageHero: {
    width: '100%',
    height: 500,
    marginTop: 40
  },
  heroTitle: {
    fontFamily: "Mulish-bold",
    fontSize: 37,
    fontWeight: '600',
    color: '#5F2EEA'

  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50
  },
  cardContainer: {
    marginTop: 50,
    flexDirection: 'row'
  },
  card: {
    padding: 20,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 10
  },
  Bootom: {
    backgroundColor: 'grey',
    marginTop: 200,
  },
  listMonth: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 30
  },
  listMonthItem: {
    marginRight: 15,
    width: 150,
    backgroundColor: '#5F2EEA',
    borderColor: '#5F2EEA',
    borderWidth: 1,
    // color: 'black',
    height: 60,
  },
  buttonDetail: {
    borderRadius: 10,
    // width: '200'
  },
  cardUpcoming: {
    padding: 20,
    borderColor: "#DEDEDE",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 10
  },
  upcomingImage: {
    alignSelf: 'center'
  },
  titleUpcoming: {
    textAlign: 'center'
  },
  genreUpcoming: {
    textAlign: 'center',
    width: 170,
    marginBottom: 20
  }

})

export default App;
