import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Icon } from 'native-base';

class ProfileTab extends Component {

  static navigationOptions = {
    headerLeft: <Icon name='ios-camera-outline' style={{paddingLeft: 10}} />,
    title: 'Profile',
    headerRight: <Icon name='ios-send-outline' style={{paddingRight: 10}} />,
    headerTitleStyle: {textAlign: 'center', flex: 1}    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> ProfileTab </Text>
      </View>
    )
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

