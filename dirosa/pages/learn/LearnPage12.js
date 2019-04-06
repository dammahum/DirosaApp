import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage12 extends Component {
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
                
                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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
                
                <View style={styles.row}>
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

                <View style={styles.row}>
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
                
                <View style={styles.row}>
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

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>
              
              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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
                    <Text style={styles.font}>سَكَّنَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>

              <View style={styles.row}>
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
              
              <View style={styles.row}>
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

              <View style={styles.row}>
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
              
              <View style={styles.row}>
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
