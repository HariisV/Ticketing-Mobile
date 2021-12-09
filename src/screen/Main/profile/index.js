import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  SafeAreaView,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const handleLogout = async () => {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('refreshToken');
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/user.png')}
          style={styles.image}
        />
        {/* <Button title="Show modal" onPress={toggleModal} /> */}
        <View style={{flex: 1}}>
          <Modal isVisible={isModalVisible}>
            <View style={{flex: 1}}>
              <View style={styles.content}>
                <Text style={styles.contentTitle}>Hi 👋!</Text>
                <Text style={{fontSize: 26}}>Comming Soon </Text>
              </View>
              <Button title="Close" onPress={toggleModal} />
            </View>
          </Modal>
        </View>
        <Text style={styles.name}>Robert Chandra</Text>
        <Text style={styles.email}>robert@gmail.com</Text>
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
        <Pressable style={styles.wrapperbutton} onPress={handleLogout}>
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

export default Profiles;
