import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as firebase from 'firebase';
import Signup from './screens/Signup';
import Login from './screens/Login';
import CreateAds from './screens/CreateAds';
import ListItem from './screens/ListItem';
import Details from './screens/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const Navigation = () => {
  const user = 'jasndk';
  return (
    <NavigationContainer>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

function TabNavigator() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ListItem} />
        <Tab.Screen name="Create" component={CreateAds} />
      </Tab.Navigator>
    </>
  );
}

const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

const styles = StyleSheet.create({
  bodyView: {backgroundColor: 'blue', flex: 1},
});
export default App;
