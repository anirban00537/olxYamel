import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Card, Title, Paragraph, Appbar} from 'react-native-paper';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const ListItem = ({navigation}) => {
  const ListComponent = (item, navigation) => (
    <Card style={styles.mainContainerCard}>
      <View style={styles.cardDetails}>
        <View style={styles.titleSec}>
          <Avatar.Image
            size={36}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLZal2ngrRXdEebFSXKENv_Joj38zpGXhwA&usqp=CAU',
            }}
          />

          <Text style={styles.username}>{item.name}</Text>
        </View>

        <Card.Content>
          <Text style={{marginVertical: 20}}>{item.title}</Text>
        </Card.Content>
      </View>
      <Card.Cover source={{uri: item.image}} />
      <Card.Content>
        <Text style={{marginVertical: 10}}>{item.desc}</Text>
      </Card.Content>

      <TouchableOpacity
        style={styles.Detailsbtn}
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Avatar.Image
          size={30}
          style={{backgroundColor: 'white', marginHorizontal: 15}}
          source={{
            uri: 'https://img.icons8.com/ios/452/view-details.png',
          }}
        />
      </TouchableOpacity>
    </Card>
  );
  const fakeData = [
    {
      name: 'anirban',
      year: 2012,
      title:
        'Aute tempor est duis in magna nisi reprehenderit in ad non commodo adipisicing.',
      image: 'https://i.ytimg.com/vi/RAiu2MwJYhM/maxresdefault.jpg',
      phone: 81982,
      desc:
        'Amet velit sint aute dolore irure laboris Lorem reprehenderit dolor ullamco. Qui in voluptate nostrud laborum elit non nisi dolore. Nisi nostrud nisi nisi aute. Quis consectetur veniam do non laboris cupidatat consequat et. Excepteur nulla sunt adipisicing officia proident veniam tempor elit dolor aliqua eiusmod elit mollit ea.',
    },
    {
      name: 'Rimpy',
      year: 2022,
      title:
        'Sint eiusmod proident reprehenderit laboris adipisicing dolor cupidatat consequat duis ullamco et.',
      image:
        'https://static.toiimg.com/thumb/msid-79714777,width-1200,height-900,resizemode-4/.jpg',
      phone: 9284782904,
      desc:
        'Sint magna officia cillum culpa voluptate amet. Tempor cupidatat do voluptate nisi commodo labore esse ex. Lorem nostrud occaecat aute exercitation dolore aliquip voluptate non fugiat enim mollit amet consectetur cillum.',
    },
    {
      name: 'oni',
      year: 2014,
      title: 'Duis eiusmod excepteur nisi nisi qui non non anim exercitation.',
      image:
        'https://static.toiimg.com/thumb/msid-71480292,width-640,resizemode-4/71480292.jpg',
      phone: 9284782904,
      desc:
        'Et sit cillum velit cillum esse irure consequat nulla. Dolore dolore mollit deserunt in dolore veniam officia irure ad ut adipisicing mollit mollit labore. Incididunt velit culpa do incididunt aliquip quis est proident magna elit aute esse.',
    },
    {
      name: 'oni',
      year: 2014,
      title: 'Duis eiusmod excepteur nisi nisi qui non non anim exercitation.',
      image:
        'https://cdn57.androidauthority.net/wp-content/uploads/2021/01/Samsung-Galaxy-S21-Ultra-vs-Samsung-Galaxy-Note-20-Ultra-1-scaled-1200x675.jpg',
      phone: 9284782904,
      desc:
        'Et sit cillum velit cillum esse irure consequat nulla. Dolore dolore mollit deserunt in dolore veniam officia irure ad ut adipisicing mollit mollit labore. Incididunt velit culpa do incididunt aliquip quis est proident magna elit aute esse.',
    },
  ];
  return (
    <SafeAreaView style={styles.bodyHome}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content style={styles.sellito} title="SellItO" />
      </Appbar.Header>

      <FlatList
        style={{marginBottom: 0}}
        data={fakeData}
        keyExtractor={item => {
          item.index;
        }}
        renderItem={({item}) => ListComponent(item, navigation)}
      />
    </SafeAreaView>
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
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    marginLeft: 10,
  },
  Detailsbtn: {
    height: 40,
    width: 50,
    backgroundColor: 'white',
  },
});
export default ListItem;
