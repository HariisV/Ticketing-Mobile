import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../screen/Main/Movie/Detail/style';

export default function scheduleList(props) {
  return (
    <>
      <View>
        <View style={styles.scheduleCard}>
          <View style={styles.scheduleImageContainer}>
            <Image
              style={styles.scheduleImage}
              source={
                props.data.premier == 'hiFlix'
                  ? require(`../../assets/images/hiFlix.png`)
                  : props.data.premier == 'ebuId'
                  ? require(`../../assets/images/ebuId.png`)
                  : props.data.premier == 'CineOne21'
                  ? require(`../../assets/images/CineOne21.png`)
                  : require(`../../assets/images/CineOne21.png`)
              }
            />
            <Text style={styles.scheduleAddress}>
              Whatever street No.12, South Purwokerto
            </Text>
          </View>
          <View style={styles.hr}></View>
          <View style={styles.scheduleList}>
            {props.data.time.map(e => {
              return (
                <View style={styles.scheduleListItem}>
                  <Text
                    key={e}
                    style={[
                      styles.scheduleListItem,
                      props.selectedSchedule == props.data.id &&
                      props.selectedTime == e
                        ? styles.timeActive
                        : null,
                    ]}
                    onPress={() => props.handleTime(e, props.data.id)}>
                    {e}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={styles.schedulePriceContainer}>
            <Text style={styles.schedulePrice}>Price</Text>
            <Text style={styles.schedulvePriceValue}>
              ${props.data.price}/seat
            </Text>
          </View>

          {props.selectedSchedule !== props.data.id ? (
            <TouchableOpacity style={styles.buttonBookLocked}>
              <Text style={styles.buttonBookText}>Book Now</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonBook}
              onPress={() => props.handleBook(props.data.id)}>
              <Text style={styles.buttonBookText}>Book Now</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}
