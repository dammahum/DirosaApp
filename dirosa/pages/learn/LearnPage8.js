import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage8 extends Component {
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

                <View style={styles.row}>
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

                {/* /.End of Page */}

              </View>
              {/* /.Column */}
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>
              
              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>كُذِبَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>كَذَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>قُبِلَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>قَبَلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>فُتِحَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>فَتَحَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>مُلِكَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>مَلَكَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>لُمِسَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>لَمَسَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>كُمِلَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>كَمَلَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>ثُقِفَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>ثَقَفَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 32, marginTop: 12} ]}>عُظِمَ</Text>
                    <Text style={[styles.font, {fontSize: 32, marginTop: 12} ]}>عَظَمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>رُحِمَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>رَحَمَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>ظُلِمَ</Text>
                      <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>ظَلَمَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>عُمِلَ</Text>
                      <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>عَمَلَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>حُفِظَ</Text>
                      <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>حَفَظَ</Text>
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
});
