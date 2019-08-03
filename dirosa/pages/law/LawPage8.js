import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, Content } from 'native-base';
import { WebView } from 'react-native-webview';

export default class LawPage8 extends Component {

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
            <Title style={styles.titleHeader}>HUKUM IKHFA</Title>
          </Body>
        </Header>

        <Content style={styles.wrapIndex}>
          <View>
            <Text style={styles.titleContent}>Ikhfa</Text>
            <Text style={styles.textContent}>
              Ikhfa artinya menyamarkan atau tidak jelas. Apabila ada nun mati atau tanwin (ـًـٍـٌ /نْ) bertemu dengan salah satu huruf ikhfa yang 15,  ta'(ت), tha' (ث), jim (ج), dal (د), dzal (ذ), zai (ز), sin (س), syin (ش), sod (ص), dhod (ض), tho (ط), zho (ظ), fa’ (م), qof (م), dan kaf (ك). maka dibacanya samar-samar, antara jelas dan tidak (antara izhar dan idgham) dengan mendengung.
            </Text>
          </View>
          <View style={styles.video}>
            <Text style={styles.videoHint}>Atau lihat video di bawah ini</Text>
            <WebView
              style={{flex:1}}
              source={{uri: 'https://www.youtube.com/watch?v=XN9V6Jh4DRA'}}
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
    color: '#000',
  },
  textContent: {
    fontFamily: 'Overpass-Regular',
    fontSize: 18,
    color: '#000',
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
