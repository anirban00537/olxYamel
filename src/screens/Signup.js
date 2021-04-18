import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const Signup = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerImage}>
        <Image
          style={styles.loginImage}
          source={require('../assets/login.png')}
        />
        <Text style={styles.LoginText}>SIGNUP</Text>
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
          <Text style={styles.loginBtnText}>Signup</Text>
        </TouchableOpacity>
        {/* onPress={() => navigation.goBack()} */}
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
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
  formContainer: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  back: {
    height: 90,
    width: '80%',
    alignItems: 'center',
  },
  backText: {
    fontSize: 20,
  },
  loginbtn: {
    margin: 10,
    backgroundColor: 'black',
    width: '80%',
    borderRadius: 15,
    height: 50,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
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
    margin: 15,
  },
});
export default Signup;
