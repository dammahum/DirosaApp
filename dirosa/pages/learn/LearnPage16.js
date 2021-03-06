import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage16 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 16</Title>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالْحَمْدُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>اَلْحَمْدُ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>لَكَ الْحَمْدُ‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِالْحَمْدِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مَعَ الْحَمْدِ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>عَلَى الْأَفئِدَةِ‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فِى الْأَرْضِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِالْمَرْحَمَةِ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>‎بِالْمُجْرِمِيْنَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مَااقْتَتَلُوْا</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مَااكْتَسَبَتْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 28}]}>فَأْتِيَافِرْعَوْنَ فَقُوْﻻَإِنَّارَسُوْلُ رَبِّ الْعَالَمِيْنَ‎</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>قَالَ رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ وَمَابَيْنَهُمَا‎</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>فَأَرْسَلَ فِرْعَوْنُ فِى الْمَدَائِنِ حَاشِرِيْنَ‎</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>أَوْفُوْاالْكَيْلَ وَﻻَ تَكُوْنُوْا مِنَ الْمُخْسِرِيْنَ‎</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h51b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h51b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَاتَّقُوْاالَّذِيْ خَلَقَكُمْ وَالْجِبِلَّةَالْأَوَّلِيْنَ‎</Text>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 16}]}>alif dan lam melebur ke huruf yg bertasydid</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالنَّهَارُ</Text>
                      <Text style={styles.font}>وَنَّهَارُ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالنَّاشِطَاتِ نَشْطًا</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالنَّازِعَاتِ غَرْقًا</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالْقَمَرِإِذَاتَلَاهَا</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>وَالشَّمْسِ وَضُحَاهَا</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَاللَّيْلِ إِذَايَغْشَاهَا</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالنَّهَارِ إِذَاجَلَّاهَا</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>وَالْأَرْضِ وَمَاطَحَاهَا</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالسَّمَاءِوَمَابَنَاهَا</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>وَمَاأَدْرَاكَ مَاالطَّارِقُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالسَّمَاءِوَالطَّارِقِ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 26}]}>وَالأَرْضِ ذَاتِ الَّصَدْعِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>وَالسَّمَاءِ ذَاتِ الرَّجْعِ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالَّيْلِ وَمَاوَسَقَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَلَاأُقْسِمُ بِالشَّفَقِ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h52b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h52b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَإِذَاالْمَوْءُوْدَةُسُئِلَتْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>وَإِذَالنُّفُوْسُ زُوِّجَتْ</Text>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 14, marginTop: 0}]}>Suara mim dan nun tasydid ditahan 2 harakat dan berdengung</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مِمَّا</Text>
                      <Text style={styles.font}>إِنَّ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَإِنَّاإِلَيْهِ رَاجِعُوْنَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>إِنَّهُمْ كَانُوْامُجْرِمِيْنَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 26}]}>فَإِنَّ الْجَحِيْمَ هِيَ الْمَأْوى</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ثُمَّ أَدْبَرَ يَسْعَى</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>إنَّ هَذِهِ تَذْكِرَةٌ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>إِنَ كَيْدِيْ مَتِيْنٌ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ثُمَّ أغْرَقْنَاالْأَخَرِيْنَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>إِنَّ اللَّهَ بَالِغُ أَمْرِهِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>فَإِنَّ الْجَنَّةَهِيَ الْمَأْوَى</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالنَّجْمِ إِذَاهَوَى</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 27}]}>إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 26}]}>ثُمَّ إِنَّ عَلَيْنَا حِسَابَهُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>إِنَّ إِلَيْنَآإَيَابَهُمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h53b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h53b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَظَنَّ أَنَّهُ الْفِرَاقُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>إِنَّهُمْ كَانُوْامُجْرِمِيْنَ</Text>
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
    fontSize: 30,
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
