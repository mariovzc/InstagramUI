import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Icon } from 'native-base';

class LikesTab extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> LikesTab </Text>
      </View>
    )
  }
}

export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

