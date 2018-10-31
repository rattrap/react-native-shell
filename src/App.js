import React, { Component } from 'react';
import AppNavigator from './navigation/AppNavigator';
import NavigationService from './navigation/service';

export default class App extends Component {
  render() {
    return (
      <AppNavigator ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} />
    );
  }
}