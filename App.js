import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import HomePage from './dirosa/pages/HomePage';
import LearnPage from './dirosa/pages/LearnPage';
import LawPage from './dirosa/pages/LawPage';
import WaqofPage from './dirosa/pages/WaqofPage';
import LearnPage1 from './dirosa/pages/learn/LearnPage1';
import LearnPage2 from './dirosa/pages/learn/LearnPage2';
import LearnPage3 from './dirosa/pages/learn/LearnPage3';
import LearnPage4 from './dirosa/pages/learn/LearnPage4';
import LearnPage5 from './dirosa/pages/learn/LearnPage5';
import LearnPage6 from './dirosa/pages/learn/LearnPage6';
import LearnPage7 from './dirosa/pages/learn/LearnPage7';
import LearnPage8 from './dirosa/pages/learn/LearnPage8';
import LearnPage9 from './dirosa/pages/learn/LearnPage9';
import LearnPage10 from './dirosa/pages/learn/LearnPage10';
import LearnPage11 from './dirosa/pages/learn/LearnPage11';
import LearnPage12 from './dirosa/pages/learn/LearnPage12';
import LearnPage13 from './dirosa/pages/learn/LearnPage13';
import LearnPage14 from './dirosa/pages/learn/LearnPage14';
import LearnPage15 from './dirosa/pages/learn/LearnPage15';
import LearnPage16 from './dirosa/pages/learn/LearnPage16';
import LearnPage17 from './dirosa/pages/learn/LearnPage17';
import LearnPage18 from './dirosa/pages/learn/LearnPage18';
import LearnPage19 from './dirosa/pages/learn/LearnPage19';
import LearnPage20 from './dirosa/pages/learn/LearnPage20';
import LearnPage21 from './dirosa/pages/learn/LearnPage21';
import LawPage1 from './dirosa/pages/law/LawPage1';
import LawPage2 from './dirosa/pages/law/LawPage2';
import LawPage3 from './dirosa/pages/law/LawPage3';
import LawPage4 from './dirosa/pages/law/LawPage4';
import LawPage5 from './dirosa/pages/law/LawPage5';
import LawPage6 from './dirosa/pages/law/LawPage6';
import LawPage7 from './dirosa/pages/law/LawPage7';
import LawPage8 from './dirosa/pages/law/LawPage8';
import LawPage9 from './dirosa/pages/law/LawPage9';
import LawPage10 from './dirosa/pages/law/LawPage10';
import AboutPage from './dirosa/pages/AboutPage';


const AppNavigator = createStackNavigator({
  Home: HomePage,
  Learn: LearnPage,
  Law: LawPage,
  About: AboutPage,
  Waqof: WaqofPage,
  Learn1: LearnPage1,
  Learn2: LearnPage2,
  Learn3: LearnPage3,
  Learn4: LearnPage4,
  Learn5: LearnPage5,
  Learn6: LearnPage6,
  Learn7: LearnPage7,
  Learn8: LearnPage8,
  Learn9: LearnPage9,
  Learn10: LearnPage10,
  Learn11: LearnPage11,
  Learn12: LearnPage12,
  Learn13: LearnPage13,
  Learn14: LearnPage14,
  Learn15: LearnPage15,
  Learn16: LearnPage16,
  Learn17: LearnPage17,
  Learn18: LearnPage18,
  Learn19: LearnPage19,
  Learn20: LearnPage20,
  Learn21: LearnPage21,
  Law1: LawPage1,
  Law2: LawPage2,
  Law3: LawPage3,
  Law4: LawPage4,
  Law5: LawPage5,
  Law6: LawPage6,
  Law7: LawPage7,
  Law8: LawPage8,
  Law9: LawPage9,
  Law10: LawPage10,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,
  }
});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  componentDidMount() {
      SplashScreen.hide();
  }
  render(){
    return (
      <AppContainer />
    )
  }
}
