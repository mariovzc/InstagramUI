import React, { Component } from 'react';

import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class SearchComponent extends Component {

  render() {
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

export default SearchComponent;