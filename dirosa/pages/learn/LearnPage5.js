import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage5 extends Component {
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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 5</Title>
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
                    <Text style={styles.font}>خَ</Text>
                    <Text style={styles.font}>حَ</Text>
                    <Text style={styles.font}>جَ</Text>
                    <Text style={styles.font}>ثَ</Text>
                    <Text style={styles.font}>تَ</Text>
                    <Text style={styles.font}>بَ</Text>
                    <Text style={styles.font}>أَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>ضَ</Text>
                    <Text style={styles.font}>صَ</Text>
                    <Text style={styles.font}>شَ</Text>
                    <Text style={styles.font}>سَ</Text>
                    <Text style={styles.font}>زَ</Text>
                    <Text style={styles.font}>رَ</Text>
                    <Text style={styles.font}>ذَ</Text>
                    <Text style={styles.font}>دَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>كَ</Text>
                    <Text style={styles.font}>قَ</Text>
                    <Text style={styles.font}>فَ</Text>
                    <Text style={styles.font}>غَ</Text>
                    <Text style={styles.font}>عَ</Text>
                    <Text style={styles.font}>ظَ</Text>
                    <Text style={styles.font}>طَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                <View style={styles.row7}>
                  <Text style={styles.font}>يَ</Text>
                  <Text style={styles.font}>ءَ</Text>
                  <Text style={styles.font}>هَ</Text>
                  <Text style={styles.font}>وَ</Text>
                  <Text style={styles.font}>نَ</Text>
                  <Text style={styles.font}>مَ</Text>
                  <Text style={styles.font}>لَ</Text>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٤</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <Text style={styles.font}>لَ</Text>
                  <Text style={styles.font}>مَ</Text>
                  <Text style={styles.font}>نَ</Text>
                  <Text style={styles.font}>وَ</Text>
                  <Text style={styles.font}>هَ</Text>
                  <Text style={styles.font}>ءَ</Text>
                  <Text style={styles.font}>يَ</Text>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٥</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <Text style={styles.font}>طَ</Text>
                  <Text style={styles.font}>ظَ</Text>
                  <Text style={styles.font}>عَ</Text>
                  <Text style={styles.font}>غَ</Text>
                  <Text style={styles.font}>فَ</Text>
                  <Text style={styles.font}>قَ</Text>
                  <Text style={styles.font}>كَ</Text>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٦</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <Text style={styles.font}>دَ</Text>
                  <Text style={styles.font}>ذَ</Text>
                  <Text style={styles.font}>رَ</Text>
                  <Text style={styles.font}>زَ</Text>
                  <Text style={styles.font}>سَ</Text>
                  <Text style={styles.font}>شَ</Text>
                  <Text style={styles.font}>صَ</Text>
                  <Text style={styles.font}>ضَ</Text>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>٧</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>أَ</Text>
                    <Text style={styles.font}>بَ</Text>
                    <Text style={styles.font}>تَ</Text>
                    <Text style={styles.font}>ثَ</Text>
                    <Text style={styles.font}>جَ</Text>
                    <Text style={styles.font}>حَ</Text>
                    <Text style={styles.font}>خَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>١٠</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٩</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٨</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٧</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٦</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٥</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٤</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٣</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,٢</Text>
                    <Text style={{ fontSize: 32, color: '#000', marginTop: 7 }}>,١</Text>
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
                      <View style={styles.row4}>
                        <Text style={styles.font}>خ</Text>
                        <Text style={styles.font}>ح</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ج</Text>
                        <Text style={styles.font}>ث</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ت</Text>
                        <Text style={styles.font}>ب</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>أ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ض</Text> 
                        <Text style={styles.font}>ص</Text> 
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ش</Text>
                        <Text style={styles.font}>س</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ز</Text>
                        <Text style={styles.font}>ر</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ذ</Text>
                        <Text style={styles.font}>د</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٢</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ك</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ق</Text>
                        <Text style={styles.font}>ف</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>غ</Text>
                        <Text style={styles.font}>ع</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ظ</Text>
                        <Text style={styles.font}>ط</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٣</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ي</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ء</Text>
                        <Text style={styles.font}>ه</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>و</Text>
                        <Text style={styles.font}>ن</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>م</Text>
                        <Text style={styles.font}>ل</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٤</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٤</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٣</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٢</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٥</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٨</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٧</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٦</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٥</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٦</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٢</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١١</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٠</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٩</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٧</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٦</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٥</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٤</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٣</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٨</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>٢٠</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٩</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٨</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>١٧</Text>
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
