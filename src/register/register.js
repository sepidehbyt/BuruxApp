import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button , Icon} from 'native-base';
import {Text, Image} from 'react-native';
var API_URL = require('../config/config.js');

class register extends Component {
constructor(props) {
    super(props);
    this.state = { name: '', email: '', password:'', c_password:'' };
    }

    fetch_register () {
      fetch(API_URL + '/auth/signup?' + 'name=' + this.state.name + '&email=' + this.state.email + '&password=' + this.state.password , {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((responseJson) => { 
        if(responseJson != undefined)
          return responseJson.access_token;
      })
      .catch((error) => {
        console.error(error);
      });
    }

  render() {
    return (
      <Container>
        <Header />
        <Image source={require('../../assets/back.jpg')} style={{position:"absolute", width:"100%", height:"100%"}} />
        <Content>
          <Form style={{alignSelf:'center'}}>
            <Item floatingLabel>
            <Icon name="person" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>نام کاربری</Label>
              <Input
                onChangeText={(text) => this.setState({name: text})}
                value={this.state.name}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="mail" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>ایمیل</Label>
              <Input
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="lock" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>رمز عبور</Label>
              <Input
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                secureTextEntry={true}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="lock" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>تکرار رمز عبور</Label>
              <Input
                onChangeText={(text) => this.setState({c_password: text})}
                value={this.state.c_password}
                secureTextEntry={true}
              />
            </Item>
            <Button style={{width:'80%',alignSelf:'center', marginTop:40}} full rounded
            onPress={()=> {this.props.navigation.navigate('LoginPage')}}>
            <Text style={{color:"white"}}>ثبت نام</Text>
            </Button>
          </Form>
        </Content>
      </Container>


    );
  }
}

export default register;