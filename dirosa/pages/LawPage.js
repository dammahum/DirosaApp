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
          ? <Icon style={styles.iconIndex} type='MaterialIcons' name='keyboard-arrow-up' />
          : <Icon style={styles.iconIndex} type='MaterialIcons' name='keyboard-arrow-down' />
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

        <Content style={styles.mainBackground}>
          <View style={styles.wrapIndex}>
            <Accordion
              dataArray={laws}
              animation={true}
              expanded={true}
              renderHeader={this._renderHeader}
              contentStyle={styles.textIndex}
              style={styles.accordionStyle}
              />
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
      marginHorizontal: 15,
      marginVertical: 20,
    },
    mainBackground: {
      backgroundColor: '#76B800',
    },
    iconIndex: {
      fontSize: 22,
      color: '#1B5A07',
    },
    headIndex: {
      color: '#1B5A07',
      fontFamily: 'Overpass-Bold',
      fontSize: 20,
    },
    Index: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20, 
      backgroundColor: '#fff',
      borderRadius: 50,
      elevation: 5,
      marginVertical: 7,
    },
    textIndex: {
      fontFamily: 'Overpass-Bold',
      padding: 15,
      fontSize: 16,
      color: '#1B5A07',
      backgroundColor: '#fff',
      borderRadius: 30,
    },
  });