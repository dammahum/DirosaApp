import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage11 extends Component {
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
                
                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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

                <View style={styles.row}>
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
                
                <View style={styles.row}>
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

                <View style={styles.row}>
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
                
                <View style={styles.row}>
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

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>
              
              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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

              <View style={styles.row}>
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
              
              <View style={styles.row}>
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

              <View style={styles.row}>
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
              
              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 }]}>حٰفِظَا‎تِ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={[styles.font, { fontSize: 30 }]}>رَضِيَ لُهٗ</Text>
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

                </View>
              </View>

              <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.column}>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ثَا‎بِتٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>تَا‎بِعٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بَا‎سِطٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ءَا‎مِنٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>دَا‎خِلٌ</Text> 
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>خَا‎لِدٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>حَا‎مِدٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>جَا‎مِعٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٢</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>سَا‎مِعٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>زَا‎جِرٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>رَا‎هِبٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ذَا‎بِحٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٣</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>طَا‎لِبٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ضَا‎رِبٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>صَا‎دِقٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>شَا‎كِرٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٤</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>فَا‎عِلٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>غَا‎فِرٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>عَا‎قِدٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ظَا‎لِمٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٥</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>مَا‎ضِيٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>لَا‎زِمٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>كَا‎هِلٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>قَا‎عِدٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٦</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>يَا‎بِسٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>هَا‎لِكٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>وَا‎سِعٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>نَا‎ظِرٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٧</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>شَفِيعٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>سَمِيعٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بَشِي‎ْرٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>أَسِي‎ْرٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٨</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>جَلِيلٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>قَلِيلٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بَدِيعٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>جَمِيعٌ</Text>
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
                        <Text style={styles.font}>تَا‎بِعِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بَا‎سِطِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ءَا‎مِنِينَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>حَا‎فِظِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>جَا‎حِلِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ثَا‎بِتِينَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٢</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ذَا‎هِبِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>دَا‎خِلِينَ</Text> 
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>خَا‎لِصِينَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٣</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>سَا‎بِعِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>زَا‎هِدِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>رَا‎شِدِينَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٤</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ضَا‎رِبِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>صَا‎بِرِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>شَا‎فِعِينَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٥</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>عَا‎مِلِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>ظَا‎لِمِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>طَا‎لِبِينَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٦</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                     <View style={styles.row4}>
                        <Text style={styles.font}>يَتَغَا‎مَزُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={[styles.font, { fontSize: 32 } ]}>يَتَقَا‎سَمُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>يَتَلَا‎وَمُونَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٧</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={[styles.font, { fontSize: 32 } ]}>يَتَطَا‎عَمُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>يَتَرَا‎حَمُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={[styles.font, { fontSize: 32 } ]}>يَتَخَا‎مَدُونَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٨</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                     <View style={styles.row4}>
                        <Text style={[styles.font, { fontSize: 32 } ]}>يَتَشَا‎كَرُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={[styles.font, { fontSize: 32 } ]}>يَتَحَا‎مَدُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={[styles.font, { fontSize: 30 } ]}>يَتَصَا‎لَحُونَ</Text>
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
                        <Text style={styles.font}>مَآ‎ءً</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>صَآ‎ءِمٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بَآ‎ءِسٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                      <Text style={styles.font2}>١</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>طَآ‎ءِعِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>نَآ‎ءِمُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>طَآ‎ءِفَة‎ٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٢</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>دِمَآ‎ءَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>أَضَآ‎ءَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>وَرَآ‎ءَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٣</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>يَشَآ‎ءُ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بُكَآ‎ءٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>حِدَآ‎ءٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٤</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>غُثَآ‎ءً</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>لِقَآ‎ءً</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بِنَآ‎ءً</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٥</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>مَرِيءًا‎</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>هَنِيءًا‎</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>سَمَآ‎ءٌ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٦</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                     <View style={styles.row4}>
                        <Text style={styles.font}>إِذَا‎جَآ‎ءَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>مَلَائِكَةٌ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>أُولَئِكَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٧</Text>
                    </View>
                  </View>

                  <View style={styles.row}>
                    <View style={styles.row7}>
                      <View style={styles.row4}>
                        <Text style={styles.font}>بِغَآ‎ءِبِينَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>سَرَآ‎ءِرَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>حَدَآ‎ىِٕقَ</Text>
                      </View>
                    </View>
                    <View style={styles.row1}>
                        <Text style={styles.font2}>٨</Text>
                    </View>
                  </View>
                  
                  <View style={styles.row}>
                    <View style={styles.row7}>
                     <View style={styles.row4}>
                        <Text style={styles.font}>يَتَسَآ‎ءَلُونَ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>سُفَهَآ‎ءُ</Text>
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.row4}>
                        <Text style={styles.font}>شُهَدَآ‎ءَ</Text>
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
    fontSize: 34,
    color: '#000',
    marginTop: 12,
  },
  font2: {
    fontSize: 26,
    color: '#000',
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
