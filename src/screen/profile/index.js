import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';

const Profiles = props => {
  const handleChangePage = data => {
    props.navigation.navigate('MainProfileScreen', {
      screen: data,
    });
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/user.png')}
          style={styles.image}
        />
        <Text style={styles.name}>Robert Chandra</Text>
        <Text style={styles.email}>robert@gmail.com</Text>
        <Pressable
          style={styles.wrapperbutton}
          onPress={() => handleChangePage('Profile')}>
          <View pointerEvents="none">
            <View style={styles.inputTimes}>
              <Text style={styles.valueInput}>Update Profile</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.wrapperbutton}
          onPress={() => handleChangePage('Image')}>
          <View pointerEvents="none">
            <View style={styles.inputTimes}>
              <Text style={styles.valueInput}>Update Profile Image</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.wrapperbutton}
          onPress={() => handleChangePage('UpdatePassword')}>
          <View pointerEvents="none">
            <View style={styles.inputTimes}>
              <Text style={styles.valueInput}>Update Password</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.wrapperbutton}
          onPress={() => handleChangePage('Logout</')}>
          <View pointerEvents="none">
            <View style={styles.inputTimes}>
              <Text style={styles.valueInput}>Logout</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const fontFam = {fontFamily: 'Mulish-Bold'};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    marginTop: 40,
    marginHorizontal: 20,
    // marginTop: 100,
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  inputTimes: {
    borderColor: '#EFF0F6',
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: '#EFF0F6',
    borderRadius: 15,
  },
  valueInput: {
    ...fontFam,
    // fontSize: 44,
    padding: 25,
    fontSize: 20,
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  name: {
    ...fontFam,
    textAlign: 'center',
    fontSize: 28,
    marginTop: 20,
    fontWeight: 'bold',
  },
  email: {
    ...fontFam,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 30,
  },
});

export default Profiles;
