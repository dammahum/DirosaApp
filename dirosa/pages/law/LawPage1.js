import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, Content } from 'native-base';
import { WebView } from 'react-native-webview';

export default class LawPage1 extends Component {

  render() {

    const { goBack } = this.props.navigation;

    return(
      <Container>
        <Header style={{ backgroundColor: '#1B5A07' }}>
          <Left>
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon type='MaterialIcons' name='arrow-back'></Icon>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleHeader}>HUKUM QOLQOLAH</Title>
          </Body>
        </Header>

        <Content style={styles.wrapIndex}>
          <View>
            <Text style={styles.titleContent}>Qolqolah</Text>
            <Text style={styles.textContent}>
              Menurut bahasa qalqalah artinya gerak, sedangkan menurut istilah qalqalah adalah bunyi huruf yang memantul bila ia mati atau dimatikan, atau suara membalik dengan bunyi rangkap. Adapun huruf qalqalah terdiri atas lima huruf, yaitu : ق , ط , ب , ج , د.
            </Text>
          </View>
          <View style={styles.video}>
            <Text style={styles.videoHint}>Atau lihat video di bawah ini</Text>
            <WebView
              style={{flex:1}}
              source={{uri: 'https://www.youtube.com/watch?v=DwfdZ4gVzK8'}}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'Overpass-Black',
  },
  wrapIndex: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  titleContent: {
    fontFamily: 'Overpass-Bold',
    fontSize: 20,
    color: '#000'
  },
  textContent: {
    fontFamily: 'Overpass-Regular',
    fontSize: 18,
    color: '#000'
  },
  video: {
    height: 380,
    marginTop: 20,
  },
  videoHint: {
    marginBottom: 10,
    fontFamily: 'Overpass-Bold',
    fontSize: 16
  },
})
