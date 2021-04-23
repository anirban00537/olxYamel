import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const Account = () => {
  return (
    <View>
      <Text>{auth().currentUser.email}</Text>
      <TouchableOpacity style={styles.Signup} onPress={() => auth().signOut()}>
        <Text style={styles.SignupText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SignupText: {
    color: 'white',
    fontSize: 20,
  },
  Signup: {
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Account;
