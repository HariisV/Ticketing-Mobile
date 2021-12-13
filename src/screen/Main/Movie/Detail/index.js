import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ScrollView, Image, FlatList} from 'react-native';

import moment from 'moment';
import axios from '../../../../utils/axios';

import Description from '../../../../components/DetailMovie/description';
import ScheduleList from '../../../../components/DetailMovie/scheduleList';
import NoSchedule from '../../../../components/DetailMovie/noSchedule';
import InputFilter from '../../../../components/DetailMovie/inputFilter';
import LoadingSchedule from '../../../../components/DetailMovie/loadingSchedule';
import styles from './style';

const DetailMovie = props => {
  const params = props.route.params;

  const [date, setDate] = useState(new Date());
  const [selectedLocation, setselectedLocation] = useState('Aceh');
  const [selectedTime, setselectedTime] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [detailMovie, setDetailMovie] = useState({});
  const [listSchedule, setListSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieDetail();
    getScheduleByMovieId();
  }, []);

  const configHeader = data => {
    props.navigation.setOptions({
      title: data,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#5F2EEA',
      },
    });
  };
  const getMovieDetail = async () => {
    try {
      const result = await axios.get(`movie/${params.idMovie}`);
      setDetailMovie(result.data.data[0]);
      configHeader(result.data.data[0].name);
    } catch (error) {}
  };
  const getScheduleByMovieId = async () => {
    try {
      setIsLoading(true);
      const setData = {
        date: date,
        page: 1,
        location: selectedLocation,
        movieId: params.idMovie,
      };
      const result = await axios.post('/schedule/filter', setData);
      setTimeout(() => {
        setListSchedule(result.data.data);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        setListSchedule([]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleBook = data => {
    const setData = {
      movie: detailMovie,
      schedule: selectedSchedule,
      dateBooking: date,
      timeBooking: selectedTime,
    };
    props.navigation.navigate('Main', {
      screen: 'OrderMovie',
      params: {
        setData,
      },
    });
  };

  const handleTime = (times, schedule) => {
    setselectedTime(times);
    setSelectedSchedule(schedule);
  };
  let selectedDate = moment(date).format('DD/MM/YYYY');
  useEffect(() => {
    getScheduleByMovieId();
  }, [selectedLocation, date]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageViewContainer}>
          <Image
            style={styles.imageView}
            source={{
              uri: `http://192.168.100.22:3001/uploads/movie/${detailMovie.image}`,
            }}
          />
        </View>
        <Description data={detailMovie} />
        <InputFilter
          selectedLocation={selectedLocation}
          selectedDate={selectedDate}
          date={date}
          setDate={setDate}
          setselectedLocation={setselectedLocation}
        />
        {isLoading ? (
          <LoadingSchedule />
        ) : listSchedule.length > 0 ? (
          <FlatList
            data={listSchedule}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ScheduleList
                handleBook={handleBook}
                data={item}
                selectedSchedule={selectedSchedule}
                selectedTime={selectedTime}
                handleTime={handleTime}
              />
            )}
          />
        ) : (
          <NoSchedule />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailMovie;
