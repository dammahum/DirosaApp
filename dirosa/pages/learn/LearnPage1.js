import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage1 extends Component {

  state = {
    play:false,
    audio:null
  };

  playSound(name) {

    if(this.state.audio != null) {
      this.state.audio.stop()
      this.state.audio.reset()
    }

    let audio = new Sound(name+'.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        alert('failed to load the sound', error);
        return;
      }

      this.setState({
        play:name,
        audio:audio
      })

      this.state.audio.play((success) => {
        this.state.audio.stop()
        this.setState({play:false})
      });

    });
  }

  render() {

    let screenWidth = Dimensions.get('window').width;

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
            <Title style={styles.titleHeader}>PERTEMUAN KE - 1</Title>
          </Body>
        </Header>

        <ScrollView
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          showsVerticalScrollIndicator = {false}
          pagingEnabled = {true}
        >
          <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h15b1' ? '#76B800' : '#fff'}]}>
                <TouchableWithoutFeedback onPress={() => this.playSound('h15b1')}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>خَ</Text>
                    <Text style={styles.font}>حَ</Text>
                    <Text style={styles.font}>جَ</Text>
                    <Text style={styles.font}>ثَ</Text>
                    <Text style={styles.font}>تَ</Text>
                    <Text style={styles.font}>بَ</Text>
                    <Text style={styles.font}>أَ</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>

              <TouchableWithoutFeedback onPress={() => this.playSound('h15b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h15b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>جَ</Text>
                      <Text style={styles.font}>حَ</Text>
                      <Text style={styles.font}>بَ</Text>
                      <Text style={styles.font}>خَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>أَ</Text>
                      <Text style={styles.font}>بَ</Text>
                      <Text style={styles.font}>تَ</Text>
                      <Text style={styles.font}>ثَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h15b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h15b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>جَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>حَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h15b4')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h15b4' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>ثَ</Text>
                      <Text style={styles.font}>حَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>تَ</Text>
                      <Text style={styles.font}>خَ</Text>
                    </View>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>جَ</Text>
                      <Text style={styles.font}>ثَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>أَ</Text>
                      <Text style={styles.font}>بَ</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٤</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => this.playSound('h15b5')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h15b5' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>جَ</Text>
                      <Text style={styles.font}>تَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>حَ</Text>
                      <Text style={styles.font}>خَ</Text>
                    </View>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <View style={styles.row2}>
                    <Text style={styles.font}>أَ</Text>
                      <Text style={styles.font}>بَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>تَ</Text>
                      <Text style={styles.font}>ثَ</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٥</Text>
                </View>
            </View>
            </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h15b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h15b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>حَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>خَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h15b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h15b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>حَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h15b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h15b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>خَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَ</Text>
                        <Text style={styles.font}>جَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h15b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h15b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>خَ</Text>
                    <Text style={styles.font}>حَ</Text>
                    <Text style={styles.font}>جَ</Text>
                    <Text style={styles.font}>ثَ</Text>
                    <Text style={styles.font}>تَ</Text>
                    <Text style={styles.font}>بَ</Text>
                    <Text style={styles.font}>أَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

            </View>
          </View>

          <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b1' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَبَأَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>بَأَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b2' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                      <Text style={styles.font}>بَأَخَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَبَحَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>جَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b3' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَحَأَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَبَثَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>حَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b4' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَخَحَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَتَخَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>


              <TouchableWithoutFeedback onPress={() => this.playSound('h16b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b5' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَحَخَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>جَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَجَحَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b6' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَثَجَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَبَتَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b7' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَخَأَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>حَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَحَأَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>أَ</Text>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b8' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَثَجَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَحَجَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h16b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h16b9' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَجَحَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ثَبَجَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٩</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

            </View>
          </View>
          </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'lato-black',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  row7: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  row4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row1: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderLeftColor: '#aaa',
  },
  font: {
    fontSize: 39,
    color: '#000',
    alignSelf: 'center',
    fontFamily: 'arab-regular',
  },
  font2: {
    fontSize: 26,
    color: '#000',
    fontFamily: 'arab-regular',
  },
  separator: {
    marginHorizontal: 7,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderLeftColor: '#aaa',
    borderRightColor: '#aaa',
  },
});
