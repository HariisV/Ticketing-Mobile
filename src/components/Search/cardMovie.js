import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {URL_BACKEND} from '@env';

const ListHistory = props => {
  const viewMovie = () => {
    props.navigation.navigate('Main', {
      screen: 'DetailMovie',
      params: {
        idMovie: props.data.id,
      },
    });
  };
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={viewMovie}>
        <Image
          style={styles.cardImage}
          source={{
            uri: `${URL_BACKEND}uploads/movie/${props.data.image}`,
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.titleImage}>{props.data.name}</Text>
          <Text style={styles.category}>{props.data.category}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 15,
    // borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',

    shadowColor: '#000',
    shadowOffset: {
      width: 110,
      height: 6,
    },
    shadowOpacity: 50.27,
    shadowRadius: 64.65,
    elevation: 8,
    // backgroundColor: 'white',
  },
  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  titleImage: {
    marginHorizontal: 20,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Mulish-Bold',
  },
  category: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '200',
    fontFamily: 'Mulish-Bold',
    marginTop: 10,
  },
});
export default ListHistory;
