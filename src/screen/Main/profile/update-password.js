import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const UpdatePassword = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: `Update Password`,
    });
  });
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.desc}>
            You must enter your current password and then type your new password
            twice.
          </Text>
          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Input Your Email"
          />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder="Input Your Email" />
          <TouchableOpacity style={[styles.buttonDetail, {marginTop: 250}]}>
            <Text style={styles.textButtonDetail}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdatePassword;
