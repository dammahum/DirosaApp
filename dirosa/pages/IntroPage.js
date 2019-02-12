import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { Container, Left, Body, Button, Title, Header, Icon } from 'native-base';
import { WebView } from 'react-native-webview';

export default class IntroPage extends Component {
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
            <Title style={styles.titleHeader}>PENGENALAN HURUF</Title>
          </Body>
        </Header>

        <View style={{ flex: 1, paddingHorizontal: 20 }}>

        <View style={{ height: 240 }}>
          <WebView 
            source={{ uri: "https://infinite.red/react-native" }}
            style={{ marginTop: 20 }}
            onLoadProgress={e => console.log(e.nativeEvent.progress)}
          />
        </View>

          <View style={styles.column}>

            <View style={styles.row}>
              <View style={ styles.square }>
                <Text style={styles.font}>ا</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ب</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ت</Text>
              </View>
              <View style={ styles.square }>
               <Text style={styles.font}>ث</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ج</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={ styles.square }>
                <Text style={styles.font}>ا</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ب</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ت</Text>
              </View>
              <View style={ styles.square }>
               <Text style={styles.font}>ث</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ج</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={ styles.square }>
                <Text style={styles.font}>ا</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ب</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ت</Text>
              </View>
              <View style={ styles.square }>
               <Text style={styles.font}>ث</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ج</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={ styles.square }>
                <Text style={styles.font}>ا</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ب</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ت</Text>
              </View>
              <View style={ styles.square }>
               <Text style={styles.font}>ث</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ج</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={ styles.square }>
                <Text style={styles.font}>ا</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ب</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ت</Text>
              </View>
              <View style={ styles.square }>
               <Text style={styles.font}>ث</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ج</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={ styles.square }>
                <Text style={styles.font}>ا</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ب</Text>
              </View>
              <View style={ styles.square }>
                <Text style={styles.font}>ت</Text>
              </View>
              <View style={ styles.square }>
               <Text style={styles.font}>ث</Text>
              </View>
            </View>

          </View>
        </View>


      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'lato-black',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  square: {
    width: 60,
    height: 60,
    backgroundColor: '#76B800',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 3,
    elevation: 5,
  },
  font: {
    fontSize: 48,
    color: '#fff',
    margin: 15,
  },
});
