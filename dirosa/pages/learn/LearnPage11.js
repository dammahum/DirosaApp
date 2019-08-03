import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage11 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 11</Title>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b1')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h40b1' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>مَا‎ = مٰ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>وَا‎ = وٰ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بَا‎ = بٰ</Text>
                      </View>
                      </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>طَحٰهَا‎</Text>
                      <Text style={styles.font}>بَنٰهَا‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>أٰيَة‎ُ</Text>
                      <Text style={styles.font}>أٰخِرُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>أٰمَنَ</Text>
                      <Text style={styles.font}>أٰدَمَ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>فَأٰوٰى‎</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>فَنَا‎دٰى‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>مُوْسٰى‎</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>ذٰلِكَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>تَعَا‎لٰى‎</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>وَهٰذَا‎</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 28 } ]}>تَعٰالَى‎‎</Text>
                      <Text style={[styles.font, { fontSize: 28 } ]}>سَمٰوٰتِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 28 } ]}>نَا‎عَمَ</Text>
                      <Text style={[styles.font, { fontSize: 28 } ]}>حٰفِظَا‎تِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 26 } ]}>نَصَا‎رٰى‎</Text>
                      <Text style={[styles.font, { fontSize: 26 } ]}>عِيسٰى‎</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَأُتُوْا‎بِهٖ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مِي‎ْ = مِى‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>هِي‎ْ = ـه‎ِ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>لَأُمَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>حَسَا‎دِهٖ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>بَا‎طِنَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>بِبَا‎لِغِهٖ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِبَنٖي‎</Text>
                      <Text style={styles.font}>هٰذِهٖ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>تَا‎بَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>عِبَا‎دِهٖ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>لِجَا‎مَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>مَقَا‎مِى‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>عَا‎دَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>مِيثَا‎قِهٖ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>وَلَهُ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>صَا‎حِبَتِهٖ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>قَا‎لَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>لَمُقِي‎ْمٖى‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>قَا‎دَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>وَرُسُلِهٖ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h40b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h40b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>يَدَهُ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>إِذَقَضٰى‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>ظَا‎هِرَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>بَطَئِهٖ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 30 } ]}>هَا‎دِمَ</Text>
                      <Text style={[styles.font, { fontSize: 30 } ]}>وَكُتُبِهٖ</Text>
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

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b1')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h40b1' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>= ى‎،‬ا‎</Text>
                    <Text style={{ fontSize: 18, marginTop: 20, color: '#000' }}>Tidak dibaca</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>قَا‎لُوْا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b2')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b2' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سَجٰى‎ = سَجَا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>لَا‎تَخُوْنُوْا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b3')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b3' ? '#76B800' : '#fff'}]}>
               <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>فَقَضٰى‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يَتَا‎مٰى‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَعَمِلُوْا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>أٰمَنُوْا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b4')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b4' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 27 } ]}>وَجَا‎هَدُوْا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 31 } ]}>هَا‎جَرُوْا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 } ]}>وَرَا‎بِطُوْا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>صَا‎بِرُوْا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b5')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b5' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 26 } ]}>مَا‎عَا‎هَدُوْا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>صَدَقُوْا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 } ]}>مَا‎عَمِلُوْا‎</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَجَدُوْا‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b6')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b6' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَلَهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يَدَهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>مَعَهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>ـه‎ٗ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b7')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b7' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 }]}>مَوَا‎زِينُهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 26 }]}>وَوَلَدُهٗ</Text>
                    <Text style={[styles.font, { fontSize: 26 }]}>مَا‎لُهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يُسِيغُهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يَرَهٗ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b8')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b8' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَأُتُوْا‎بِهٖ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 }]}>وَجُنُوْدُهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>فِصٰلُهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>أُوْتِيتُهٗ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => this.playSound('h41b9')}>
              <View style={[styles.row, {backgroundColor: this.state.play == 'h41b9' ? '#76B800' : '#fff'}]}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 }]}n>حٰفِظَا‎تِ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 }]}n>رَضِيَ لُهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حِسَا‎بُهٗ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>فَمَثَلُهٗ</Text>
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

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b1')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b1' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>فَتَعَاطٰى فَعَقَرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>قَالُوا تَقَاسَمُوا</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b2')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b2' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>فَعَلَ هٰذَا بِاٰلِهَتِنَا</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>هَارُوْتَ وَمَارُوْتَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٢</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b3')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b3' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>كَانُوْافِيْهَافٰكِهِيْنَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={[styles.font, {fontSize: 30}]}>يُقَاتِلُوْنَ فِيْ سَبِيْلِهٖ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٣</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b4')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b4' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>وَصَاحِبَتِهٖ وَبَنِيْهِ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>فَكَانَ عَاقِبَتَهُمَا</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٤</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b5')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b5' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>يَخَافٌوْنَ عَذَابَهُ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={[styles.font, {fontSize: 29}]}>فَلَاتَلُوْمُوْنِيْ وَلُوْمُوْ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٥</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b6')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b6' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={[styles.font, {fontSize: 30}]}>وَجَعَلَ فِيْهَارَوَاسِيَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>وَيَذَرَكَ وَاٰلِهَتَكَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٦</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b7')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b7' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>وَخَرَقُوْالَهٗ بَنِيْنَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بِمَاتُفِيْضُوْنَ فِيْهِ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٧</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b8')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b8' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={[styles.font, {fontSize: 32}]}>صَدَقُوْامَاعَاهَدُوْا</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={[styles.font, {fontSize: 30}]}>وَهَامٰنَ وَجٌنُوْدَهُمَا</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٨</Text>
                    </View>
                  </View>
                  </TouchableWithoutFeedback>

                  <TouchableWithoutFeedback onPress={() => this.playSound('h42b9')}>
                  <View style={[styles.row, {backgroundColor: this.state.play == 'h42b9' ? '#76B800' : '#fff'}]}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>فَغُلِبُوْاهُنَالِكَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>لِاٰدَمَ فَسَجَدُوْا</Text>
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
