import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Icon } from 'native-base';

class AddMedia extends Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-add-circle' style={{color: tintColor}} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> AddMedia </Text>
      </View>
    )
  }
}

export default AddMedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

