import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Body, Title, View, Left, Icon, Right, Button, Content, } from 'native-base';

import laws from '../lib/laws.json';

export default class LawPage extends Component {
  render() {

    const { goBack, navigate } = this.props.navigation;

    return (
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
              <Title style={styles.titleHeader}>HUKUM BACAAN</Title>
            </Body>
            <Right />
          </Header>

        <Content style={styles.wrapIndex}>
          {laws.map((law) => (
            <TouchableOpacity
              key={law.id}
              style={styles.Index}
              onPress = {() => navigate('Law'+law.id)}
            >
              <View style={styles.main}>
                <View>
                  <Text style={styles.textIndex}>HUKUM - {law.id} </Text>
                  <Text style={styles.textTitle}>{law.title}</Text>
                </View>
                <View style={styles.icon}>
                  <Icon type='MaterialIcons' name='navigate-next' style={styles.iconNext}></Icon>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
  titleHeader: {
    fontFamily: 'Overpass-Black',
  },
  wrapIndex: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
  },
  main:{
    flex: 1,
    flexDirection: 'row',
  },
  Index: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    borderColor: '#1B5A07',
    marginVertical: 7,
  },
  textIndex: {
    fontFamily: 'Overpass-Black',
    fontSize: 18,
    color: '#1B5A07',
    width: 280,
  },
  textTitle: {
    fontFamily: 'Overpass-Bold',
    color: '#1B5A07',
    fontSize: 14,
    width: 280,
  },
  icon: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  iconNext: {
    fontFamily: 'Overpass-Regular',
    color: '#1B5A07',
  }
});
