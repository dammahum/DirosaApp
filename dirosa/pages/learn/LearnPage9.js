import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage9 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 9</Title>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h33b1')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h33b1' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>تٌ</Text>
                      <Text style={styles.font}>تٍ</Text>
                      <Text style={styles.font}>تً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>تَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>بٌ</Text>
                      <Text style={styles.font}>بٍ</Text>
                      <Text style={styles.font}>بً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>بَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>أٌ</Text>
                      <Text style={styles.font}>أٍ</Text>
                      <Text style={styles.font}>أً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>أَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b2' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>حٌ</Text>
                      <Text style={styles.font}>حٍ</Text>
                      <Text style={styles.font}>حً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>حَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>جٌ</Text>
                      <Text style={styles.font}>جٍ</Text>
                      <Text style={styles.font}>جً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>جَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>ثٌ</Text>
                      <Text style={styles.font}>ثٍ</Text>
                      <Text style={styles.font}>ثً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>ثَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b3' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>ذٌ</Text>
                      <Text style={styles.font}>ذٍ</Text>
                      <Text style={styles.font}>ذً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>ذَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>دٌ</Text>
                      <Text style={styles.font}>دٍ</Text>
                      <Text style={styles.font}>دً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>دَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>خٌ</Text>
                      <Text style={styles.font}>خٍ</Text>
                      <Text style={styles.font}>خً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>خَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b4' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30} ]}>سٌ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>سٍ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>سً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>سَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>زٌ</Text>
                      <Text style={styles.font}>زٍ</Text>
                      <Text style={styles.font}>زً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>زَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>رٌ</Text>
                      <Text style={styles.font}>رٍ</Text>
                      <Text style={styles.font}>رً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>رَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b5' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30} ]}>ضٌ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>ضٍ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>ضً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={[styles.font, {fontSize: 30} ]}>ضَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30} ]}>صٌ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>صٍ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>صً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={[styles.font, {fontSize: 30} ]}>صَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30} ]}>شٌ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>شٍ</Text>
                      <Text style={[styles.font, {fontSize: 30} ]}>شً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={[styles.font, {fontSize: 30} ]}>شَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b6' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>عٌ</Text>
                      <Text style={styles.font}>عٍ</Text>
                      <Text style={styles.font}>عً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>عَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>ظٌ</Text>
                      <Text style={styles.font}>ظٍ</Text>
                      <Text style={styles.font}>ظً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>ظَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>طٌ</Text>
                      <Text style={styles.font}>طٍ</Text>
                      <Text style={styles.font}>طً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>طَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b7' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>قٌ</Text>
                      <Text style={styles.font}>قٍ</Text>
                      <Text style={styles.font}>قً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>قَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>فٌ</Text>
                      <Text style={styles.font}>فٍ</Text>
                      <Text style={styles.font}>فً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>فَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>غٌ</Text>
                      <Text style={styles.font}>غٍ</Text>
                      <Text style={styles.font}>غً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>غَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b8' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>مٌ</Text>
                      <Text style={styles.font}>مٍ</Text>
                      <Text style={styles.font}>مً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>مَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>لٌ</Text>
                      <Text style={styles.font}>لٍ</Text>
                      <Text style={styles.font}>لً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>لَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>كٌ</Text>
                      <Text style={styles.font}>كٍ</Text>
                      <Text style={styles.font}>كً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>كَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h33b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h33b9' ? '#76B800' : '#fff'}]}>
                 <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>يٌ</Text>
                      <Text style={styles.font}>يٍ</Text>
                      <Text style={styles.font}>يً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>يَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>وٌ</Text>
                      <Text style={styles.font}>وٍ</Text>
                      <Text style={styles.font}>وً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>وَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>نٌ</Text>
                      <Text style={styles.font}>نٍ</Text>
                      <Text style={styles.font}>نً</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row1a}>
                      <Text style={styles.font}>نَ</Text>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b1')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b1' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>بَلَغًا‎</Text>
                    <Text style={styles.font}>رَزَقًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>طَبَقًا‎</Text>
                    <Text style={styles.font}>جَلَسًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>عَمَلًا‎</Text>
                    <Text style={styles.font}>أَبَدًا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b2')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b2' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>فِتَنٌ</Text>
                    <Text style={styles.font}>حَرَزٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>سَلُفٍ</Text>
                    <Text style={styles.font}>حُرُمٍ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>وَرَقٌ</Text>
                    <Text style={styles.font}>كُتُبٌ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b3')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b3' ? '#76B800' : '#fff'}]}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, { fontSize: 32 } ]}>عَرَشًا‎</Text>
                    <Text style={[styles.font, { fontSize: 32 } ]}>قَفَصًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>خُلُقًا‎</Text>
                    <Text style={styles.font}>سُوَعًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>فَرَسٌ</Text>
                    <Text style={styles.font}>رَجُلٌ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b4')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b4' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>بُدُرٌ</Text>
                    <Text style={styles.font}>جَسَدٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>عِنَبًا‎</Text>
                    <Text style={styles.font}>عَلَمًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>هَبَطٍ</Text>
                    <Text style={styles.font}>ثُلُثٍ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b5')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b5' ? '#76B800' : '#fff'}]}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>مَلِكًا‎</Text>
                    <Text style={styles.font}>جَمِعًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>ذِهَبًا‎</Text>
                    <Text style={styles.font}>سَلَكًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>كَرَمًا‎</Text>
                    <Text style={styles.font}>هَرَبًا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b6')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b6' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>شَجَرٌ</Text>
                    <Text style={styles.font}>عِبَرٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>عُنُقٍ</Text>
                    <Text style={styles.font}>نُسُقٍ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>سَفَرٍ</Text>
                    <Text style={styles.font}>رُبُعٍ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b7')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b7' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>قَفَسٌ</Text>
                    <Text style={styles.font}>بِدَعٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>بَقَرٌ</Text>
                    <Text style={styles.font}>خُفُسٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>عَلِمًا‎</Text>
                    <Text style={styles.font}>ذَهَبًا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b8')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b8' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>صَغِرًا‎</Text>
                    <Text style={styles.font}>كَبِرًا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>وَطَنٌ</Text>
                    <Text style={styles.font}>بَدَنٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>جِدَوٌ</Text>
                    <Text style={styles.font}>سَبِقٌ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h34b9')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h34b9' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>جَمِلٌ</Text>
                      <Text style={styles.font}>لَطِفُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { fontSize: 32 } ]}>مُسَئٌ</Text>
                      <Text style={[styles.font, { fontSize: 32 } ]}>صَبَحٌ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, { fontSize: 32 } ]}>سَمِعًا‎</Text>
                      <Text style={[styles.font, { fontSize: 32 } ]}>جَلِسً</Text>
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
  row1a: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
