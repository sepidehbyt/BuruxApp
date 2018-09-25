import React, { Component } from 'react';
import { Container, Header, Body, Content, Form, Item, Input, Label, Button, Icon, Right, Left, Title, Card, CardItem, Thumbnail } from 'native-base';
import {WebView} from 'react-native';
  

class pdf extends React.Component {

    render() {
    return (
    <Container>

    <Header>
    <Left>
        <Button transparent
        onPress={()=>{this.props.navigation.navigate('photonPage')}}
        >
        <Icon name='arrow-back' />
        </Button>
    </Left>
    <Right>
        <Title>فوتون</Title>
    </Right>
    </Header>
    
    <WebView source={{uri: 'http://docs.google.com/gview?embedded=true&url=http://www.burux.com/download/photon-9705.pdf'}}>
    </WebView>

    </Container>

    )}
}

export default pdf;