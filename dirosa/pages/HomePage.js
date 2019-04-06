import React, {Component} from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Header, View, Title,
         Button, Left, Icon, Body, Content, Right } from 'native-base';
import Menu, { MenuItem } from 'react-native-material-menu';


export default class HomePage extends Component {
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };

  About = () => {
    this.hideMenu();
    this.props.navigation.navigate('About');
  };

  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <Container>
        <Header style={{ backgroundColor: '#1B5A07' }}>
          <Left>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Menu
              ref={this.setMenuRef}
              button={
               <Icon style={styles.iconSettings} name='settings' onPress={this.showMenu}></Icon>
              }
            >
              <MenuItem onPress={() => this.About()}>About</MenuItem>
            </Menu>
          </View>
              
          </Left>
          <Body>
            <Title style={styles.titleHeader}>DIROSA</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={styles.mainBackground}>
          
          <View style={styles.logoWrapper}>
            <Image source={require('../img/logo-dirosa.jpg')} style={styles.logoStyle}/>
          </View>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('Learn')}
          >
            <View style={styles.iconIndex}>
              <View style={styles.iconCircle}>
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
          onPress={() => navigate('Waqof')}
          >
            <View style={styles.iconIndex}>
              <View style={styles.iconCircle}>
                <Image source={require('../img/icon2.png')} style={styles.icon} />
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>TANDA-TANDA WAQOF</Text>
              <Text style={styles.infoTitle}>Tanda-Tanda Waqof Al-Qur'an</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('Law')}
          >
            <View style={styles.iconIndex}>
              <View style={styles.iconCircle}>
                <Image source={require('../img/icon3.png')} style={styles.icon} />
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>HUKUM - HUKUM BACAAN</Text>
              <Text style={styles.infoTitle}>Mengenal Hukum Bacaan Al-Qur'an</Text>
            </View>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconSettings:{
    color: '#fff',
  },
  titleHeader: {
    fontFamily: 'Overpass-Black',
    fontSize: 24,
  },
  mainBackground: {
    backgroundColor: '#76B800',
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
    backgroundColor: '#fff',
    borderRadius:50,
    elevation: 5,
    borderColor: '#ececec',
    marginVertical: 10,
  },
  iconIndex: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    height: 45,
    width: 45,
    backgroundColor: '#1B5A07',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameIndex: {
    flex: 4,
    paddingVertical: 15,
  },
  titleIndex: {
    fontSize: 20,
    color: '#1B5A07',
    fontFamily: 'Overpass-Bold',
  },
  infoTitle: {
    fontFamily: 'Overpass-Regular',
    color: '#1B5A07',
    fontSize: 16,
  },
  logoWrapper: {
    elevation: 10, 
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#fff',
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  logoStyle: {
    width: 240,
    height: 240,
    alignSelf: 'center',
  },
});
