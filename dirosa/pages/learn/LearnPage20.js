import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage20 extends Component {

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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 20</Title>
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

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>يٰسۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>حٰمۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>طٰهٰ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>صۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>قۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>نۤ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>طٰسۤمّۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>طٰسۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤمّۤرٰ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤمّۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤرٰ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>كۤهٰيٰعۤصۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>عۤسۤقۤ</Text>
                      <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤمّۤصۤ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 27}]}>لِلّٰهِ بِاللّٰهِ بِسْمِ اللّٰهِ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَاللّٰهُ رَسُوْلُاللّٰهِ‎⚬</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِرَادِّيْ رِزْقِهِمْ⚬‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَلَا ٱلضَّآلِّينَ⚬</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَمَلَاْئِهِ فَظَلَمُوابِهَا‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>لكِنَّاهُوَاللّهُ رَبِّيْ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَقُلْ رَّبِّارْحَمْهُمَا‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>يَابُنَيَّ ارْكَبْ مَّعَنَا</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 27}]}>بِأْسَ الْاِسْمُ الْفُسُوْقُ‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِسْمِ اللّٰهِ مَجْرَاهَا</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مَالَكَ ﻻَ تَأْمَنَّا‎</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ءَاعْجَمِيٌّ وَّعَرَبِيٌّ</Text>
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
