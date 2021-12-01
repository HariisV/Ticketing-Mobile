import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerChild}>
        <Text>
          s Nearest Cinema, Newest Movie, s loremLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquam exercitationem sunt at, illum architecto quam cumque dolorum esse ea, repudiandae molestiae iste quisquam dignissimos optio reprehenderit possimus itaque quo!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  containerChild: {
    margin: 20
  }

})

export default App;
