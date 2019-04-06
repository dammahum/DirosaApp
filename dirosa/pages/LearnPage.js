import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Container, Header, Body, Title, View, Left, Icon, Right, Button, Content, } from 'native-base';

import learns from '../lib/learns.json';

export default class LearnPage extends Component {
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
            <Title style={styles.titleHeader}>PERTEMUAN</Title>
          </Body>
          <Right />
        </Header>

        <Content style={styles.wrapIndex}>

          <View style={styles.wrapBottom}>

          {learns.map((learn) => (
            <TouchableOpacity
              key={learn.id}
              style={styles.Index}
              onPress = {() => navigate('Learn'+learn.id)}
            >
              <View>
                <Text style={styles.textIndex}>PERTEMUAN KE - {learn.id} </Text>
                <Text style={styles.textTheme}>{learn.theme}</Text>
              </View>
            </TouchableOpacity>
          ))}

          </View>

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
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#76B800',
  },
  wrapBottom: {
    marginBottom: 30,
  },
  Index: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 5,
    borderColor: '#1B5A07',
    marginVertical: 7,
  },
  textIndex: {
    fontFamily: 'Overpass-Black',
    fontSize: 20,
    color: '#1B5A07',
    textAlign: 'center',
    width: 280,
  },
  textTheme: {
    fontFamily: 'Overpass-Bold',
    color: '#1B5A07',
    textAlign: 'center',
    fontSize: 16,
    width: 280,
  },
});