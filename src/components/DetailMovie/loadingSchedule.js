import React from 'react';
import styles from '../../screen/Main/Movie/Detail/style';
import {View, Text, ActivityIndicator} from 'react-native';

export default function noSchedule() {
  return (
    <View style={styles.scheduleCard}>
      <View style={styles.scheduleImageContainer}>
        <ActivityIndicator size="large" color="#5F2EEA" />
        <Text style={[styles.scheduleAddress, {fontWeight: 'bold'}]}>
          Search Schedule
        </Text>
      </View>
    </View>
  );
}
