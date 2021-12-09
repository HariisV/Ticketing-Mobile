import React from 'react';
import styles from '../../screen/home/style';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import {API_TOKEN} from 'react-native-dotenv';

export default function upcoming(props) {
  const viewMovie = () => {
    props.navigation.navigate('Main', {
      screen: 'DetailMovie',
      params: {
        idMovie: props.data.id,
      },
    });
  };
  return (
    <View style={styles.cardUpcoming}>
      <Image
        source={{
          uri: `http://192.168.100.22:3001/uploads/movie/${props.data.image}`,
        }}
        style={styles.upcomingImage}
      />
      <Text style={styles.titleUpcoming}>{props.data.name}</Text>
      <Text style={styles.genreUpcoming}>{props.data.category}</Text>

      <TouchableOpacity style={styles.buttonDetail} onPress={viewMovie}>
        <Text style={styles.textButtonDetail}>Details </Text>
      </TouchableOpacity>
    </View>
  );
}
