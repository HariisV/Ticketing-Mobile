import React from 'react';
import styles from '../../screen/Main/Movie/Detail/style';
import {View, Text} from 'react-native';

export default function noSchedule() {
  return (
    <View style={styles.scheduleCard}>
      <View style={styles.scheduleImageContainer}>
        <Text style={[styles.scheduleAddress, {fontWeight: 'bold'}]}>
          Sorry, We Dont Have Schedule On This Date Or Location
        </Text>
      </View>
    </View>
  );
}
