import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage12 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 12</Title>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَتْ</Text>
                      <Text style={styles.font}>بَتَّ</Text>
                      <Text style={styles.font}>بَتَ</Text>
                      <Text style={styles.font}>بَتَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>اَبْ</Text>
                      <Text style={styles.font}>اَبَّ</Text>
                      <Text style={styles.font}>اَبَ</Text>
                      <Text style={styles.font}>اَبَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَجْ</Text>
                      <Text style={styles.font}>بَجَّ</Text>
                      <Text style={styles.font}>بَجَ</Text>
                      <Text style={styles.font}>بَجَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَثْ</Text>
                      <Text style={styles.font}>بَثَّ</Text>
                      <Text style={styles.font}>بَثَ</Text>
                      <Text style={styles.font}>بَثَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَخْ</Text>
                      <Text style={styles.font}>بَخَّ</Text>
                      <Text style={styles.font}>بَخَ</Text>
                      <Text style={styles.font}>بَخَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَحْ</Text>
                      <Text style={styles.font}>بَحَّ</Text>
                      <Text style={styles.font}>بَحَ</Text>
                      <Text style={styles.font}>بَحَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَذْ</Text>
                      <Text style={styles.font}>بَذَّ</Text>
                      <Text style={styles.font}>بَذَ</Text>
                      <Text style={styles.font}>بَذَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَدْ</Text>
                      <Text style={styles.font}>بَدَّ</Text>
                      <Text style={styles.font}>بَدَ</Text>
                      <Text style={styles.font}>بَدَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَغْ</Text>
                      <Text style={styles.font}>بَغَّ</Text>
                      <Text style={styles.font}>بَغَ</Text>
                      <Text style={styles.font}>بَغَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَطْ</Text>
                      <Text style={styles.font}>بَطَّ</Text>
                      <Text style={styles.font}>بَطَ</Text>
                      <Text style={styles.font}>بَطَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَلْ</Text>
                      <Text style={styles.font}>بَلَّ</Text>
                      <Text style={styles.font}>بَلَ</Text>
                      <Text style={styles.font}>بَلَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَقْ</Text>
                      <Text style={styles.font}>بَقَّ</Text>
                      <Text style={styles.font}>بَقَ</Text>
                      <Text style={styles.font}>بَقَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَنْ</Text>
                      <Text style={styles.font}>بَنَّ</Text>
                      <Text style={styles.font}>بَنَ</Text>
                      <Text style={styles.font}>بَنَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَمْ</Text>
                      <Text style={styles.font}>بَمَّ</Text>
                      <Text style={styles.font}>بَمَ</Text>
                      <Text style={styles.font}>بَمَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَهْ</Text>
                      <Text style={styles.font}>بَهَّ</Text>
                      <Text style={styles.font}>بَهَ</Text>
                      <Text style={styles.font}>بَهَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَوْ</Text>
                      <Text style={styles.font}>بَوَّ</Text>
                      <Text style={styles.font}>بَوَ</Text>
                      <Text style={styles.font}>بَوَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h43b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h43b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَيْ</Text>
                      <Text style={styles.font}>بَيَّ</Text>
                      <Text style={styles.font}>بَيَ</Text>
                      <Text style={styles.font}>بَيَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَأْ</Text>
                      <Text style={styles.font}>بَأَّ</Text>
                      <Text style={styles.font}>بَأَ</Text>
                      <Text style={styles.font}>بَأَ</Text>
                    </View>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b1')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b1' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>لَحَّنَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سَجَّلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وُثِّقَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سُتِّمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سَبَّحَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b2')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b2' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>مُزِّقَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>فَرَّعَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>أَذَّنَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حَدَّدَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سَخَّرَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b3')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b3' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>خَطَّأَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>فَضَّلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>فَصَّلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>بُشِّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>مَسَّحَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b4')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b4' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>شُقِّقَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>عَفَّفَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>صَغَّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>شَعَّفَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حُظِّمَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b5')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b5' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَزَّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>بَيَّنَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>نَوَّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>بُلِّلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, {fontSize: 25}]}>سَكَّنَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b6')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b6' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سَهَّلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَهَّمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>شُكِّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حُبِّبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>عُزِّمَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b7')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b7' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>جَبَّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>قَدَّمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حُطِّمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>مَهَّدَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>رَكَّبَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b8')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b8' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>بَشَّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>كَبَّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>نَصَّحَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>صَعَّبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سَهَّلَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h44b9')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h44b9' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>خََذَّرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>بَدَّلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>كَرَّمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>نَظَّفَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حُبِّبَ</Text>
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
  row5: {
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
    fontSize: 31,
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
  row1a: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
