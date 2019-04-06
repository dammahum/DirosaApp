import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage14 extends Component {
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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 14</Title>
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
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>Bauna</Text>
                      <Text style={styles.font}>بَوْنَ = </Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>Baina</Text>
                      <Text style={styles.font}>بَيْنَ = </Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                   <View style={styles.row4}>
                      <Text style={styles.font}>بُوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَانَكُمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                  <View style={styles.row4}>
                      <Text style={styles.font}>تُوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>تَوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>تِيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>تَيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>تَانَكُمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>جُوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>جَوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>جِيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>جَيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>جَانَكُمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>سُوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>سَوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>سِيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>سَيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>سَانَكُمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>طُوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>طَوْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>طِيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>طَيْنَكُمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25}]}>طَانَكُمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>يَـٰوَيْلَنَ</Text>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24, marginTop: 18}]}>فَعَصَوْا۟ رَسُولَ رَبِّهِمْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 28}]}>لَيْسَ لَهُمْ طَعَامٌ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>فِرْعَوْنَ</Text>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 25, marginTop: 18}]}>وَمَا هُوَ بِقَوْلِ شَاعِرٍۢ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>لِاِيْلٰفِ قُرَيْشٍ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={styles.font}>طُوْنَكُمْ</Text>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 26}]}>أَوْلَىٰ لَكَ فَأَوْلَىٰ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>يَقُولُ يَـٰلَيْتَنِىْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>
              
              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>قَبْلِكُمْ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حَسِبْتُمْ</Text>
                  </View>
                  <View style={styles.separator}></View>
                 <View style={styles.row4}>
                    <Text style={styles.font}>تُبْدُوْا</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَأَبْقَىٰ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سُبْحَانَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَجْهِهِ</Text>
                  </View>
                  <View style={styles.separator}></View>
                 <View style={styles.row4}>
                    <Text style={styles.font}>تُجْزَوْنَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يَجْعَلُونَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>

              <View style={styles.row}>
               <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>صَدْرَكَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَجَدْنَا </Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>قَدْحًا</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>تَدْخُلُوْنَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={[styles.font, {fontSize: 29}]}>يُطْعِمُونَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يَطْلُبُ</Text>
                  </View>
                  <View style={styles.separator}></View>
                 <View style={styles.row4}>
                    <Text style={styles.font}>مَطْلَعٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>لَيَطْغَىٰ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>مَقْبَرَةٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>مُّقْتَحِمٌ</Text>
                  </View>
                  <View style={styles.separator}></View>
                 <View style={styles.row4}>
                    <Text style={styles.font}>يَقْرَءُونَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>اَقْلَامٍ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>إِلَىٰ يَوْمِ يُبْعَثُونَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يَجْرِىٓ إِلَىٰٓ أَجَلٍ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وَلَا يَخَافُ عُقْبَـٰهَا</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يَجْعَلُونَ أَصَـٰبِعَهُمْ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>

              <View style={styles.row}>
               <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>فَوَسَطْنَ بِهِۦ جَمْعًا</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>لَمْ يَلِدْ وَلَمْ يُولَدْ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              
              <View style={styles.row}>
               <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>أَلَمْ يَجْعَلْ كَيْدَهُمْ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, {fontSize: 28}]}>وَقَدْ خَلَقَكُمْ أَطْوَارًا</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                </View>
              </View>

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
    marginTop: 12,
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
