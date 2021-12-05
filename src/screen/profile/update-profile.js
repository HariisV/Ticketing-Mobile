import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './style';

const UpdateProfile = props => {
  useEffect(() => {
    props.navigation.setOptions({
      title: `Personal Information`,
    });
  });
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.desc}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>
          <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Your Full Name"
            />
          </View>
          <View>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} placeholder="Enter Your Email" />
          </View>
          <View>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Input Your Phone Number"
            />
          </View>

          <TouchableOpacity style={[styles.buttonDetail, {marginTop: 150}]}>
            <Text style={styles.textButtonDetail}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;
