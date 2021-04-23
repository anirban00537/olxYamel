import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Avatar} from 'react-native-paper';
import Signup from './screens/Signup';
import Login from './screens/Login';
import CreateAds from './screens/CreateAds';
import ListItem from './screens/ListItem';
import Details from './screens/Details';
import Account from './screens/Account';
import auth from '@react-native-firebase/auth';
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
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = (
                <Avatar.Image
                  size={36}
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU',
                  }}
                />
              );
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
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
  const [user, setUser] = useState('');
  useEffect(() => {
    const unsubscriber = auth().onAuthStateChanged(userExist => {
      if (userExist) {
        setUser(userExist);
      } else {
        setUser('');
      }
    });
    return unsubscriber; // unsubscribe on unmount
  }, []);

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
        <Tab.Screen
          name="Home"
          component={ListItem}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      'https://i.pinimg.com/originals/e1/19/77/e1197754a44d9407e4cdbf4678ae3487.png',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateAds}
          options={{
            tabBarLabel: 'Create',
            tabBarIcon: ({color, size}) => (
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={{
                    uri:
                      'https://icons-for-free.com/iconfiles/png/512/create+cross+new+plus+icon-1320168707626274697.png',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Account}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={{
                    uri: 'https://static.thenounproject.com/png/630740-200.png',
                  }}
                />
              </View>
            ),
          }}
        />
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
  icon: {
    height: 25,
    width: 25,
  },
  iconContainer: {
    height: 60,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
