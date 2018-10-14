import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from 'native-base'

class CardComponent extends Component {

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail 
              source={require('../assets/profile.jpg')}
            />
            <Body>
              <Text>Varum</Text>
              <Text note>Oct 14, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image 
            source={require('../assets/card.jpg')}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon 
                name='ios-heart-outline'
                style={{color: 'black'}}
              />
            </Button>
            <Button transparent>
              <Icon 
                name='ios-chatbubbles-outline'
                style={{color: 'black'}}
              />
            </Button>
            <Button transparent>
              <Icon 
                name='ios-send-outline'
                style={{color: 'black'}}
              />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{height: 20}}>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text> 
              <Text style={{fontWeight: '900'}}>
                Varum 
              </Text>
              hello i am a instagram clone for testing :-D
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

