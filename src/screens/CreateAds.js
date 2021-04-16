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

const CreateAds = () => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [year, setYear] = useState();
  const [price, setPrice] = useState();
  const [phone, setPhone] = useState();
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.Title}>Post Ads</Text>

        <TextInput placeholder="Enter Name" style={styles.text} />
        <TextInput
          placeholder="Enter Description"
          multiline={true}
          numberOfLines={4}
          style={styles.text}
        />
        <TextInput
          placeholder="Enter Year"
          keyboardType="numeric"
          style={styles.text}
        />
        <TextInput placeholder="Enter Price" style={styles.text} />
        <TextInput placeholder="Enter Phone Number" style={styles.text} />
        <TouchableOpacity style={styles.cameraBtn}>
          <Text style={styles.cameraBtnText}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAdsButton}>
          <Text style={styles.CreateAdsTexr}>CreateAds</Text>
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
