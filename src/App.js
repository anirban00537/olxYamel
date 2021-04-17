import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import Signup from './screens/Signup';
import Login from './screens/Login';
import CreateAds from './screens/CreateAds';
import ListItem from './screens/ListItem';

// import {firebaseConfig} from './config';
// firebase.initializeApp(firebaseConfig);
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="black" />
      <ListItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bodyView: {backgroundColor: 'blue', flex: 1},
});
export default App;
