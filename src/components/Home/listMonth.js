import React, {useState} from 'react';
import styles from '../../screen/home/style';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import axios from '../../utils/axios';

export default function Upcomingg(props) {
  const [monthAcive, setMonthAcive] = useState('');
  const d = new Date();

  const angkaBulan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const monthNames = [
    '',
    'January',
    'February',
    'Maret',
    'April',
    'May',
    'June',
    'July',
    'Agustus',
    'September',
    'October',
    'November',
    'December',
  ];
  const viewMovie = () => {
    props.navigation.navigate('Main', {
      screen: 'DetailMovie',
      params: {
        idMovie: props.data.id,
      },
    });
  };
  const handleMonth = async e => {
    try {
      setMonthAcive(e);
      const setData = {
        month: e,
      };
      const result = await axios.post('movie/upcoming', setData);
      props.setMovieUpcoming(result.data.data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  return (
    <>
      <FlatList
        horizontal={true}
        data={angkaBulan}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity
            style={
              monthAcive === item
                ? styles.listMonthItemActive
                : styles.listMonthItem
            }
            onPress={() => handleMonth(item)}>
            <Text
              style={
                monthAcive === item
                  ? styles.listMonthTextActive
                  : styles.listMonthText
              }>
              {monthNames[item]}
            </Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
}
