import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {auth} from '../firebase';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(authUser => {
    //   if (authUser) {
    //     navigation.replace('Home');
    //   }
    // });
    // return unsubscribe;
  }, []);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.containerImage}>
          <Image
            style={styles.loginImage}
            source={require('../assets/login.png')}
          />
          <Text style={styles.LoginText}>LOGIN </Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.text}>Username</Text>
          <TextInput
            label="Email"
            value={email}
            style={styles.email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            label="Password"
            value={password}
            style={styles.password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.loginbtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Signup}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.SignupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    height: '100%',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  loginImage: {
    height: 140,
    width: 140,
  },
  LoginText: {
    fontSize: 26,
    fontWeight: '700',
    margin: 10,
    color: '#000',
  },
  loginBtnText: {
    color: 'white',
    fontSize: 29,
  },
  SignupText: {
    color: 'black',
    fontSize: 20,
  },
  formContainer: {
    width: '100%',
    height: '50%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginbtn: {
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 15,
    height: 50,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  Signup: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 15,
    height: 50,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  email: {
    borderWidth: 0,
    paddingLeft: 19,
    paddingTop: 10,
    width: '80%',
    backgroundColor: '#ecf0f1',
    borderRadius: 15,
    fontSize: 19,
  },
  password: {
    borderWidth: 0,
    paddingLeft: 19,
    paddingTop: 10,
    borderRadius: 15,
    width: '80%',
    backgroundColor: '#ecf0f1',
    borderRadius: 20,
    fontSize: 19,
  },
  text: {
    margin: 10,
  },
});
export default Login;
