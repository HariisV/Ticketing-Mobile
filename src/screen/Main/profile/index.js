import React, {useEffect, useState} from 'react';
import {URL_BACKEND} from '@env';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {Root, Popup, SPSheet} from 'react-native-popup-confirm-toast';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux';
import {getUserById} from '../../../stores/action/auth';
import axios from '../../../utils/axios';
import styles from './style-profile';
import Icon from 'react-native-vector-icons/Feather';

const Profiles = props => {
  const handleChangePage = data => {
    props.navigation.navigate('MainProfileScreen', {
      screen: data,
    });
  };

  const handleLogout = () => {
    AsyncStorage.clear();
    // console.log('running1');
    props.navigation.navigate('AuthScreen', {
      screen: 'LandingPage',
    });
  };
  const functionImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    console.log('HA');
    launchImageLibrary(options, response => {
      console.log('hap');
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log(response.assets[0]);
        handleImageSubmit({
          uri: response.assets[0].uri,
          name: response.assets[0].fileName,
          type: response.assets[0].type,
        });
      }
    });
  };
  const handleImageSubmit = data => {
    const setData = {
      image: data,
    };

    const formData = new FormData();
    for (const data in setData) {
      formData.append(data, setData[data]);
    }

    console.log('FORM DATA =>', formData);
    axios
      .patch('/user/update/image', formData)
      .then(res => {
        console.log(res);
        Popup.show({
          type: 'success',
          title: 'Success!',
          timing: 2000,
          textBody: 'Success To Update Image. ',
          buttonText: 'Close',
        });
        props.getUserById(user.id);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleDeleteImage = () => {
    handleImageSubmit(null);
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const launchCameraFuncion = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else if (response.errorCode) {
        requestCameraPermission();
      } else {
        // const source = {uri: response.uri};
        console.log('Successs =>', response.assets[0]);
        // console.log('response', JSON.stringify(response));
        handleImageSubmit({
          uri: response.assets[0].uri,
          name: response.assets[0].fileName,
          type: response.assets[0].type,
        });
      }
    });
  };

  const component = props => {
    return (
      <>
        <View style={styles.containerComponent}>
          <TouchableOpacity
            style={styles.containerText}
            // onPress={requestCameraPermission}
            onPress={launchCameraFuncion}>
            <Icon name="camera" style={styles.inputIcon} size={26} />
            <Text style={styles.textIcon}>Upload From Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hrComponent} />
          <TouchableOpacity
            style={styles.containerText}
            onPress={functionImageLibrary}>
            <Icon name="image" style={styles.inputIcon} size={26} />
            <Text style={styles.textIcon}>Upload From Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hrComponent} />
          <TouchableOpacity
            style={styles.containerText}
            onPress={handleDeleteImage}>
            <Icon name="trash-2" style={styles.inputIcon} size={26} />
            <Text style={styles.textIcon}>Delete Image</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  let user = props.auth.userLogin;
  return (
    <SafeAreaView style={styles.wrapper}>
      <Root>
        <View style={styles.container}>
          <Image
            // source={{
            //   uri: `${URL_BACKEND}uploads/user/${user.image}`,
            // }}
            source={
              user.image
                ? {
                    uri: `${URL_BACKEND}uploads/user/${user.image}`,
                  }
                : require('../../../assets/images/user2.png')
            }
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
          <TouchableOpacity
            style={styles.wrapperbutton}
            onPress={() => {
              const spSheet = SPSheet;
              spSheet.show({
                component: () => component({...props, spSheet}),
                dragFromTopOnly: true,
                height: 260,
              });
            }}>
            <View style={styles.inputTimes}>
              <Text style={styles.valueInput}>Update Profile Image</Text>
            </View>
          </TouchableOpacity>
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

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {getUserById};
export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
