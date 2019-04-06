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
              <Title style={styles.titleHeader}>MUNAQOSYAH</Title>
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
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>يٰسۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>حٰمۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>طٰهٰ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>صۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>قۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>نۤ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>طٰسۤمّۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>طٰسۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>طٰهٰ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤمّۤرٰ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤمّۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤرٰ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>كۤهٰيٰعۤصۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>عۤسۤقۤ</Text>
                    <Text style={[styles.font, { fontFamily: 'lato-regular' }]}>الۤمّۤصۤ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, { fontSize: 31 } ]}>وَلَقَدْ اٰتَيْنَا لُقْمٰنَ الْحِكْمَةَ اَنِ اشْكُرْ لِلّٰهِ ۗ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, { fontSize: 29 } ]}>وَمَنْ يَّشْكُرْ فَاِنَّمَا يَشْكُرُ لِنَفْسِهٖۚ وَمَنْ كَفَرَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, { fontSize: 29 } ]}>فَاِنَّ اللّٰهَ غَنِيٌّ حَمِيْدٌ ⚬ وَاِذْ قَالَ لُقْمٰنُ لِابْنِهٖ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, { fontSize: 29 } ]}>وَهُوَ يَعِظُهٗ يٰبُنَيَّ لَا تُشْرِكْ بِاللّٰهِ ۗاِنَّ الشِّرْكَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>

                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={[styles.font, { fontSize: 29 } ]}>لَظُلْمٌ عَظِيْمٌ ⚬ وَصَّيْنَا الْاِنْسَانَ بِوَالِدَيْهِۚ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, { fontSize: 29 } ]}>حَمَلَتْهُ اُمُّهٗ وَهْنًا عَلٰى وَهْنٍ وَّفِصَالُهٗ فِيْ عَامَيْنِ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>⚬اَنِ اشْكُرْ لِيْ وَلِوَالِدَيْكَۗ اِلَيَّ الْمَصِيْرُ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.column}>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>الۤمّۤ ⚬ذٰلِكَ الْكِتٰبُ لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَ </Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ ⚬ اِعْلَمُوْٓا اَنَّ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>اللّٰهَ يُحْيِ الْاَرْضَ بَعْدَ مَوْتِهَاۗ تَتْلُوْاعَلَيْهَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِلْحَقِّ وَاِنَّكَ لَمِنَ الْمُرْسَلِيْنَ ⚬ وَمِمَّنْ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>حَوْلَكُمْ مِّنَ الْاَعْرَابِ مُنٰفِقُوْنَ وَمِنْ اَهْلِ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>الْمَدِيْنَةِ مَرَدُوْا عَلَى النِّفَاقِ لَا تَعْلَمُهُمْ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={styles.font}>فِيْ قُلُوْبِهِمْ مَّرَضٌ فَزَادَهُمُ اللّٰهُ مَرَضًا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>⚬ وَلَهُمْ عَذَابٌ اَلِيْمٌ بِمَا كَانُوْا يَكْذِبُوْنَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.column}>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>اِنِّيْ جَزَيْتُهُمُ الْيَوْمَ بِمَا صَبَرُوْٓااَنَّهُمْ هُمُ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>الْفَاۤىِٕزُوْنَ ⚬ قٰلَ كَمْ لَبِثْتُمْ فِى الْاَرْضِ عَدَدَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>قَالُوْا لَبِثْنَا يَوْمًا اَوْ بَعْضَ يَوْمٍ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>فَسْـَٔلِ الْعَاۤدِّيْنَ ⚬ قٰلَ اِنْ لَّبِثْتُمْ اِلَّا قَلِيْلًا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>لَّوْ اَنَّكُمْ كُنْتُمْ تَعْلَمُوْنَ ⚬ اَفَحَسِبْتُمْ اَنَّمَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>خَلَقْنٰكُمْ عَبَثًا وَّاَنَّكُمْ اِلَيْنَا لَا تُرْجَعُوْنَ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>فَتَعٰلَى اللّٰهُ الْمَلِكُ الْحَقُّۚ لَآ اِلٰهَ اِلَّا هُوَۚ رَبُّ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>الْعَرْشِ الْكَرِيْمِ ⚬ وَمَنْ يَّدْعُ مَعَ اللّٰهِ اِلٰهًا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={styles.font}>خَرَ لَا بُرْهَانَ لَهٗ بِهٖۙ فَاِنَّمَا حِسَابُهٗ عِنْدَ رَبِّهۗ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>اِنَّهٗ لَا يُفْلِحُ الْكٰفِرُوْنَ ⚬ قُلْ رَّبِّ اغْفِرْ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.column}>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَارْحَمْ وَاَنْتَ خَيْرُ الرّٰحِمِيْنَ ⚬ اٰمَنَ الرَّسُوْلُ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَۗ كُلٌّ اٰمَنَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖۗ لَا نُفَرِّقُ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ ۗ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ ⚬ لَا يُكَلِّفُ اللّٰهُ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>نَفْسًا اِلَّا وُسْعَهَا ۗ لَهَا مَا كَسَبَتْ وَعَلَيْهَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ اِنْ نَّسِيْنَآ اَوْ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={styles.font}>اَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ اِصْرًا كَمَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>مَا لَا طَاقَةَ لَنَا بِهٖۚ وَاعْفُ عَنَّاۗ وَاغْفِرْ لَنَاۗ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 25} ]}>وَارْحَمْنَا ۗ اَنْتَ مَوْلٰىنَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكٰفِرِيْنَ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١١</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.column}>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُوْنُوْا قَوَّامِيْنَ لِلّٰهِ شُهَدَاۤءَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِالْقِسْطِۖوَتَعَاوَنُوْا عَلَى الْبِرِّ وَالتَّقْوٰى وَلَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>تَعَاوَنُوْا عَلَى الْاِثْمِ وَالْعُدْوَانِ ۖوَاتَّقُوا اللّٰهَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>اِنَّ اللّٰهَ شَدِيْدُ الْعِقَابِ ⚬ وَالصّٰۤفّٰتِ صَفًّاۙ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>فَالزّٰجِرٰتِ زَجْرًاۙ ⚬ فَالتّٰلِيٰتِ ذِكْرًاۙ ⚬ اِنَّ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>اِلٰهَكُمْ لَوَاحِدٌۗ ⚬ رَبُّ السَّمٰوٰتِ وَالْاَرْضِ وَمَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>يْنَهُمَا وَرَبُّ الْمَشَارِقِۗ ⚬ اِنَّا زَيَّنَّا السَّمَاۤءَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={styles.font}>الدُّنْيَا بِزِيْنَةِ ِۨالْكَوَاكِبِۙ ⚬ وَحِفْظًا مِّنْ كُلِّ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>شَيْطٰنٍ مَّارِدٍۚ ⚬ لَا يَسَّمَّعُوْنَ اِلَى الْمَلَاِ الْاَعْلٰى</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 26} ]}>وَيُقْذَفُوْنَ مِنْ كُلِّ جَانِبٍۖ ⚬ دُحُوْرًا وَّلَهُمْ عَذَابٌ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={[styles.font, {fontSize: 24} ]}>وَّاصِبٌ⚬اِلَّا مَنْ خَطِفَ الْخَطْفَةَ فَاَتْبَعَهٗ شِهَابٌ ثَاقِبٌ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١١</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.column}>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>سَبِّحِ اسْمَ رَبِّكَ الْاَعْلَىۙ⚬الَّذِيْ خَلَقَ فَسَوّٰىۖ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَالَّذِيْ قَدَّرَ فَهَدٰىۖ ⚬ وَالَّذِيْٓ اَخْرَجَ الْمَرْعٰىۖ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>فَجَعَلَهٗ غُثَاۤءً اَحْوٰىۖ ⚬ سَنُقْرِئُكَ فَلَا تَنْسٰىٓ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>لَّا مَا شَاۤءَ اللّٰهُ ۗاِنَّهٗ يَعْلَمُ الْجَهْرَ وَمَا يَخْفٰىۗ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَنُيَسِّرُكَ لِلْيُسْرٰىۖ⚬فَذَكِّرْ اِنْ نَّفَعَتِ الذِّكْرٰىۗ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>سَيَذَّكَّرُ مَنْ يَّخْشٰىۙ ⚬ وَيَتَجَنَّبُهَا الْاَشْقَىۙ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={styles.font}>الَّذِيْ يَصْلَى النَّارَ الْكُبْرٰىۚ ⚬ ثُمَّ لَا يَمُوْتُ فِيْهَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَلَا يَحْيٰىۗ ⚬ قَدْ اَفْلَحَ مَنْ تَزَكّٰىۙ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>عَمَّ يَتَسَاۤءَلُوْنَۚ ⚬ عَنِ النَّبَاِ الْعَظِيْمِۙ ⚬ الَّذِيْ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١١</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.column}>
                
                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}> هُمْ فِيْهِ مُخْتَلِفُوْنَۗ ⚬ كَلَّا سَيَعْلَمُوْنَۙ ⚬ ثُمَّ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>كَلَّا سَيَعْلَمُوْنَ ⚬ اَلَمْ نَجْعَلِ الْاَرْضَ مِهٰدًاۙ ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَالْجِبَالَ أَوْتَادًا ⚬ وَخَلَقْنَاكُمْ أَزْوَاجًا ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا ⚬ وَجَعَلْنَا اللَّيْلَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>لِبَاسًا ⚬ وَجَعَلْنَا النَّهَارَ مَعَاشًا ⚬ وَبَنَيْنَا</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>فَوْقَكُمْ سَبْعًا شِدَادًا ⚬ وَجَعَلْنَا سِرَاجًا وَهَّاجًا ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَأَنْزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا ⚬ لِنُخْرِجَ بِهِ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                  </View>
                </View>
                
                <View style={styles.row}>
                 <View style={styles.row7}>
                    <Text style={styles.font}>حَبًّا وَنَبَاتًا ⚬ وَجَنَّاتٍ أَلْفَافًا ⚬ إِنَّ يَوْمَ الْفَصْلِ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>كَانَ مِيقَاتًا ⚬ يَوْمَ يُنْفَخُ فِي الصُّورِ فَتَأْتُونَ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>٩</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>أَفْوَاجًا ⚬ وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا ⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١١</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>
              
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ⚬</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>سَبِّحِ اسْمَ رَبِّكَ الْاَعْلَى⚬الَّذِيْ خَلَقَ فَسَوّٰى⚬</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>وَالَّذِيْ قَدَّرَ فَهَدٰى⚬وَالَّذِيْٓ اَخْرَجَ الْمَرْعٰى⚬</Text>
                    </View>      
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>فَجَعَلَهٗ غُثَاۤءً اَحْوٰى⚬سَنُقْرِئُكَ فَلَا تَنْسٰىٓ⚬</Text>
                    </View>   
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>اِلَّا مَا شَاۤءَ اللّٰهُ اِنَّهٗ يَعْلَمُ الْجَهْرَ وَمَا يَخْفٰى⚬</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>وَنُيَسِّرُكَ لِلْيُسْرٰى⚬فَذَكِّرْ اِنْ نَّفَعَتِ الذِّكْرٰى⚬</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>سَيَذَّكَّرُ مَنْ يَّخْشٰى⚬وَيَتَجَنَّبُهَا الْاَشْقَى⚬</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>الَّذِيْ يَصْلَى النَّارَ الْكُبْرٰى⚬ثُمَّ لَا يَمُوْتُ فِيْهَا</Text>
                    </View>        
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>وَلَا يَحْيٰى⚬قَدْ اَفْلَحَ مَنْ تَزَكّٰى⚬</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٩</Text>
                  </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>عَمَّ يَتَسَاۤءَلُوْنَ⚬عَنِ النَّبَاِ الْعَظِيْمِ⚬الَّذِيْ</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١١</Text>
                  </View>
                </View>

             </View>
            </View>

            <View style={{ flex: 1, width: screenWidth }}>
            <View style={styles.column}>
              
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>هُمْ فِيْهِ مُخْتَلِفُوْنَ⚬كَلَّا سَيَعْلَمُوْنَ⚬ثُمَّ</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                  <Text style={styles.font2}>١</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>كَلَّا سَيَعْلَمُوْنَ⚬اَلَمْ نَجْعَلِ الْاَرْضَ مِهٰدًا⚬</Text>
                    </View>
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٢</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>وَّالْجِبَالَ اَوْتَادًا⚬وَخَلَقْنٰكُمْ اَزْوَاجًا⚬</Text>
                    </View>      
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٣</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا⚬وَجَعَلْنَا اللَّيْلَ</Text>
                    </View>   
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٤</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>لِبَاسًا⚬وَجَعَلْنَا النَّهَارَ مَعَاشًا⚬وَبَنَيْنَا</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٥</Text>
                </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>فَوْقَكُمْ سَبْعًا شِدَادًا⚬وَجَعَلْنَا سِرَاجًا وَهَّاجًا⚬</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٦</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>وَأَنْزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا⚬لِنُخْرِجَ بِهِ</Text>
                    </View>
                  </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٧</Text>
                </View>
              </View>
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>حَبًّا وَّنَبَاتًا⚬وَجَنَّاتٍ أَلْفَافًا⚬إِنَّ يَوْمَ الْفَصْلِ</Text>
                    </View>        
                </View>
                <View style={styles.row1}>
                    <Text style={styles.font2}>٨</Text>
                </View>
              </View>
              
              <View style={styles.row}>
                  <View style={styles.row7}>
                    <View style={styles.row2}>
                      <Text style={styles.font}>كَانَ مِيقَاتًا⚬يَوْمَ يُنْفَخُ فِي الصُّورِ فَتَأْتُونَ</Text>
                    </View>
                  </View>
                  <View style={styles.row1}>
                      <Text style={styles.font2}>٩</Text>
                  </View>
              </View>

              <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>أَفْوَاجًا⚬وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١٠</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.row7}>
                    <Text style={styles.font}>وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا⚬</Text>
                  </View>
                  <View style={styles.row1}>
                    <Text style={styles.font2}>١١</Text>
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
    fontSize: 28,
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
