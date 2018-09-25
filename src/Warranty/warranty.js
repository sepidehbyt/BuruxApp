import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Button, Icon, Right, Title } from 'native-base';
import {Text, Image, WebView} from 'react-native';
var API_URL = require('../config/config.js');

class warranty extends Component {

  render() {
    return (

        <Container>

        <Header>
        <Left>
            <Button transparent
            onPress={()=>{this.props.navigation.navigate('MainPage')}}
            >
              <Icon name='arrow-back' />
            </Button>
        </Left>
        <Right>
            <Title>ثبت مرجوعی</Title>
        </Right>
        </Header>

        <WebView
        source={{uri: 'http://www.burux.com/Warranty'}}
        style={{marginTop: 20}}
        />

        </Container>

    );
  }
}

export default warranty;