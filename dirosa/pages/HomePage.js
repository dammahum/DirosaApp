import React, {Component} from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Header, View, Title,
         Button, Left, Icon, Body, Content, Right } from 'native-base';
import Menu, { MenuItem } from 'react-native-material-menu';


export default class HomePage extends Component {

  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <Container>

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
                <Image source={require('../img/icon1.png')} />
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>MULAI BELAJAR DIROSA</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('Waqof')}
          >
            <View style={styles.iconIndex}>
              <View style={styles.iconCircle}>
                <Text style={{ fontSize: 36, color: '#fff' }}>۩</Text>
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>TANDA-TANDA WAQOF</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('Law')}
          >
            <View style={styles.iconIndex}>
              <View style={styles.iconCircle}>
                <Image source={require('../img/icon3.png')} />
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>HUKUM - HUKUM BACAAN</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.listIndex}
          onPress={() => navigate('About')}
          >
            <View style={styles.iconIndex}>
              <View style={styles.iconCircle}>
              <Icon type='MaterialIcons' style={styles.iconSettings} name='info'></Icon>
              </View>
            </View>
            <View style={styles.nameIndex}>
              <Text style={styles.titleIndex}>TENTANG KAMI</Text>
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
    paddingVertical: 10,
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
    fontSize: 18,
    color: '#1B5A07',
    fontFamily: 'Overpass-Black',
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
