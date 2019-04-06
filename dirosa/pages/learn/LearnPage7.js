import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage7 extends Component {
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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 7</Title>
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
                      <Text style={styles.font}>ضُ</Text>
                      <Text style={styles.font}>ضِ</Text>
                      <Text style={styles.font}>ضَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>صُ</Text>
                      <Text style={styles.font}>صِ</Text>
                      <Text style={styles.font}>صَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>شُ</Text>
                      <Text style={styles.font}>شِ</Text>
                      <Text style={styles.font}>شَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={styles.font}>عُ</Text>
                      <Text style={styles.font}>عِ</Text>
                      <Text style={styles.font}>عَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>ظُ</Text>
                      <Text style={styles.font}>ظِ</Text>
                      <Text style={styles.font}>ظَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>طُ</Text>
                      <Text style={styles.font}>طِ</Text>
                      <Text style={styles.font}>طَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 32} ]}>ضُرَ</Text>
                      <Text style={[styles.font, {fontSize: 32} ]}>ضِرَ</Text>
                      <Text style={[styles.font, {fontSize: 32} ]}>ضَرَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 31, marginTop: 10} ]}>صُدَ</Text>
                      <Text style={[styles.font, {fontSize: 31, marginTop: 10} ]}>صِدَ</Text>
                      <Text style={[styles.font, {fontSize: 31, marginTop: 10} ]}>صَدَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>شُبَ</Text>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>شِبَ</Text>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>شَبَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>عُبَ</Text>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>عِبَ</Text>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>عَبَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>ظُحَ</Text>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>ظِحَ</Text>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>ظَحَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>طُبَ</Text>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>طِبَ</Text>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>طَبَ</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٤</Text>
                </View>
              </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>صُعِبَ</Text>
                      <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>صَعَبَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>شُجِعَ</Text>
                      <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>شَجَعَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>شُرِبَ</Text>
                      <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>شَرَبَ</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٥</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>ضُلِلَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>ضَلَلَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>ضُرِبَ</Text>
                    <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>ضَرَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>صُبِرَ</Text>
                    <Text style={styles.font}>صَبَرَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٦</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>عُطِسَ</Text>
                    <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>عَطَسَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>عُبِدَ</Text>
                    <Text style={styles.font}>عَبَدَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>طُبِعَ</Text>
                    <Text style={styles.font}>طَبَعَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٧</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>عُشِرَ</Text>
                    <Text style={styles.font}>عَشَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>رُجِعَ</Text>
                    <Text style={styles.font}>رَجَعَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>بُشِرَ</Text>
                    <Text style={styles.font}>بَشَرَ</Text>
                  </View>
                </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>خُطِبَ</Text>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>خَطَبَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>غُضِبَ</Text>
                      <Text style={[styles.font, {fontSize: 26, marginTop: 12} ]}>غَضَبَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row3}>
                      <Text style={styles.font}>بُعِدَ</Text>
                      <Text style={styles.font}>بَعَدَ</Text>
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
                    <Text style={styles.font}>قُ</Text>
                    <Text style={styles.font}>قِ</Text>
                    <Text style={styles.font}>قَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>فُ</Text>
                    <Text style={styles.font}>فِ</Text>
                    <Text style={styles.font}>فَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>غُ</Text>
                    <Text style={styles.font}>غِ</Text>
                    <Text style={styles.font}>غَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={styles.font}>مُ</Text>
                    <Text style={styles.font}>مِ</Text>
                    <Text style={styles.font}>مَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>لُ</Text>
                    <Text style={styles.font}>لِ</Text>
                    <Text style={styles.font}>لَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>كُ</Text>
                    <Text style={styles.font}>كِ</Text>
                    <Text style={styles.font}>كَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>

              <View style={styles.row}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>قُفَ</Text>
                    <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>قِفَ</Text>
                    <Text style={[styles.font, {fontSize: 28, marginTop: 12} ]}>قَفَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={styles.font}>فُمَ</Text>
                    <Text style={styles.font}>فِمَ</Text>
                    <Text style={styles.font}>فَمَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>عُمَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>عِمَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>عَمَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>مُبَ</Text>
                    <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>مِبَ</Text>
                    <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>مَبَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>لُفَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>لِفَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>لَفَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 29, marginTop: 12} ]}>كُمَ</Text>
                    <Text style={[styles.font, {fontSize: 29, marginTop: 12} ]}>كِمَ</Text>
                    <Text style={[styles.font, {fontSize: 29, marginTop: 12} ]}>كَمَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>

              <View style={styles.row}>
               <View style={styles.row7}>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>فُرِضَ</Text>
                    <Text style={[styles.font, {fontSize: 30, marginTop: 12} ]}>فَرَضَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>غُفِرَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>غَفَرَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row3}>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>غُلِبَ</Text>
                    <Text style={[styles.font, {fontSize: 34, marginTop: 12} ]}>غَلَبَ</Text>
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
    fontSize: 39,
    color: '#000',
    marginTop: 7,
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
