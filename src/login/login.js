import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import {Text, Image} from 'react-native';
var API_URL = require('../config/config.js');

class login extends Component {
constructor(props) {
    super(props);
    this.state = { UserName: '', Password: '' };
    }

  render() {
    return (
      <Container>
        <Header />
        <Image source={require('../../assets/back.jpg')} style={{position:"absolute", width:"100%", height:"100%"}} />
        <Content>
        <Image source={require('../../assets/Burux.png')} style={{width:150, height:165, alignSelf:'center'}} />
          <Form style={{alignSelf:'center'}}>
            <Item floatingLabel style={{width: '80%'}}>
              <Icon name="person" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>نام کاربری</Label>
              <Input
                onChangeText={(text) => this.setState({UserName: text})}
                value={this.state.UserName}
              />
            </Item>
            <Item floatingLabel style={{width: '80%'}} >
              <Icon name="lock" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>رمز عبور</Label>
              <Input
                onChangeText={(text) => this.setState({Password: text})}
                value={this.state.Password}
                secureTextEntry={true}
              />
            </Item>
            <Button style={{width:'80%',alignSelf:'center',marginTop:30}} full rounded
            onPress={()=> {this.props.navigation.navigate('MainPage')}}>
            <Text style={{color:"white"}}>ورود</Text>
            </Button>
            <Text style={{alignSelf:'center', marginVertical:10, color:"white"}}> یا </Text>
            <Button style={{width:'80%',alignSelf:'center'}} full rounded
            onPress={()=> {this.props.navigation.navigate('RegisterPage')}}>
            <Text style={{color:"white"}}>ثبت نام</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default login;