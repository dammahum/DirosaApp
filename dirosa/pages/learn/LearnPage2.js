import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage2 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 2</Title>
            </Body>
          </Header>

          <ScrollView
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          showsVerticalScrollIndicator = {false}
          pagingEnabled = {true}
          >

            <View style={{ flex: 1, width: screenWidth  }}>
              <View style={styles.column}>
              <TouchableWithoutFeedback onPress={() => this.playSound('h17b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h17b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>ضَ</Text>
                    <Text style={styles.font}>صَ</Text>
                    <Text style={styles.font}>شَ</Text>
                    <Text style={styles.font}>سَ</Text>
                    <Text style={styles.font}>زَ</Text>
                    <Text style={styles.font}>رَ</Text>
                    <Text style={styles.font}>ذَ</Text>
                    <Text style={styles.font}>دَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h17b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h17b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>شَ</Text>
                      <Text style={styles.font}>سَ</Text>
                      <Text style={styles.font}>ضَ</Text>
                      <Text style={styles.font}>صَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ذَ</Text>
                      <Text style={styles.font}>دَ</Text>
                      <Text style={styles.font}>زَ</Text>
                      <Text style={styles.font}>رَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={() => this.playSound('h17b3')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h17b3' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <View style={styles.row2}>
                          <Text style={styles.font}>صَ</Text>
                          <Text style={styles.font}>ضَ</Text>
                        </View>
                        <View style={styles.separator}></View>
                        <View style={styles.row2}>
                          <Text style={styles.font}>سَ</Text>
                          <Text style={styles.font}>شَ</Text>
                        </View>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <View style={styles.row2}>
                          <Text style={styles.font}>رَ</Text>
                          <Text style={styles.font}>زَ</Text>
                        </View>
                        <View style={styles.separator}></View>
                        <View style={styles.row2}>
                          <Text style={styles.font}>دَ</Text>
                          <Text style={styles.font}>ذَ</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>٣</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h17b4')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h17b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ضَ</Text>
                        <Text style={styles.font}>سَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>شَ</Text>
                        <Text style={styles.font}>صَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>دَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>زَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h17b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h17b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>شَ</Text>
                        <Text style={styles.font}>ضَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>صَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>دَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h17b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h17b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>زَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>سَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>صَ</Text>
                        <Text style={styles.font}>شَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h17b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h17b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>دَ</Text>
                        <Text style={styles.font}>ضَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>شَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>سَ</Text>
                        <Text style={styles.font}>زَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h17b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h17b8' ? '#76B800' : '#fff'}]}>
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
                      <Text style={styles.font2}>٨</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h17b9')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h17b9' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <Text style={styles.font}>ضَ</Text>
                      <Text style={styles.font}>صَ</Text>
                      <Text style={styles.font}>شَ</Text>
                      <Text style={styles.font}>سَ</Text>
                      <Text style={styles.font}>زَ</Text>
                      <Text style={styles.font}>رَ</Text>
                      <Text style={styles.font}>ذَ</Text>
                      <Text style={styles.font}>ذَ</Text>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>٩</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>


                {/* /.End of Page */}

              </View>
              {/* /.Column */}
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>

            <TouchableWithoutFeedback onPress={() => this.playSound('h18b1')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h18b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>صَبَرَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>رَ</Text>
                      <Text style={styles.font}>بَ</Text>
                      <Text style={styles.font}>صَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>سَ</Text>
                      <Text style={styles.font}>رَ</Text>
                      <Text style={styles.font}>دَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>سَ</Text>
                      <Text style={styles.font}>رَ</Text>
                      <Text style={styles.font}>دَ</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b2')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h18b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>أَحَدَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>دَ</Text>
                      <Text style={styles.font}>حَ</Text>
                      <Text style={styles.font}>أَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>ثَبَرَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row2}>
                      <Text style={styles.font}>رَ</Text>
                      <Text style={styles.font}>بَ</Text>
                      <Text style={styles.font}>ثَ</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h18b3' ? '#76B800' : '#fff'}]}>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h18b4' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَبَتَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>خَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ضَرَبَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>ضَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h18b5' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>صَدَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>دَ</Text>
                        <Text style={styles.font}>صَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>شَرَبَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>شَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h18b6' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={[styles.font, {fontSize: 36}]}>جَرَسَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>سَ</Text>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>جَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَشَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>شَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h18b7' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ذَبَحَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَرَجَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَ</Text>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>خَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h18b8' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={[styles.font, {fontSize: 32}]}>صَحَبَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={[styles.font, {fontSize: 32}]}>بَ</Text>
                        <Text style={[styles.font, {fontSize: 32}]}>حَ</Text>
                        <Text style={[styles.font, {fontSize: 32}]}>صَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h18b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h18b9' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>شَتَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>شَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَذَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                        <Text style={styles.font}>حَ</Text>
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
    )
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
