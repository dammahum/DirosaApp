import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage8 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 8</Title>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h31b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h31b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>هُ</Text>
                      <Text style={styles.font}>هِ</Text>
                      <Text style={styles.font}>هَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>وُ</Text>
                      <Text style={styles.font}>وِ</Text>
                      <Text style={styles.font}>وَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>نُ</Text>
                      <Text style={styles.font}>نِ</Text>
                      <Text style={styles.font}>نَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h31b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h31b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يُ</Text>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يِ</Text>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يُ</Text>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يِ</Text>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يُ</Text>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يِ</Text>
                      <Text style={[styles.font, { marginTop: 3 } ]}>يَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h31b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h31b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>هُلَ</Text>
                      <Text style={styles.font}>هِلَ</Text>
                      <Text style={styles.font}>هَلَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>وُدَ</Text>
                      <Text style={styles.font}>وِدَ</Text>
                      <Text style={styles.font}>وَدَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>نُمَ</Text>
                      <Text style={styles.font}>نِمَ</Text>
                      <Text style={styles.font}>نَمَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h31b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h31b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 29}]}>كُمَ</Text>
                      <Text style={[styles.font, {fontSize: 29}]}>كِمَ</Text>
                      <Text style={[styles.font, {fontSize: 29}]}>كَمَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>جُدَ</Text>
                      <Text style={styles.font}>جِدَ</Text>
                      <Text style={styles.font}>جَدَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>يُرَ</Text>
                      <Text style={styles.font}>يِرَ</Text>
                      <Text style={styles.font}>يَرَ</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٤</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h31b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h31b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>وُقِعَ</Text>
                      <Text style={styles.font}>وَقَعَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>نُصِرَ</Text>
                      <Text style={styles.font}>نَصَرَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>نُزِلَ</Text>
                      <Text style={styles.font}>نَزَلَ</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٥</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h31b6')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h31b6' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>هُلِكَ</Text>
                    <Text style={styles.font}>هَلَكَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>هُمِزَ</Text>
                    <Text style={styles.font}>هَمَزَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>وُكِلَ</Text>
                    <Text style={styles.font}>وَكَلَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h31b7')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h31b7' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>فُكِرَ</Text>
                    <Text style={styles.font}>فَكَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>مُنِعَ</Text>
                    <Text style={styles.font}>مَنَعَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>يُسِرَ</Text>
                    <Text style={styles.font}>يَسَرَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h31b8')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h31b8' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>حُمِلَ</Text>
                    <Text style={styles.font}>حَمَلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>سُفِهَ</Text>
                    <Text style={styles.font}>سَفَهَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ثُمِنَ</Text>
                    <Text style={styles.font}>ثَمَنَ</Text>
                  </View>
                </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h31b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h31b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>فُقِهَ</Text>
                      <Text style={styles.font}>فَقِهَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>لُعِنَ</Text>
                      <Text style={styles.font}>لَعَنَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>فُهِمَ</Text>
                      <Text style={styles.font}>فَهَمَ</Text>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b1')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b1' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>تُرِكَ</Text>
                    <Text style={styles.font}>نُسِيَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 32} ]}>سُجِنَ</Text>
                    <Text style={[styles.font, {fontSize: 32} ]}>وُكِلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>هُدِمَ</Text>
                    <Text style={styles.font}>كُتِبَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b2')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b2' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                   <Text style={styles.font}>جُهِدَ</Text>
                   <Text style={styles.font}>هُجِمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>نُسِبَ</Text>
                    <Text style={styles.font}>لُبِسَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>جُلِبَ</Text>
                    <Text style={styles.font}>رُكِبَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b3')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b3' ? '#76B800' : '#fff'}]}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 32} ]}>نُظِفَ</Text>
                    <Text style={[styles.font, {fontSize: 32} ]}>دُخِلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>رُسِمَ</Text>
                    <Text style={styles.font}>نُظِرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 32} ]}>سُءِمَ</Text>
                    <Text style={[styles.font, {fontSize: 32} ]}>نُكِبَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b4')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b4' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>فُكِرَ</Text>
                    <Text style={styles.font}>عُبِرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>هُدِرَ</Text>
                    <Text style={styles.font}>سُفِرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>كُثِرَ</Text>
                    <Text style={styles.font}>سُتِرَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b5')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b5' ? '#76B800' : '#fff'}]}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>كُتِبَ</Text>
                    <Text style={styles.font}>طُرِدَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 32} ]}>خُبِثَ</Text>
                    <Text style={[styles.font, {fontSize: 32} ]}>فُصِحَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>سُهِرَ</Text>
                    <Text style={styles.font}>ظُفِرَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b6')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b6' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>سَهُمَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>ثَمُنَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>دَهُمَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>سَهُلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>سَرُوَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>كَمُلَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b7')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b7' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>سَئِمَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>زَعِمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>حَجِبَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>حَزِمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>عَجِزَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>أَمِنَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b8')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b8' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>نَصِحَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>فَعِلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 32} ]}>وَضِعَ</Text>
                    <Text style={[styles.font, {fontSize: 32} ]}>حَمِدَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34} ]}>فَطِنَ</Text>
                    <Text style={[styles.font, {fontSize: 34} ]}>فَهِمَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h32b9')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h32b9' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 34} ]}>ذَهَبَ</Text>
                      <Text style={[styles.font, {fontSize: 34} ]}>صَلَحَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 34} ]}>هَمَسَ</Text>
                      <Text style={[styles.font, {fontSize: 34} ]}>نَجَسَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30} ]}>شَجَعَ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>سَأَلَ</Text>
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
    fontSize: 34,
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
