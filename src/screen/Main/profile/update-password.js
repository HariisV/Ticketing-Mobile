import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './style';
import axios from '../../../utils/axios';
import {Root, Popup} from 'react-native-popup-confirm-toast';

const UpdatePassword = props => {
  const [isNull, setIsNull] = useState({
    status: true,
    msg: 'Password Tidak Boleh Kosong',
  });
  const [form, setForm] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  useEffect(() => {
    props.navigation.setOptions({
      title: `Update Password`,
    });
  });

  const handleInput = (value, name) => {
    setForm({...form, [name]: value});
  };
  useEffect(() => {
    if (form.newPassword.length < 5) {
      setIsNull({
        status: true,
        msg: 'Minimal 5 Karakter',
      });
    } else if (form.newPassword !== form.confirmPassword) {
      setIsNull({
        status: true,
        msg: 'Password & Konfirmasi Password Berbeda',
      });
    } else {
      setIsNull({
        status: false,
        msg: '',
      });
    }
  }, [form.newPassword, form.confirmPassword]);
  const handleSubmit = () => {
    Alert.alert('Confirmation', 'Are you sure to update Password ?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          axios
            .post('/user/update/password', form)
            .then(res => {
              console.log(res);
              Popup.show({
                type: 'success',
                title: 'Success!',
                timing: 3000,
                textBody: 'Success To Update Password. ',
                buttonText: 'Close',
              });
              setTimeout(() => {
                props.navigation.navigate('Profile');
              }, 3000);
            })
            .catch(err => {
              Popup.show({
                type: 'danger',
                title: 'Error!',
                // timing: 5000,
                textBody: err.response.data.msg,
                buttonText: 'Close',
                okButtonTextStyle: {color: 'black'},
                okButtonStyle: {backgroundColor: '#DEDE'},
              });
            });
        },
      },
    ]);
  };
  return (
    <Root>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.desc}>
              You must enter your current password and then type your new
              password twice.
            </Text>
            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Input New Password"
              onChangeText={e => handleInput(e, 'newPassword')}
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Confirm Your New Password"
              onChangeText={e => handleInput(e, 'confirmPassword')}
            />
            {isNull.status ? (
              <>
                <Text style={{marginTop: 250, textAlign: 'center'}}>
                  {isNull.msg}
                </Text>
                <TouchableOpacity
                  style={[
                    styles.buttonDetail,
                    {
                      marginTop: 20,
                      backgroundColor: '#6c757d',
                      borderColor: '#6c757d',
                    },
                  ]}>
                  <Text style={styles.textButtonDetail}>Update</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={[styles.buttonDetail, {marginTop: 250}]}
                onPress={handleSubmit}>
                <Text style={styles.textButtonDetail}>Update</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </Root>
  );
};

export default UpdatePassword;
