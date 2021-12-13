import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {connect} from 'react-redux';
import {getUserById} from '../../../stores/action/auth';
import axios from '../../../utils/axios';
import {Button} from 'react-native';
import {Root, Popup} from 'react-native-popup-confirm-toast';

const UpdateProfile = props => {
  let data = props.auth.userLogin;
  const [isNull, setIsNull] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [form, setForm] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
  });
  useEffect(() => {
    props.navigation.setOptions({
      title: `Personal Information`,
    });
  });

  const handleInput = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
    if (!value) {
      setIsNull(true);
    } else {
      setIsNull(false);
    }
    setIsChange(true);
  };
  const handleSubmit = async () => {
    try {
      const setData = {...form};
      const result = await axios.patch('/user/update/profile', setData);
      Popup.show({
        type: 'success',
        title: 'Success!',
        timing: 2000,
        textBody: 'Success To Update Profile. ',
        buttonText: 'Close',
      });
      await props.getUserById(data.id);
      setIsChange(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <Root>
        <View style={styles.container}>
          <View></View>
          <View style={styles.card}>
            <Text style={styles.desc}>
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </Text>
            <View>
              <Text style={styles.label}>First Name</Text>
              <TextInput
                style={styles.input}
                value={form.firstName}
                onChangeText={e => handleInput(e, 'firstName')}
                placeholder="Input Your First Name"
              />
            </View>
            <View>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                style={styles.input}
                value={form.lastName}
                onChangeText={e => handleInput(e, 'lastName')}
                placeholder="Input Your Last Name"
              />
            </View>
            <View>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                value={form.email}
                onChangeText={e => handleInput(e, 'email')}
                placeholder="Enter Your Email"
              />
            </View>
            <View>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput
                style={styles.input}
                value={form.phoneNumber}
                onChangeText={e => handleInput(e, 'phoneNumber')}
                placeholder="Input Your Phone Number"
              />
            </View>
            {!isNull && isChange ? (
              <TouchableOpacity
                style={[styles.buttonDetail, {marginTop: 10}]}
                onPress={handleSubmit}>
                <Text style={styles.textButtonDetail}>Update Profile</Text>
              </TouchableOpacity>
            ) : (
              <>
                {isNull ? (
                  <Text style={{textAlign: 'center'}}>
                    Tidak Boleh Ada Yang Kosong
                  </Text>
                ) : null}
                <TouchableOpacity
                  style={[styles.buttonDetailLock, {marginTop: 10}]}>
                  <Text style={styles.textButtonDetail}>Update Profile</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Root>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapDispatchToProps = {getUserById};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
