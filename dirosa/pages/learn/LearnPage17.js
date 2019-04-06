import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class LearnPage17 extends Component {
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
              <Title style={styles.titleHeader}>PERTEMUAN KE - 17</Title>
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
                      <Text style={[styles.font, {fontSize: 14, textAlign: 'center'}]}>Tata cara mewaqofkan {'\n'} (berhenti)</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>أَبْتَرُ ⚬ أَبْتَرْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَتَبَّ ⚬ وَتَبّْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>كَسَبَ ⚬ كَسَبْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>خَوْفٍ ⚬ خَوْفْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>جَيْرٍ ⚬ جَيْرْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>حَسَنَةً ⚬ حَسَنَةْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>أَلِيْمٌ ⚬ أَلِيْمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>عَلِيْمًا ⚬ عَلِيْمَا</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>مُسْلِمُوْنَ ⚬ مُسْلِمُوْنْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِحُسْبَانٍ ⚬ بِحُسْبَانْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>صَادِقِيْنَ ⚬ صَادِقِيْنْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 23 }]}>وَاسْتَغْفِرْهُ ⚬ وَاسْتَغْفِرْهْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>عِلْمٌ ⚬ عِلْمْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, { fontSize: 23 }]}>مِنَ الْمَسِّ⚬مِنَ الْمَسْسْ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>لَهُنَّ ⚬ لَهُنْنْ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بِالتَّقْوٰى ⚬ بِالتَّقْوٰى</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>اَلسَّبِيْلَاْ ⚬ اَلسَّبِيْلَا</Text>
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
                      <Text style={[styles.font, {fontSize: 24} ]}>وَالْتَفَّتِ السَّاقُ بِالسَّاقِ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَظَنَّ أَنَّهُ الْفِرَاقُ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَإِذَا قَرَأْنَاهُ فَاتَّبِعْ قُرْآنَهُ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَتَذَرُونَ الْآخِرَةَ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24} ]}>كَلَّا بَلْ تُحِبُّونَ الْعَاجِلَةَ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24} ]}>فَلَا أُقْسِمُ بِمَا تُبْصِرُونَ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>لَّا يَأْكُلُهُ إِلَّا الْخَاطِئُونَ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>كَلَّا إِنَّهُ تَذْكِرَةٌ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 22} ]}>كَلَّا ۖ بَل لَّا يَخَافُونَ الْآخِرَةَ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 22} ]}>وَلَا أُقْسِمُ بِالنَّفْسِ اللَّوَّامَةِ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَإِذَا بَرِقَ الْبَصَرُ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24} ]}>يَسْأَلُ أَيَّانَ يَوْمُ الْقِيَامَةِ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَالْمُورِيَاتِ قَدْحًا⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَالْعَادِيَاتِ ضَبْحًا⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَأَثَرْنَ بِهِ نَقْعًا⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فَالْمُغِيرَاتِ صُبْحًا⚬</Text>
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
                  <View style={[styles.row7, {backgroundColor: '#000'}]}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 14, color: '#fff', textAlign: 'center'}]}>Suara nun sukun atau tanwin melebur ke huruf di depannya ( ي ن م و ) dibaca dengan berdengung, ditahan 2 harokat.</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={[styles.row7, {backgroundColor: '#000'}]}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {color: '#fff'}]}>مِن مَّاءٍ⚬</Text>
                      <Text style={[styles.font, {color: '#fff'}]}>عَذَابًا نُّكْرًا⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {color: '#fff'}]}>مَنْ یَّشَآءَ⚬</Text>
                      <Text style={[styles.font, {color: '#fff'}]}>مِن وَرَآءِ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={[styles.row7, {backgroundColor: '#000'}]}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 15, color: '#fff', textAlign: 'center'}]}>Suara nun atau tanwin melebur ke huruf di depannya ( ر ل ) dibaca tanpa dengung.</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={[styles.row7, {backgroundColor: '#000'}]}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {color: '#fff'}]}>فَمَنْ لَّمْ⚬</Text>
                      <Text style={[styles.font, {color: '#fff'}]}>مِنْ رَّبِّكُمْ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {color: '#fff'}]}>مِنْ رَّبِّكُمْ⚬</Text>
                      <Text style={[styles.font, {color: '#fff'}]}>خَيْرٌ لَّكَ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>قَوْمُ نُوْحٍ وَعَادٍ وَثَمُوْدَ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>كَأَنَّهُنَّ بَيْضٌ مَّكْنُونٌ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>الَّذِيْ جَمَعَ مَالًا وَّعَدَّدَهٗ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>وُجُوْهٌ يَّوْمَىِٕذٍ نَّاعِمَةٌ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>تَبَّتْ يَدَآ اَبِيْ لَهَبٍ وَّتَبَّ⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>اَيَحْسَبُ اَنْ لَّمْ يَرَهٗٓ اَحَدٌ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={[styles.font, {fontSize: 24}]}>يَقُوْلُ اَهْلَكْتُ مَالًا لُّبَدًا⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row4}>
                      <Text style={styles.font}>فِيْ لَوْحٍ مَّحْفُوْظٍ⚬</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.row4}>
                      <Text style={styles.font}>بَلْ هُوَ قُرْاٰنٌ مَّجِيْدٌ⚬</Text>
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
    fontSize: 26,
    color: '#000',
    marginTop: 12,
    fontFamily: 'arab-regular',
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