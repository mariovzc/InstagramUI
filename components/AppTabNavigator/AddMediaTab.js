import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Icon } from 'native-base';

class AddMedia extends Component {

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

