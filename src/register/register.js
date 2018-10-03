import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button , Icon} from 'native-base';
import {StyleSheet,Text, Image} from 'react-native';
import Modal from 'react-native-modalbox';

var API_URL = require('../config/config.js');
var Pattern_ID = require('../config/patternID.js');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigationBar: {
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.5,
    backgroundColor: '#ffffff',
  },
  navigationTitle: {
    padding: 10,
  },
  navigationButton: {
    padding: 10,
  },
  navigationLeftButton: {
    paddingLeft: 20,
    paddingRight: 40,
  },
  navigator: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  wrapper: {
  paddingTop: 50,
  flex: 1
},
modal3: {
  height: 300
},


btn: {
  margin: 10,
  backgroundColor: "#3B5998",
  color: "white",
  padding: 10
},

btnModal: {
  position: "absolute",
  top: 0,
  right: 0,
  width: 50,
  height: 50,
  backgroundColor: "transparent"
},

text: {
  color: "black",
  fontSize: 15,
  textAlign: 'center'
}

});

class register extends Component {
constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      mobileNumber: '', 
      verCode: '',
      name: '',
      email: '',
      password:'',
      c_password:''
    };
    }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
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
        if(responseJson != undefined){
          //alert(API_URL + '/auth/signup?' + 'name=' + this.state.name + '&email=' + this.state.email + '&password=' + this.state.password);
          alert(JSON.stringify(responseJson));
          if(responseJson.message == 'Successfully created user!')
            this.props.navigation.navigate('LoginPage')
        }
      })
      .catch((error) => {
          alert(API_URL + '/auth/signup?' + 'name=' + this.state.name + '&email=' + this.state.email + '&password=' + this.state.password);
          console.error(error);
      });
    }

  render() {
    return (
      <Container>
        <Header />

        <Modal swipeToClose={false} style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Image source={{uri:"https://image.ibb.co/e1pWu9/back.jpg"}} style={{height:'100%',width:'100%',position:'absolute'}}></Image>
          <Image source={{uri:"https://image.ibb.co/c3XUgp/Burux.png"}} style={{position:'absolute',width:100, height:110, alignSelf:'center'}} />
          <Item floatingLabel style={{width: '20%',left:'50%',marginTop:'28%'}}>
              <Label style={{color:"white"}}>کد</Label>
              <Input
                onChangeText={(text) => this.setState({verCode: text})}
                value={this.state.verCode}
              />
          </Item>
          <Button style={{width:'80%',alignSelf:'center',marginTop:'10%'}} full rounded
            onPress={()=> {
              //this.phone_auth_rec(); alert(this.state.verCode);
              this.props.navigation.navigate('MainPage');
              }}>
            <Text style={{color:"white"}}>ثبت کد</Text>
          </Button>
        </Modal>

        <Image source={{uri:"https://image.ibb.co/e1pWu9/back.jpg"}} style={{position:"absolute", width:"100%", height:"100%"}} />
        <Content>
          <Form style={{alignSelf:'center'}}>
            <Item floatingLabel>
            <Icon name="person" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>نام و نام خانوادگی</Label>
              <Input
                onChangeText={(text) => this.setState({name: text})}
                value={this.state.name}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="md-call" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>شماره موبایل</Label>
              <Input
                onChangeText={(text) => this.setState({email: text})}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="calculator" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>شماره مشتری</Label>
              <Input
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                secureTextEntry={true}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="lock" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>رمز عبور</Label>
              <Input
                onChangeText={(text) => this.setState({c_password: text})}
                value={this.state.c_password}
                secureTextEntry={true}
              />
            </Item>
            <Button style={{width:'80%',alignSelf:'center', marginTop:40}} full rounded
            // onPress={()=> {this.props.navigation.navigate('MainPage')}}>
            onPress={()=>{
              //this.phone_auth_send();
              this.refs.modal3.open();
              }}>
            <Text style={{color:"white"}}>ارسال کد</Text>
            </Button>
          </Form>
        </Content>
      </Container>


    );
  }
}

export default register;