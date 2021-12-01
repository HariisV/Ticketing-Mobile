import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
function App() {
  return (
    // <ScrollView>

    // {/* <Text style={styles.textMedium}>Home Screen Sas!</Text> */ }
    //   {/* <Icon name="facebook" style={styles.textMedium}>Facebook X</Icon> */ }
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ backgroundColor: "pink", flex: 1 }}>
          <Text>Left Side</Text>
        </View>
        <View style={{ backgroundColor: "blue", flex: 1 }}>
          <Text>Rgith Side</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text>Main </Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>

    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin: 10
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  main: {
    flex: 4,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'green'
  },
  footer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green'
  }
})

export default App;
