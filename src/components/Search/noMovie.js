import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const ListHistory = props => {
  return (
    <>
      <Text style={styles.noMovieText}>
        Movie Dengan Nama <Text style={styles.bold}>{props.keyword} </Text>Tidak
        Ditemukan
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  noMovieText: {
    textAlign: 'center',
    marginTop: 30,
    // width: 100,
    marginHorizontal: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
});
export default ListHistory;
