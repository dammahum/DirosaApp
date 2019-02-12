import React, { Component } from 'react';
import { StyleSheet, Text, } from 'react-native';
import { Container, Header, Body, Title, Left, Icon, Right, Button, Content, Accordion, View } from 'native-base';

import laws from '../lib/laws.json';

export default class LawPage extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={styles.Index}>

      <Text style={styles.headIndex}>
        { item.title }
      </Text>
      
      {expanded 
        ? <Icon style={{fontSize: 18, color: '#fff'}} type='MaterialIcons' name='keyboard-arrow-up' />
        : <Icon style={{fontSize: 18, color: '#fff'}} type='MaterialIcons' name='keyboard-arrow-down' />
      }
      </View>
    );
  }
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
              <Icon type='MaterialIcons' name='arrow-back'></Icon>
            </Button>
          </Left>
          <Body>
            <Title style={styles.titleHeader}>HUKUM BACAAN</Title>
          </Body>
          <Right />
        </Header>

        <Content style={styles.wrapIndex}>
        <Accordion
          dataArray={laws}
          animation={true}
          expanded={true}
          renderHeader={this._renderHeader}
          contentStyle={styles.textIndex}
          />
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
    headIndex: {
      color: '#fff',
      fontFamily: 'lato-bold',
      fontSize: 16,
    },
    Index: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: '#76B800',
      borderRadius: 5,
      elevation: 5,
      marginVertical: 7,
    },
    textIndex: {
      fontFamily: 'lato-bold',
      fontSize: 16,
      color: 'white',
      backgroundColor: '#1B5A07',
    },
  });