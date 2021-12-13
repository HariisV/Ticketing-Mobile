import React, {useState} from 'react';
import styles from './style';

import {connect} from 'react-redux';
import {View, ScrollView, RefreshControl, FlatList} from 'react-native';
import {getHistory} from '../../../stores/action/history';
import ListHistory from '../../../components/History/listHistory';
import NoHistory from '../../../components/History/noHistory';
const HistoryScreen = props => {
  const [refreshing, setRefreshing] = useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      props.getHistory(props.auth.idUser);
      setRefreshing(false);
    });
  }, []);

  let history = props.history.listHistory;
  console.log('count =>', history);
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        {history && history.length > 0 ? (
          <FlatList
            data={history}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <ListHistory navigation={props.navigation} data={item} />
            )}
          />
        ) : (
          <NoHistory navigation={props.navigation} />
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  history: state.history,
});

const mapDispatchToProps = {
  getHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
