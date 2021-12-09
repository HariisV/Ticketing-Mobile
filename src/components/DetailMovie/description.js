import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../screen/Main/Movie/Detail/style';
import moment from 'moment';

export default function description(props) {
  console.log('PROPS => ', props);
  // June 28, 2017
  let releaseDate = moment(props.data.releaseDate).format('MMM / DD / YYYY');

  return (
    <>
      <View>
        <Text style={styles.movieTitle}>{props.data.name}</Text>
        <Text style={styles.movieGenre}>{props.data.category}</Text>
      </View>
      <View style={styles.movieDetailContainer}>
        <View style={styles.movieDetail}>
          <View style={styles.movieDetailItem}>
            <Text style={styles.detailQuenst}>Release date</Text>
            <Text style={styles.detailValue}>{releaseDate}</Text>
          </View>
          <View style={styles.movieDetailItem}>
            <Text style={styles.detailQuenst}>Directed by</Text>
            <Text style={styles.detailValue}>{props.data.director}</Text>
          </View>
        </View>
        <View style={styles.movieDetail}>
          <View style={styles.movieDetailItem}>
            <Text style={styles.detailQuenst}>Duration</Text>
            <Text style={styles.detailValue}>{props.data.duration}</Text>
          </View>
          <View style={styles.movieDetailItem}>
            <Text style={styles.detailQuenst}>Casts</Text>
            <Text style={styles.detailValue}>{props.data.cast}</Text>
          </View>
        </View>
        <View style={styles.hr}></View>
      </View>
      <View>
        <Text style={styles.movieSypnosisTitle}>Sypnosis</Text>
        <Text style={styles.movieSypnosis}>{props.data.sypnosis}</Text>
      </View>
    </>
  );
}
