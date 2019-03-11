import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomePage from './dirosa/pages/HomePage';
import LearnPage from './dirosa/pages/LearnPage';
import LawPage from './dirosa/pages/LawPage';
import IntroPage from './dirosa/pages/IntroPage';
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
import LearnPage15 from './dirosa/pages/learn/LearnPage15';
import LearnPage16 from './dirosa/pages/learn/LearnPage16';
import LearnPage20 from './dirosa/pages/learn/LearnPage20';
import LearnPage21 from './dirosa/pages/learn/LearnPage21';


const AppNavigator = createStackNavigator({
  Home: HomePage,
  Learn: LearnPage,
  Law: LawPage,
  Intro: IntroPage,
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
  Learn15: LearnPage15,
  Learn16: LearnPage16,
  Learn20: LearnPage20,
  Learn21: LearnPage21,
},
{
  initialRouteName: 'Learn20',
  defaultNavigationOptions: {
    header: null,
  }
});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render(){
    return (
      <AppContainer />
    )
  }
}