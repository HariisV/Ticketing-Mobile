import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import {Root, Popup} from 'react-native-popup-confirm-toast';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {connect} from 'react-redux';
import {getUserById} from '../../../stores/action/auth';

const getToken = async () => {
  // const dataToken = await AsyncStorage.getItem('token');
  // console.log(dataToken);
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({[store[i][0]]: store[i][1]});
        return true;
      });
    });
  });
};
const Profiles = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChangePage = data => {
    props.navigation.navigate('MainProfileScreen', {
      screen: data,
    });
  };
  const handleLogout = () => {
    // getToken();
    // console.log(props);
    // alert('Berhasil Apus');
    AsyncStorage.clear();

    // props.navigation.navigate('Main');
    // props.navigation.navigate('AuthScreen', {screen: 'Login'});
    // props.navigation.navigate('AuthScreen', {screen: 'Login'});
    // props.navigation.navigate('MainProfileScreen', {
    //   screen: data,
    // });
    // props.navigation.navigate({routeName: 'AuthScreen'});
    // console.log(props.navigation());
    // console.log('HAII');

    // props.navigation.navigate('Login');
  };
  let user = props.auth.userLogin;
  return (
    <SafeAreaView style={styles.wrapper}>
      <Root>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/user.png')}
            style={styles.image}
          />

          <Text style={styles.name}>
            {user.firstName + ' ' + user.lastName}
          </Text>
          <Text style={styles.email}>{user.email}</Text>
          <Pressable
            style={styles.wrapperbutton}
            onPress={() => handleChangePage('UpdateProfile')}>
            <View pointerEvents="none">
              <View style={styles.inputTimes}>
                <Text style={styles.valueInput}>Update Profile</Text>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.wrapperbutton} onPress={toggleModal}>
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
          <TouchableOpacity
            // onPress={handleLogout}
            onPress={() =>
              Popup.show({
                type: 'confirm',
                title: 'Logout ?',
                textBody: 'Are you sure to logout ?',
                buttonText: 'Logout',
                confirmText: 'Cancel',
                okButtonStyle: {backgroundColor: '#5F2EEA'},
                callback: () => handleLogout(),
              })
            }>
            <View>
              <View style={styles.inputTimes}>
                <Text style={styles.valueInput}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Root>
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
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {getUserById};

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
