import React, { Component } from 'react';
import { Container, Header, Body, Content, Form, Item, Input, Label, Button, Icon, Right, Left, Title, Card, CardItem, Thumbnail } from 'native-base';
import {WebView,BackHandler} from 'react-native';
  

class pdf extends React.Component {

    componentWillMount(){
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('photonPage');
            return true;
          });
    }

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
    
    <WebView source={{uri: this.props.navigation.getParam('pdfURL')}}>
    </WebView>

    </Container>

    )}
}

export default pdf;