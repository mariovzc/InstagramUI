import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import { Icon } from 'native-base';

import HomeTab from './components/AppTabNavigator/HomeTab';
import SearchTab from './components/AppTabNavigator/SearchTab';
import SearchComponent from './components/SearchComponent';
import AddMediaTab from './components/AppTabNavigator/AddMediaTab'
import LikesTab from './components/AppTabNavigator/LikesTab';
import ProfileTab from './components/AppTabNavigator/ProfileTab';


export default class App extends React.Component {
  render() {
    return (
      <AppTabNavigator/>
    );
  }
}



const homeTab = createStackNavigator(
  {
    Home: {
      screen: HomeTab
    }
  }
);

const searchTab = createStackNavigator(
  {
    Search: {
      screen: SearchTab
    }
  }
);

const addMediaTab = createStackNavigator(
  {
    AddMedia: {
      screen: AddMediaTab
    }
  }
);

const likesTab = createStackNavigator(
  {
    Likes: {
      screen: LikesTab
    }
  }
);

const profileTab = createStackNavigator(
  {
    Profile: {
      screen: ProfileTab
    }
  }
);

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: homeTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-home' style={{color: tintColor}} />
      )
    }
  },
  SeachTab: {
    screen: searchTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-search' style={{color: tintColor}} />
      )
    }
  },
  AddMediaTab: {
    screen: addMediaTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-add-circle' style={{color: tintColor}} />
      )
    }
  },
  LikesTab: {
    screen: likesTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-heart' style={{color: tintColor}} />
      )
    }
  },
  ProfileTab: {
    screen: profileTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='person' style={{color: tintColor}} />
      )
    }
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
