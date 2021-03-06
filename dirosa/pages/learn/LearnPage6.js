import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage6 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 6</Title>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h27b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h27b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>تُ</Text>
                      <Text style={styles.font}>تِ</Text>
                      <Text style={styles.font}>تَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>بُ</Text>
                      <Text style={styles.font}>بِ</Text>
                      <Text style={styles.font}>بَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>أُ</Text>
                      <Text style={styles.font}>إِ</Text>
                      <Text style={styles.font}>أَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h27b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h27b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>حُ</Text>
                      <Text style={styles.font}>حِ</Text>
                      <Text style={styles.font}>حَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>جُ</Text>
                      <Text style={styles.font}>جِ</Text>
                      <Text style={styles.font}>جَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>ثُ</Text>
                      <Text style={styles.font}>ثِ</Text>
                      <Text style={styles.font}>ثَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h27b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h27b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { fontSize: 34} ]}>تُبَ</Text>
                      <Text style={[styles.font, { fontSize: 34} ]}>تِبَ</Text>
                      <Text style={[styles.font, { fontSize: 34} ]}>تَبَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>بُجَ</Text>
                      <Text style={styles.font}>بِجَ</Text>
                      <Text style={styles.font}>بَجَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>بَ</Text>
                      <Text style={styles.font}>أُ</Text>
                      <Text style={styles.font}>بَ</Text>
                      <Text style={styles.font}>إِ</Text>
                      <Text style={styles.font}>بَ</Text>
                      <Text style={styles.font}>أَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h27b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h27b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 32} ]}>حُجَ</Text>
                      <Text style={[styles.font, {fontSize: 32} ]}>حِجَ</Text>
                      <Text style={[styles.font, {fontSize: 32} ]}>حَجَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 27} ]}>جُتَ</Text>
                      <Text style={[styles.font, {fontSize: 27} ]}>جِتَ</Text>
                      <Text style={[styles.font, {fontSize: 27} ]}>جَتَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 34} ]}>ثُبَ</Text>
                      <Text style={[styles.font, {fontSize: 34} ]}>ثِبَ</Text>
                      <Text style={[styles.font, {fontSize: 34} ]}>ثَبَ</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٤</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h27b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h27b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>بُتِحَ</Text>
                      <Text style={styles.font}>بَتَحَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 34} ]}>أُجِبَ</Text>
                      <Text style={[styles.font, {fontSize: 34} ]}>أَجَبَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>أُبِحَ</Text>
                      <Text style={styles.font}>أَبَحَ</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٥</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h27b6')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h27b6' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>بُتِأَ</Text>
                    <Text style={styles.font}>بَتَأَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>بُتِحَ</Text>
                    <Text style={styles.font}>بَتَحَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 34 } ]}>بُجِحَ</Text>
                    <Text style={[styles.font, { fontSize: 34 } ]}>بَجَحَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h27b7')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h27b7' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ثُإِبَ</Text>
                    <Text style={styles.font}>ثَأَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 30 } ]}>تُجِبَ</Text>
                    <Text style={[styles.font, { fontSize: 30 } ]}>تَجَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>تُإِحَ</Text>
                    <Text style={styles.font}>تَأَحَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h27b8')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h27b8' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 32 } ]}>جُبِتَ</Text>
                    <Text style={[styles.font, { fontSize: 32 } ]}>جَبَتَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ثُبِتَ</Text>
                    <Text style={styles.font}>ثَبَتَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ثُجِأَ</Text>
                    <Text style={styles.font}>ثَجَأَ</Text>
                  </View>
                </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h27b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h27b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>حُتِبَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>حَتَبَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { fontSize: 32 } ]}>جُبِتَ</Text>
                      <Text style={[styles.font, { fontSize: 32 } ]}>جَبَتَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { fontSize: 32 } ]}>جُإِبَ</Text>
                      <Text style={[styles.font, { fontSize: 32 } ]}>جَأَبَ</Text>
                    </View>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b1')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b1' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ذُ</Text>
                    <Text style={styles.font}>ذِ</Text>
                    <Text style={styles.font}>ذَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>دُ</Text>
                    <Text style={styles.font}>دِ</Text>
                    <Text style={styles.font}>دَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>خُ</Text>
                    <Text style={styles.font}>خِ</Text>
                    <Text style={styles.font}>خَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b2')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b2' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>سُ</Text>
                    <Text style={styles.font}>سِ</Text>
                    <Text style={styles.font}>سَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>زُ</Text>
                    <Text style={styles.font}>زِ</Text>
                    <Text style={styles.font}>زَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>رُ</Text>
                    <Text style={styles.font}>رِ</Text>
                    <Text style={styles.font}>رَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b3')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b3' ? '#76B800' : '#fff'}]}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ذُرَ</Text>
                    <Text style={styles.font}>ذِرَ</Text>
                    <Text style={styles.font}>ذَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>دُرَ</Text>
                    <Text style={styles.font}>دِرَ</Text>
                    <Text style={styles.font}>دَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 27 } ]}>خُبَ</Text>
                    <Text style={[styles.font, { fontSize: 27 } ]}>خِبَ</Text>
                    <Text style={[styles.font, { fontSize: 27 } ]}>خَبَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b4')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b4' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 26 } ]}>سُبَ</Text>
                    <Text style={[styles.font, { fontSize: 26 } ]}>سِبَ</Text>
                    <Text style={[styles.font, { fontSize: 26 } ]}>سَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>زُرَ</Text>
                    <Text style={styles.font}>زِرَ</Text>
                    <Text style={styles.font}>زَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>رُتَ</Text>
                    <Text style={styles.font}>رِتَ</Text>
                    <Text style={styles.font}>رَتَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b5')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b5' ? '#76B800' : '#fff'}]}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 32 } ]}>دُرِسَ</Text>
                    <Text style={[styles.font, { fontSize: 32 } ]}>دَرَسَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 32 } ]}>خُسِرَ</Text>
                    <Text style={[styles.font, { fontSize: 32 } ]}>خَسَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 32 } ]}>خُرِجَ</Text>
                    <Text style={[styles.font, { fontSize: 32 } ]}>خَرَجَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b6')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b6' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>زُجِرَ</Text>
                    <Text style={styles.font}>زَجَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 30 } ]}>رُسِبَ</Text>
                    <Text style={[styles.font, { fontSize: 30 } ]}>رَسَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ذُبِحَ</Text>
                    <Text style={styles.font}>ذَبَحَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b7')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b7' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 28 } ]}>حُسِبَ</Text>
                    <Text style={[styles.font, { fontSize: 28 } ]}>حَسَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 32 } ]}>سُرِجَ</Text>
                    <Text style={[styles.font, { fontSize: 32 } ]}>سَرَجَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 32 } ]}>سُبِحَ</Text>
                    <Text style={[styles.font, { fontSize: 32 } ]}>سَبَحَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b8')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b8' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 30 } ]}>جُرِسَ</Text>
                    <Text style={[styles.font, { fontSize: 30 } ]}>جَرَسَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 30 } ]}>جُرِبَ</Text>
                    <Text style={[styles.font, { fontSize: 30 } ]}>جَرَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>سُتِرَ</Text>
                    <Text style={styles.font}>سَتَرَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h28b9')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h28b9' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>خُبِرَ</Text>
                      <Text style={styles.font}>خَبَرَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>حُذِرَ</Text>
                      <Text style={styles.font}>حَذَرَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>بُرِزَ</Text>
                      <Text style={styles.font}>بَرَزَ</Text>
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
  row3: {
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
