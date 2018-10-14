import React, { Component } from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

class MainScreen extends Component {

  static navigationOptions = {
    headerLeft: <Icon name='ios-camera-outline' style={{paddingLeft: 10}} />,
    title: 'Instagram',
    headerRight: <Icon name='ios-send-outline' style={{paddingRight: 10}} />,
    headerTitleStyle: {textAlign: 'center', flex: 1}
  }

  render() {
    return (
      <AppTabNavigator/>
    )
  }
}

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SeachTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
})

export default MainScreen;
