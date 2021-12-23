import React, {useState, useEffect} from 'react';

import {
  View,
  ScrollView,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import NoMovie from '../../../components/Search/noMovie';
import CardMovie from '../../../components/Search/cardMovie';
import Icon from 'react-native-vector-icons/Feather';
import axios from '../../../utils/axios';

const SearchScreen = props => {
  const [input, setInput] = useState('');
  const [listMovie, setListMovie] = useState([]);
  const [propsName, setPropsName] = useState('');

  const [isLoading, setisLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [last, setLast] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setmaxPage] = useState(10);

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    handleSearch();
    // console.log('TEST');
  }, [page]);

  const handleInput = value => {
    setInput(value);
  };
  const handleSearch = async () => {
    try {
      setisLoading(true);
      const result = await axios.get(
        `movie?name=${input}&page=${page}&limit=5&sortType=DESC&sort=releaseDate`,
      );
      setTimeout(() => {
        setisLoading(false);
        console.log('RESULTTTTTTTTT ===>', result);
        if (page === 1) {
          setListMovie(result.data.data);
          setmaxPage(result.data.pagination.totalPage);
        } else {
          setListMovie([...listMovie, ...result.data.data]);
        }
      }, 1000);
    } catch (error) {
      console.log(error.response);
      setisLoading(false);
      setPropsName(input);
    }
  };

  const handleLoadMore = () => {
    console.log('HAI');
    if (page <= maxPage) {
      setPage(page + 1);
    }
    //  else {
    //   setLast(true);
    // }
  };
  const buttonSearch = () => {
    setPage(1);
    handleSearch();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={[styles.inputContainer, styles.inputTimes]}>
          <TextInput
            style={styles.inputSearch}
            onChangeText={e => handleInput(e)}
            value={input}
            placeholder="Search A Name Movie"></TextInput>
          <TouchableOpacity style={styles.button} onPress={buttonSearch}>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                style={styles.inputIcon}
                color="#00ff00"
              />
            ) : (
              <Icon name="search" style={styles.inputIcon} />
            )}
          </TouchableOpacity>
        </View>
        <FlatList
          data={listMovie}
          keyExtractor={item => item.id}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            last ? (
              <View style={styles.sectionBottom}>
                <Text style={styles.sectionBottomText} style={styles.noMore}>
                  -- No more data --
                </Text>
              </View>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : null
          }
          renderItem={({item}) => (
            <CardMovie navigation={props.navigation} data={item} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  containerFlatlist: {
    backgroundColor: '#F7F7FC',
    marginTop: 20,
    marginHorizontal: 20,
  },
  scrollView: {
    backgroundColor: '#F7F7FC',
  },
  inputSearch: {
    borderColor: '#DEDE',
    padding: 15,
  },
  inputContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 110,
      height: 6,
    },
    shadowOpacity: 50.27,
    shadowRadius: 64.65,
    elevation: 8,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },

  icon: {
    width: 1,
  },
  inputTimes: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputIcon: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  valueInput: {
    margin: 15,
    fontSize: 15,
    alignItems: 'center',
    color: 'black',
  },
  button: {
    padding: 5,
    margin: 5,
  },
  noMore: {
    textAlign: 'center',
  },
});

export default SearchScreen;
