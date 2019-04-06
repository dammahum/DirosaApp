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
              <Title style={styles.titleHeader}>TANDA WAQOF</Title>
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
                    <Text style={[styles.font, {fontSize: 14}]}>Harus Berhenti</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>بَعْضُهُمْ اَوْلِيَاۤءُ بَعْضٍۘ يَأْمُرُوْنَ</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>م</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Mutlak Berhenti</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>مِن دُونِ ٱللَّهِؕ كَفَرْنَا بِكُم</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>ط</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Boleh berhenti</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>ظُلُمٰتٌ وَّرَعْدٌ وَّبَرْقٌۚ يَجْعَلُوْنَ</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>ج</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Sebaiknya{'\n'}Tidak Berhenti</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>وَّالسَّمَاۤءَ بِنَاۤءً ۖ وَّاَنْزَلَ</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>ﷹ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Sebaiknya Berhenti</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>فَمَا فَوْقَهَا ۗ فَاَمَّا الَّذِيْنَ</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>ﷱ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Berhenti di{'\n'}salah satu tempat</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى</Text>
                    <View style={styles.separator}></View>
                    <Text style={[styles.font, {fontSize: 100, marginTop: 40}]}> ۛ </Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Tidak Boleh{'\n'}Berhenti</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>فِيْ قُلُوْبِهِمْ مَّرَضٌۙ فَزَادَهُمُ اللّٰهُ</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>لا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Diberi{'\n'}Kelonggaran{'\n'}Berhenti</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>مِنۢ بَعْدِ مِيثَـٰقِهِۦ وَيَقْطَعُونَ</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>ص</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Berhenti{'\n'}(Sebagian{'\n'}Ulama)</Text>
                    <View style={styles.separator}></View>
                    <Text style={{ fontSize:14, fontFamily: 'arab-regular', marginBottom: 5, color: '#000' }}>ﻕ</Text>
                    <Text style={styles.font}>مَا فِى ٱلْأَرْضِ جَمِيعًا</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>قَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 14}]}>Berhenti Sejenak{'\n'}Tanpa Bernafas</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>كَلَّابَلْ ۜ رَانَ عَلَ</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.font}>ﺳﮑﺘﻪ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
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
    fontSize: 28,
    color: '#000',
    fontFamily: 'arab-regular',
    alignSelf: 'center',
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
