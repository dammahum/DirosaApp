import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage3 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 3</Title>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h19b1')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h19b1' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <Text style={styles.font}>كَ</Text>
                      <Text style={styles.font}>قَ</Text>
                      <Text style={styles.font}>فَ</Text>
                      <Text style={styles.font}>غَ</Text>
                      <Text style={styles.font}>عَ</Text>
                      <Text style={styles.font}>ظَ</Text>
                      <Text style={styles.font}>طَ</Text>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h19b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h19b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَ</Text>
                      <Text style={styles.font}>كَ</Text>
                      <Text style={styles.font}>قَ</Text>
                      <Text style={styles.font}>فَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>عَ</Text>
                      <Text style={styles.font}>غَ</Text>
                      <Text style={styles.font}>طَ</Text>
                      <Text style={styles.font}>ظَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h19b3')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h19b3' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <View style={styles.row2}>
                          <Text style={styles.font}>قَ</Text>
                          <Text style={styles.font}>طَ</Text>
                        </View>
                        <View style={styles.separator}></View>
                        <View style={styles.row2}>
                          <Text style={styles.font}>فَ</Text>
                          <Text style={styles.font}>كَ</Text>
                        </View>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <View style={styles.row2}>
                          <Text style={styles.font}>طَ</Text>
                          <Text style={styles.font}>ظَ</Text>
                        </View>
                        <View style={styles.separator}></View>
                        <View style={styles.row2}>
                          <Text style={styles.font}>عَ</Text>
                          <Text style={styles.font}>غَ</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>٣</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h19b4')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h19b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>فَ</Text>
                        <Text style={styles.font}>عَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>كَ</Text>
                        <Text style={styles.font}>قَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ظَ</Text>
                        <Text style={styles.font}>طَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>غَ</Text>
                        <Text style={styles.font}>عَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h19b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h19b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>طَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>تَ</Text>
                        <Text style={styles.font}>كَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>طَ</Text>
                        <Text style={styles.font}>تَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>غَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h19b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h19b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>ثَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>دَ</Text>
                        <Text style={styles.font}>زَ</Text>
                      </View>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>ظَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>طَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h19b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h19b7' ? '#76B800' : '#fff'}]}>
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
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h19b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h19b8' ? '#76B800' : '#fff'}]}>
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
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h19b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h19b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>كَ</Text>
                    <Text style={styles.font}>قَ</Text>
                    <Text style={styles.font}>فَ</Text>
                    <Text style={styles.font}>غَ</Text>
                    <Text style={styles.font}>عَ</Text>
                    <Text style={styles.font}>ظَ</Text>
                    <Text style={styles.font}>طَ</Text>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b1' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>قَ</Text>
                        <Text style={styles.font}>زَ</Text>
                        <Text style={styles.font}>رَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>قَ</Text>
                        <Text style={styles.font}>زَ</Text>
                        <Text style={styles.font}>رَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>فَكَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>كَ</Text>
                        <Text style={styles.font}>فَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b2' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَدَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>دَ</Text>
                        <Text style={styles.font}>بَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>كَفَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>فَ</Text>
                        <Text style={styles.font}>كَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b3' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>غَفَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>فَ</Text>
                        <Text style={styles.font}>غَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَفَظَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ظَ</Text>
                        <Text style={styles.font}>فَ</Text>
                        <Text style={styles.font}>حَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b4' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ضَ</Text>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ضَ</Text>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>أَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>سَكَتَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={[styles.font, {fontSize: 33} ]}>تَ</Text>
                        <Text style={[styles.font, {fontSize: 33} ]}>كَ</Text>
                        <Text style={[styles.font, {fontSize: 33} ]}>سَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b5' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>جَرَبَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>جَ</Text>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b6' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>خَسَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>سَ</Text>
                        <Text style={styles.font}>خَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>صَبَحَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>حَ</Text>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>صَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b7' ? '#76B800' : '#fff'}]}>
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
                        <Text style={styles.font}>صَدَقَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>قَ</Text>
                        <Text style={styles.font}>دَ</Text>
                        <Text style={styles.font}>صَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b8' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={styles.font}>فَكَشَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>شَ</Text>
                        <Text style={styles.font}>كَ</Text>
                        <Text style={styles.font}>فَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>ذَكَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>رَ</Text>
                        <Text style={styles.font}>كَ</Text>
                        <Text style={styles.font}>ذَ</Text>
                      </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h20b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h20b9' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row2}>
                        <Text style={[styles.font, {fontSize: 32} ]}>خَطَبَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>بَ</Text>
                        <Text style={styles.font}>طَ</Text>
                        <Text style={styles.font}>خَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>عَقَفَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row2}>
                        <Text style={styles.font}>فَ</Text>
                        <Text style={styles.font}>قَ</Text>
                        <Text style={styles.font}>عَ</Text>
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
