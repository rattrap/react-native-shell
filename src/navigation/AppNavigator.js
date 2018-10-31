import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoadingScreen from '../screens/LoadingScreen';

export default createSwitchNavigator({
  Loading: LoadingScreen,
  Main: MainTabNavigator,
});