import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {  
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Root
} from 'native-base';
import { Font, AppLoading } from "expo";

class SearchTab extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Container>
        <Header searchBar round transparent>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Buscar"/>
            <Icon name="code" />
          </Item>
          <Button transparent>
            <Text>Buscar</Text>
          </Button>
        </Header>
      </Container>
    )
  }
}

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

