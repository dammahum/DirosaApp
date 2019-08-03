import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Container, Header, Left, Body, Icon, Button, Title, Accordion, Content } from 'native-base';

const dataArray = [
  {
    title: "TANDA MIM ( مـ )",
    content: "Disebut juga dengan wakaf Lazim. yaitu berhenti di akhir kalimat sempurna. Contohnya",
    example: "فَمَنْ شَاۤءَ ذَكَرَهٗ ۘ",
  },
  {
    title: "TANDA THO ( ﻁ )",
    content: "Adalah tanda wakaf Mutlaq dan Haruslah berhenti. Contohnya",
    example: "مِن دُونِ ٱللَّهِؕ كَفَرْنَا بِكُم",
  },
  {
    title: "TANDA JIM ( ﺝ )",
    content: "Adalah wakaf Jaiz. Boleh berhenti dan Boleh untuk dilanjutkan. Contohnya",
    example: "وَاغْفِرْ لَنَا رَبَّنَا ۚ  اِنَّكَ اَنْتَ",
  },
  {
    title: "TANDA SAD-LAM-YA' ( ﺻﻠﮯ )",
    content: "Merupakan singkatan dari 'Al-wasl Awlaa' yang bermakna 'wasal atau meneruskan bacaan adalah lebih baik', maka dari itu meneruskan bacaan tanpa mewakafkannya adalah lebih baik; Contohnya",
    example: " بِالْهُدٰىۖ فَمَا رَبِحَتْ تِّجَارَتُهُمْ ",
  },
  {
    title: "TANDA QIF ( ﻗﻴﻒ )",
    content: "Bermaksud berhenti! yakni lebih diutamakan untuk berhenti. Tanda tersebut biasanya muncul pada kalimat yang biasanya pembaca akan meneruskannya tanpa berhenti; Contohnya",
    example: "حَذَرَ الْمَوْتِۗ وَاللّٰهُ مُحِيْطٌۢ بِالْكٰفِرِيْنَ",
  },
  {
    title: "TANDA BERTITIK TIGA (؞)",
    content: "Yang disebut sebagai wakaf Muraqabah atau wakaf Ta'anuq (Terikat). wakaf ini akan muncul sebanyak dua kali di mana-mana saja dan cara membacanya adalah harus berhenti di salah satu tanda tersebut. Jika sudah berhenti pada tanda pertama, tidak perlu berhenti pada tanda kedua dan sebaliknya.. Contohnya",
    example: "لَا رَيْبَ ۛ فِيْهِ ۛ هُدًى لِّلْمُتَّقِيْنَۙ",
  },
  {
    title: "TANDA LAA ( ﻻ )",
    content: "Bermaksud 'Jangan berhenti!'. Tanda ini muncul kadang-kala pada penghujung mahupun pertengahan ayat. Jika ia muncul di pertengahan ayat, maka tidak dibenarkan untuk berhenti dan jika berada di penghujung ayat, pembaca tersebut boleh berhenti atau tidak; Contohnya",
    example: "اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ ۙ وَاُولٰۤىِٕكَ",
  },
  {
    title: "TANDA SAD ( ﺹ )",
    content: "Disebut juga dengan wakaf Murakhkhas, menunjukkan bahwa lebih baik untuk tidak berhenti namun diperbolehkan berhenti saat darurat tanpa mengubah makna. Perbedaan antara hukum tanda zha dan sad adalah pada fungsinya, dalam kata lain lebih diperbolehkan berhenti pada wakaf sad; Contohnya",
    example: "مِنۢ بَعْدِ مِيثَـٰقِهِۦ وَيَقْطَعُونَ مَآ أَمَرَ ٱللَّهُ",
  },
  {
    title: "TANDA QAF ( ﻕ )",
    content: "merupakan singkatan dari 'Qeela alayhil waqf' yang bermakna 'telah dinyatakan boleh berhenti pada wakaf sebelumnya', maka dari itu lebih baik meneruskan bacaan walaupun boleh diwakafkan; Contohnya",
    example: "مَّا فِى ٱلْأَرْضِ جَمِيعًۭا ثُمَّ ٱسْتَوَىٰٓ",
  },
  {
    title: "TANDA SIN ( س ) atau tanda Saktah ( ﺳﮑﺘﻪ )",
    content: "menandakan berhenti seketika tanpa mengambil napas. Dengan kata lain, pembaca haruslah berhenti seketika tanpa mengambil napas baru untuk meneruskan bacaan; Contohnya",
    example: "كَلَّا بَلْ ۜ رَانَ عَلٰى قُلُوْبِهِمْ",
  },
];

export default class LearnPage11 extends Component {

  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: 'rgba(27, 90, 7, 0.9)' }}>
        <Text style={{
          fontWeight: "600",
          color: '#fff',
          fontSize: 16
          }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon type='MaterialIcons' style={{ fontSize: 18, color: '#fff' }} name="remove-circle" />
          : <Icon type='MaterialIcons' style={{ fontSize: 18, color: '#fff' }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <View style={{marginBottom: 10}}>
        <Text
          style={{
            backgroundColor: '#fff',
            fontSize: 15,
            padding: 10,
            color: '#000',
            fontStyle: "italic",
          }}
        >
          {item.content}{"\n"}
        </Text>
        <Text
          style={{
            color: '#000',
            fontFamily: 'arab-regular',
            fontSize: 30,
          }}
        >
          {item.example}
        </Text>
      </View>
    );
  }
  

  render() {

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

          <Content padder>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            renderExample={this._renderExample}
            />
          </Content>

        </Container>
    )
  }
}

const styles = StyleSheet.create({
  titleHeader: {
    fontFamily: 'Overpass-Black',
  },
});
