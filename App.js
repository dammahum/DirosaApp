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
},
{
  initialRouteName: 'Learn11',
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