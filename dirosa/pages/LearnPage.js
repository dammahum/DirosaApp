import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Container, Header, Body, Title, Left, Icon, Right, Button, Content, } from 'native-base';

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
        {learns.map((learn) => (
          <TouchableOpacity
            key={learn.id}
            style={styles.Index}
            onPress = {() => navigate('Learn'+learn.id)}
          >
            <Text style={styles.textIndex}>Pertemuan Ke - {learn.id} : </Text>
            <Text style={styles.textTheme}>{learn.theme}</Text>
          </TouchableOpacity>
        ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create ({
  titleHeader: {
    fontFamily: 'lato-black',
  },
  wrapIndex: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  Index: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#76B800',
    borderRadius: 5,
    elevation: 5,
    borderColor: '#1B5A07',
    marginVertical: 7,
  },
  textIndex: {
    flex: 1,
    paddingRight: 4,
    fontFamily: 'lato-bold',
    fontSize: 16,
    color: 'white',
  },
  textTheme: {
    flex: 1.3,
    fontFamily: 'lato-bold',
    fontSize: 16,
    color: 'white',
  },
});