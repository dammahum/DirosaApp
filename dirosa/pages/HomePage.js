import React, {Component} from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Header, View, Title,
         Button, Left, Icon, Body, Content, Right } from 'native-base';

export default class HomePage extends Component {
  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <Container>
        <Header style={{ backgroundColor: '#1B5A07' }}>
          <Left>
            <Button transparent>
              <Icon name='settings'></Icon>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleHeader}>DIROSA</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          
          <View style={styles.imgWrapper}>
            <Image source={require('../img/menu1.jpg')} style={styles.img}/>
          </View>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('Learn')}
          >
            <View style={styles.iconIndex}>
              <View style={{ padding: 10, backgroundColor: '#1B5A07', borderRadius: 2,}}>
                <Image source={require('../img/icon1.png')} style={styles.icon} />
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>MULAI BELAJAR DIROSA</Text>
              <Text style={styles.infoTitle}>Mulai Belajar Membaca Al-Qur'an</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('Intro')}
          >
            <View style={styles.iconIndex}>
              <View style={{ padding: 10, backgroundColor: '#1B5A07', borderRadius: 2,}}>
                <Image source={require('../img/icon2.png')} style={styles.icon} />
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>PENGENALAN HURUF</Text>
              <Text style={styles.infoTitle}>Mulai Belajar Membaca Al-Qur'an</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('Law')}
          >
            <View style={styles.iconIndex}>
              <View style={{ padding: 10, backgroundColor: '#1B5A07', borderRadius: 2,}}>
                <Image source={require('../img/icon3.png')} style={styles.icon} />
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>HUKUM - HUKUM BACAAN</Text>
              <Text style={styles.infoTitle}>Mulai Belajar Membaca Al-Qur'an</Text>
            </View>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'lato-black',
  },
  imgWrapper: {
    
  },
  img: {
    height: 250,
    width: null,
    borderRadius: 5,
    marginVertical: 10,
  },
  listIndex: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#76B800',
    borderRadius:5,
    elevation: 5,
    borderColor: '#ececec',
    marginVertical: 10,
  },
  iconIndex: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameIndex: {
    flex: 4,
    paddingVertical: 15,
  },
  titleIndex: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'lato-bold',
  },
  infoTitle: {
    fontFamily: 'lato-regular',
    color: 'white',
  }
});
