import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native';
import Navbar from './Home/Navbar';
import DailyFact from './Home/DailyFact';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.homeBackgroundColor}>
      <ScrollView style={styles.homeContainer}>
        <Navbar />
        <DailyFact />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeBackgroundColor: {
    backgroundColor: "#FFFFFF"
  },
  homeContainer: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
});

export default App;
