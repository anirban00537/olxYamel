import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const CreateAds = ({navigation}) => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [year, setYear] = useState();
  const [price, setPrice] = useState();
  const [phone, setPhone] = useState();
  const createAds = async () => {
    try {
      await Firestore().collection('ads').add({
        name,
        desc,
        year,
        price,
        phone,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU',
        uid: auth().currentUser.uid,
      });
      setName('');
      setDesc('');
      setYear('');
      setPrice('');
      setPhone('');
      alert('Posted Successfully');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.Title}>Post Ads</Text>

        <TextInput
          placeholder="Enter Name"
          style={styles.text}
          value={name}
          onChangeText={val => {
            setName(val);
          }}
        />
        <TextInput
          placeholder="Enter Description"
          multiline={true}
          numberOfLines={4}
          value={desc}
          style={styles.text}
          onChangeText={val => {
            setDesc(val);
          }}
        />
        <TextInput
          placeholder="Enter Year"
          keyboardType="numeric"
          style={styles.text}
          value={year}
          onChangeText={val => {
            setYear(val);
          }}
        />
        <TextInput
          placeholder="Enter Price"
          style={styles.text}
          value={price}
          onChangeText={val => {
            setPrice(val);
          }}
        />
        <TextInput
          placeholder="Enter Phone Number"
          style={styles.text}
          value={phone}
          onChangeText={val => {
            setPhone(val);
          }}
        />
        <TouchableOpacity style={styles.cameraBtn}>
          <Text style={styles.cameraBtnText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAdsButton}>
          <Text
            style={styles.CreateAdsTexr}
            onPress={() =>
              createAds().then(() => {
                navigation.replace('Home');
              })
            }>
            CreateAds
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateAds;

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  text: {
    borderWidth: 0,
    paddingLeft: 19,
    paddingTop: 10,
    width: '80%',
    height: 60,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    fontSize: 19,
    margin: 10,
  },
  createAdsButton: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 15,
    margin: 30,
  },
  CreateAdsTexr: {
    color: 'white',
    fontSize: 20,
  },
  Title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    padding: 20,
    marginVertical: 20,
    width: '80%',
    borderRadius: 10,
    textAlign: 'center',
  },
  cameraBtn: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 1,
  },
  cameraBtnText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
  },
});
