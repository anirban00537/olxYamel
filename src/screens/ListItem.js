import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar,
} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const ListItem = () => {
  const LeftContent = props => <Avatar.Icon size={44} icon="folder" />;

  const ListComponent = item => (
    <Card style={styles.mainContainerCard}>
      <View style={styles.cardDetails}>
        <View style={styles.titleSec}>
          <Avatar.Icon size={44} icon="folder" />
          <Text style={styles.username}>{item.name}</Text>
        </View>

        <Card.Content>
          <Title>{item.title}</Title>

          <Paragraph>{item.desc}</Paragraph>
        </Card.Content>
      </View>
      <Card.Cover source={{uri: item.image}} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
  const fakeData = [
    {
      name: 'anirban',
      year: 2012,
      title: 'this is a awesome phone',
      image:
        'https://www.zdnet.com/a/hub/i/2021/01/07/e299f286-f53f-4fca-81d7-cf97d662ef3f/iphone-12-max-pro-review-best-phone.png',
      phone: 81982,
      desc: 'this is a phone description 1',
    },
    {
      name: 'Rimpy',
      year: 2022,
      title: 'this is a awesome phone',
      image:
        'https://www.zdnet.com/a/hub/i/2021/01/07/e299f286-f53f-4fca-81d7-cf97d662ef3f/iphone-12-max-pro-review-best-phone.png',
      phone: 9284782904,
      desc: 'this is a phone description 2',
    },
    {
      name: 'oni',
      year: 2014,
      title: 'this is a awesome phone',
      image:
        'https://www.zdnet.com/a/hub/i/2021/01/07/e299f286-f53f-4fca-81d7-cf97d662ef3f/iphone-12-max-pro-review-best-phone.png',
      phone: 9284782904,
      desc: 'this is a phone description 3',
    },
  ];
  return (
    <ScrollView style={styles.bodyHome}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content style={styles.sellito} title="SellItO" />

        {/* <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} onPress={() => {}} /> */}
      </Appbar.Header>
      <FlatList
        data={fakeData}
        keyExtractor={item => {
          item.index;
        }}
        renderItem={({item}) => ListComponent(item)}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardDetails: {
    paddingHorizontal: 2,
  },
  mainContainerCard: {
    backgroundColor: 'white',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 1,
    marginVertical: 20,
  },
  appBar: {
    backgroundColor: 'white',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 1,
  },
  sellito: {
    alignItems: 'center',
  },
  bodyHome: {
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  titleSec: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 16,
    marginLeft: 10,
  },
});
export default ListItem;
