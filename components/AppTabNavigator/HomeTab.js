import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { 
  Icon, 
  Container, 
  Content
} from 'native-base';

import axios from 'axios';

import CardComponent from '../CardComponent';

class HomeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-home' style={{color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {
            this.state.users.map((user,index) => {
              return (
                <CardComponent
                  key={index}
                  likes='101 likes'
                  thumb= {user.thumb}
                  picture={user.picture}
                  userName={user.user_name}
                />
              )
            })
          }          
        </Content>
      </Container>
    )
  }

  componentDidMount() {
    this.feedData()
  }

  feedData() {
    axios.get('https://randomuser.me/api/?inc=login,picture&results=5')
      .then((response) => {
        this.getPicture().then(url => {
          this.setState({
            users: response.data.results.map(user => {
              return {
                thumb: user.picture.thumbnail,
                user_name: user.login.username,
                picture: url
              }
            })
          })
        })
      })

  }

  getPicture() {
    return fetch('https://api.thecatapi.com/v1/images/search?mime_type=jpg,png')
      .then(res => res.json())
      .then(res => {
      return res[0].url;
    })
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

