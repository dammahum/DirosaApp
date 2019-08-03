import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import Sound from 'react-native-sound';

export default class LearnPage18 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 18</Title>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b1')}>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={[styles.row4, {backgroundColor: '#000'}]}>
                      <Text style={[styles.font, {fontSize: 12, color: '#fff' ,textAlign: 'center', marginTop: 5}]}>Nun sukun / tanwin bertemu {'\n'} huruf ب, dibaca dengan dengung {'\n'} ditahan 2 harokat.</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={[styles.row4, {backgroundColor: this.state.play == 'h57b1' ? '#76B800' : '#fff'}]}>
                      <Text style={styles.font}>نُوْرٌ ۢ بَيْنِيْ - عَوَانٌ ۢ بَيْنَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h57b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>هٰذَا مُغْتَسَلٌ ۢ بَارِدٌ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>سَاَلَ سَاۤىِٕلٌ ۢ بِعَذَابٍ وَّاقِعٍ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h57b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مِّنْ اٰيَةٍ ۢ بَيِّنَةٍ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وُجُوْهٌ يَّوْمَىِٕذٍ نَّاعِمَةٌ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h57b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>كُلُّ نَفْسٍ ۢ بِمَا كَسَبَتْ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>اَللّٰهُ لَطِيْفٌ ۢ بِعِبَادِهٖ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h57b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ذٰلِكَ رَجْعٌ ۢ بَعِيْدٌ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>اِنَّهٗ عَلِيْمٌ ۢبِذَاتِ الصُّدُوْرِ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b6')}>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={[styles.row4, {backgroundColor: '#000'}]}>
                      <Text style={[styles.font, {fontSize: 12, color: '#fff' ,textAlign: 'center', marginTop: 5}]}>Mim sukun bertemu م {'\n'} dan ب, dibaca dengung {'\n'} ditahan 2 harokat</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={[styles.row4, {backgroundColor: this.state.play == 'h57b6' ? '#76B800' : '#fff'}]}>
                      <Text style={[styles.font, {fontSize: 20}]}>كَفَرْتُمْ بَعْدَ⚬لَكُمْ مَا كَسَبْتُمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h57b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>فَهُم مِّن مَّغْرَمٍ مُّثْقَلُونَ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>عَلَيْهِمْ بِالْاِثْمِ وَالْعُدْوَانِ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h57b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 23}]}>إِنَّا خَلَقْنَٰاهُمْ مِمَّا يَعْمَلُونَ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>فَمَنْ يَّأْتِيْكُمْ بِمَاۤءٍ مَّعِيْنٍ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h57b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h57b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 20}]}>يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>سَلْهُمْ اَيُّهُمْ بِذٰلِكَ زَعِيْمٌ⚬</Text>
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

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b1')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b1' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>يَّهْدِيْٓ اِلَى الرُّشْدِ فَاٰمَنَّا بِهٖ وَلَنْ نُّشْرِكَ بِرَبِّنَآ اَحَدًا⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b2')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b2' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَّاَنَّهٗ تَعٰلٰى جَدُّ رَبِّنَا مَا اتَّخَذَ صَاحِبَةً وَّلَا وَلَدًا⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b3')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b3' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 22}]}>نَتْلُوْا عَلَيْكَ مِنْ نَّبَاِ مُوْسٰى وَفِرْعَوْنَ بِالْحَقِّ لِقَوْمٍ يُّؤْمِنُوْنَ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b4')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b4' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>اِنَّ فِرْعَوْنَ عَلَا فِى الْاَرْضِ وَجَعَلَ اَهْلَهَا شِيَعًا⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b5')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b5' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>عَيْنًا يَّشْرَبُ بِهَا عِبَادُ اللّٰهِ يُفَجِّرُوْنَهَا تَفْجِيْرًا⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b6')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b6' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>اِنَّ هٰذَا كَانَ لَكُمْ جَزَاۤءً وَّكَانَ سَعْيُكُمْ مَّشْكُوْرًا⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b7')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b7' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>قَالَ كَلَّا فَاذْهَبَا بِاٰيٰتِنَآ اِنَّا مَعَكُمْ مُّسْتَمِعُوْنَ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b8')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b8' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَأْتِيَا فِرْعَوْنَ فَقُوْلَآ اِنَّا رَسُوْلُ رَبِّ الْعٰلَمِيْنَ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => this.playSound('h58b9')}>
                <View style={[styles.row, {backgroundColor: this.state.play == 'h58b9' ? '#76B800' : '#fff'}]}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَمَكَرُوا مَكْرًا وَمَكَرْنَا مَكْرًا وَهُمْ لَا يَشْعُرُونَ⚬</Text>
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
    fontSize: 26,
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
