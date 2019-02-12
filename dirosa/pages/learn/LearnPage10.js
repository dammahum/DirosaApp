import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage10 extends Component {
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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 10</Title>
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
                      <Text style={styles.font}>ثَا‎</Text>
                      <Text style={styles.font}>ثَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>تَا‎</Text>
                      <Text style={styles.font}>تَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَا‎</Text>
                      <Text style={styles.font}>بَ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>دَا‎</Text>
                      <Text style={styles.font}>دَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>حَا‎</Text>
                      <Text style={styles.font}>حَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>جَا‎</Text>
                      <Text style={styles.font}>جَ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>يَا‎</Text>
                      <Text style={styles.font}>يَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>طَا‎</Text>
                      <Text style={styles.font}>طَ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>شَا‎</Text>
                      <Text style={styles.font}>شَ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ثِي‎ْ</Text>
                      <Text style={styles.font}>ثِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>تِي‎ْ</Text>
                      <Text style={styles.font}>تِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِي‎ْ</Text>
                      <Text style={styles.font}>بِ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>دِي‎ْ</Text>
                      <Text style={styles.font}>دِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>حِي‎ْ</Text>
                      <Text style={styles.font}>حِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>جِي‎ْ</Text>
                      <Text style={styles.font}>جِ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>يِي‎ْ</Text>
                      <Text style={styles.font}>يِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>طِي‎ْ</Text>
                      <Text style={styles.font}>طِ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>شِي‎ْ</Text>
                      <Text style={styles.font}>شِ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>ثُوْ</Text>
                      <Text style={styles.font}>ثُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>تُوْ</Text>
                      <Text style={styles.font}>تُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بُوْ</Text>
                      <Text style={styles.font}>بُ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>دُوْ</Text>
                      <Text style={styles.font}>دُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>حُوْ</Text>
                      <Text style={styles.font}>حُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>جُوْ</Text>
                      <Text style={styles.font}>جُ</Text>
                    </View>
                    </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>يُوْ</Text>
                      <Text style={styles.font}>يُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>طُوْ</Text>
                      <Text style={styles.font}>طُ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>شُوْ</Text>
                      <Text style={styles.font}>شُ</Text>
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
                    <Text style={styles.font}>جُوْدَ</Text>
                    <Text style={styles.font}>جِيدَ‎ْ</Text>
                    <Text style={styles.font}>جَا‎دَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>تُوْبَ</Text>
                    <Text style={styles.font}>تِيبَ‎ْ </Text>
                    <Text style={styles.font}>تَابَ‎</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>هُوبَ</Text>
                    <Text style={styles.font}>هِي‎بَ</Text>
                    <Text style={styles.font}>هَا‎بَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>دُوْرَ</Text>
                    <Text style={styles.font}>دِي‎رَ</Text>
                    <Text style={styles.font}>دَا‎رَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>

              <View style={styles.row}>
               <View style={styles.row7}>
                 <View style={styles.row4}>
                    <Text style={styles.font}>زُوْرَ</Text>
                    <Text style={styles.font}>زِي‎ْرَ</Text>
                    <Text style={styles.font}>زَا‎رَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>وُوْلَ</Text>
                    <Text style={styles.font}>وِي‎ْ لَ</Text>
                    <Text style={styles.font}>وَا‎لَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>طُوْلَ</Text>
                    <Text style={styles.font}>طِي‎ْلَ</Text>
                    <Text style={styles.font}>طَا‎لَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>حُوْلَ</Text>
                    <Text style={styles.font}>حِي‎ْلَ</Text>
                    <Text style={styles.font}>حَا‎لَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>

              <View style={styles.row}>
               <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>كُوْنَ</Text>
                    <Text style={styles.font}>كِي‎ْنَ</Text>
                    <Text style={styles.font}>كَا‎نَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>يُوْنَ</Text>
                    <Text style={styles.font}>يِي‎ْنَ</Text>
                    <Text style={styles.font}>يَا‎نَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>مُوْلَ</Text>
                    <Text style={styles.font}>مِي‎ْلَ</Text>
                    <Text style={styles.font}>مَا‎لَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>لُوْمَ</Text>
                    <Text style={styles.font}>لِي‎ْمَ</Text>
                    <Text style={styles.font}>لَا‎مَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>سُوْرَ</Text>
                    <Text style={styles.font}>سِي‎ْرَ</Text>
                    <Text style={styles.font}>سَا‎رَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>نُوْمَ</Text>
                    <Text style={styles.font}>نِي‎ْمَ</Text>
                    <Text style={styles.font}>نَا‎مَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.row7}>
                  <View style={styles.row4}>
                    <Text style={styles.font}>صُوْنَ</Text>
                    <Text style={styles.font}>صِي‎ْنَ</Text>
                    <Text style={styles.font}>صَا‎نَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>عُوْدَ</Text>
                    <Text style={styles.font}>عِي‎ْدَ</Text>
                    <Text style={styles.font}>عَا‎دَ</Text>
                  </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                <View style={styles.row7}>
                 <View style={styles.row4}>
                   <Text style={styles.font}>غُوْرَ</Text>
                   <Text style={styles.font}>غِي‎ْرَ</Text>
                   <Text style={styles.font}>غَا‎رَ</Text>
                  </View>
                  <View style={styles.separator}></View>
                  <View style={styles.row4}>
                    <Text style={styles.font}>قُوْدَ</Text>
                    <Text style={styles.font}>قِي‎ْدَ</Text>
                    <Text style={styles.font}>قَا‎دَ</Text>
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
