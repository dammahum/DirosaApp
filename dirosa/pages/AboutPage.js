import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Container, Header, View, Text, Title,
         Button, Left, Body, Content, Right, Icon, } from 'native-base';

export default class AboutPage extends Component {
  render() {

    const { goBack } = this.props.navigation;

    return (
      <Container>
        <Header style={{ backgroundColor: '#1B5A07' }}>
          <Left>
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon type='MaterialIcons' name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleHeader}>ABOUT</Title>
          </Body>
        </Header>

        <Content>
          <View style={styles.container}>
            <ScrollView>
              <View style={styles.wrapper}>

                <Image source={require('../img/logo-dirosa.jpg')} style={styles.logoStyle}/>

                <View style={styles.logo}></View>
                <Text style={[styles.mainTitle, styles.text]}>DIROSA</Text>
                <Text style={[styles.subTitle, styles.text]}>by Pondok Informatika Al-Madinah</Text>
                <Text style={[styles.paragraph, styles.text]}></Text>

                <View style={styles.contact}>
                  <Text style={[styles.contactHeader, styles.text]}>Developer</Text>
                  <View style={styles.contactItem}>
                    <Icon type='MaterialIcons' name="navigate-next"  style={[styles.contactIcon, styles.text]}/>
                    <Text style={[styles.contactText, styles.text]}>Muhammad Bin Sirajuddin</Text>
                  </View>
                </View>

                <View style={styles.contact}>
                  <Text style={[styles.contactHeader, styles.text]}>Pondok Informatika Al-Madinah</Text>
                  <View style={styles.contactItem}>
                    <Icon type='MaterialIcons' name="mail-outline" style={[styles.contactIcon, styles.text]}/>
                    <Text style={[styles.contactText, styles.text]}>pondokitalmadinah@gmail.com</Text>
                  </View>
                  <View style={styles.contactItem}>
                    <Icon type='MaterialIcons' name="public" style={[styles.contactIcon, styles.text]}/>
                    <Text style={[styles.contactText, styles.text]}>http://pondokinformatika.com</Text>
                  </View>
                  <View style={styles.contactItem}>
                    <Icon type='MaterialIcons' name="phone-iphone" style={[styles.contactIcon, styles.text]}/>
                    <Text style={[styles.contactText, styles.text]}>0857 2524 9265 (Irhamullah)</Text>
                  </View>
                  <View style={styles.contactItem}>
                    <Icon type='MaterialIcons' name="home" style={[styles.contactIcon, styles.text]}/>
                    <Text style={[styles.contactText, styles.text]}>Jl. Raya Krapyak RT.05, Karanganyar, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta</Text>
                  </View>
                </View>

                <View style={styles.vendorWrapper}>
                  <View style={styles.vendor}>
                    <Image
                      style={[styles.vendorImage, {height: 25}]}
                      source={require('../img/logo-pondok.png')}
                    />
                    <Image
                      style={[styles.vendorImage, {height: 30}]}
                      source={require('../img/logo-wahdah.png')}
                    />
                  </View>
                </View>


              </View>
            </ScrollView>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B5A07',
  },
  titleHeader: {
    fontFamily: 'Overpass-Black',
  },
  wrapper: {
		width: Dimensions.get('window').width - 30,
		backgroundColor: '#fff',
		alignSelf: 'center',
		paddingVertical: 40,
		paddingHorizontal: 15,
		margin: 15,
		marginTop: 0,
  },
  logoStyle: {
  	width: 130,
  	height: 130,
  	alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#1B5A07',
  },
  text: {
    color: '#1B5A07',
  },
  mainTitle: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Overpass-BlackItalic',
    letterSpacing: 2,
  },
  subTitle: {
    fontSize: 13,
    alignSelf: 'center',
    fontFamily: 'Overpass-BoldItalic',
    marginBottom: 30,
  },
  paragraph: {
    fontSize: 15,
    fontFamily: 'Overpass-Regular',
    marginBottom: 10,
  },
  contactItem: {
  	flexDirection: 'row',
  	marginBottom: 2,
  },
  contact: {
  	marginVertical: 10,
  },
  contactHeader: {
  	marginBottom: 5,
    fontSize: 15,
    fontFamily: 'Overpass-Bold',
  },
  contactItem: {
  	flexDirection: 'row',
  	marginBottom: 2,
  },
  contactIcon: {
  	flex: 1,
    color: '#777',
  	fontSize: 14,
  	paddingTop: 2,
  },
  contactText: {
  	flex: 12,
  	fontSize: 14,
    fontFamily: 'Overpass-SemiBoldItalic',
  },
  vendorWrapper: {
  	flexDirection: 'row',
  	marginTop: 20,
  },
  vendorTitle: {
    fontSize: 13,
    fontStyle: 'italic',
    alignSelf: 'center',
    marginBottom: 5,
  },
  vendor: {
  	flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  vendorImage: {
    width: 120,
  	alignSelf: 'center',
  },
});
