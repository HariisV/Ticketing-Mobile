import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../screen/Main/Movie/Detail/style';

export default function InputFilter(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View style={styles.showtimesContainer}>
        <Text style={styles.scheduleTitle}>Showtimes and Tickets</Text>
        <Picker
          style={styles.inputTimes}
          selectedValue={props.selectedLocation}
          onValueChange={(itemValue, itemIndex) =>
            props.setselectedLocation(itemValue)
          }>
          <Picker.Item label="Aceh" value="Aceh" />
          <Picker.Item label="Makasar" value="Makasar" />
        </Picker>
        <Pressable onPress={() => setOpen(true)}>
          <View pointerEvents="none">
            <View style={styles.inputTimes}>
              <Icon name="calendar" style={styles.inputIcon} />
              <Text style={styles.valueInput}>{props.selectedDate}</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <DatePicker
        modal
        open={open}
        date={props.date}
        mode="date"
        androidVariant="nativeAndroid"
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          props.setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
