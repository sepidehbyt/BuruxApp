import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button , Icon, Toast, Root} from 'native-base';
import {StyleSheet,Text, Image, AsyncStorage} from 'react-native';
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
      password:'',
      customerNum:''
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
      fetch(API_URL + '/auth/signup?' + 'name=' + this.state.name + '&mobile=' + this.state.mobileNumber + '&password=' + this.state.password + '&customerNum=' + this.state.customerNum , {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson != undefined){
          if(responseJson.message == '#succesUser'){
            this.fetch_login();
            }
        }
      })
      .catch((error) => {
          console.error(error);
      });
    }

    phone_auth_send () {
      fetch('http://api.mrapi.ir/sms/send' , {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authentication': 'MDkxMjE1MDI3MDc6NmM3NjI0YTc3MzIwYzRkMGJkYTFhOTRjYjgzMTE3Mzc='
        },
        body:
          JSON.stringify({
          PhoneNumber : this.state.mobileNumber ,
          PatternID : Pattern_ID  ,
          Token :  'YnVydXhkM2QzTG1KMWNuVjRMbU52YlE9PQ==' ,
          ProjectType: 1
          
        }),
      }).then((response) => response.json())
      .then((responseJson) => { 
        alert(JSON.stringify(responseJson));
        })
      .catch((error) => {
          console.error(error);
      });
    }

    phone_auth_rec () {
      fetch('http://api.mrapi.ir/sms/verify' , {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authentication': 'MDkxMjE1MDI3MDc6NmM3NjI0YTc3MzIwYzRkMGJkYTFhOTRjYjgzMTE3Mzc='
        },
        body:
          JSON.stringify({
              PhoneNumber : this.state.mobileNumber,
              Code : this.state.verCode
        }),
      }).then((response) => response.json())
      .then((responseJson) => { 
        alert(JSON.stringify(responseJson));
        })
      .catch((error) => {
          console.error(error);
      });
    }

    fetch_customerNum () {
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
          console.error(error);
      });
    }

    fetch_login () {
      fetch(API_URL + '/auth/login?' + '&mobile=' + this.state.mobileNumber + '&password=' + this.state.password , {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson != undefined){
          if(responseJson.access_token != undefined) {
            window.access_token = responseJson.access_token;
            window.password = this.state.password;
            // alert('injayi ke man migam :D' + window.password + ' ' + window.access_token + ' '+ this.state.password + ' '+responseJson.access_token);
            this._storeData();
            this.props.navigation.navigate('MainPage');
          } 
          else if(responseJson.message == 'Unauthorized') {
            Toast.show({ 
              text: 'در حال حاضر امکان ورود شما وجود ندارد',
              duration: 3000
            });
          }
        }
      })
      .catch((error) => {
          console.error(error);
      });
    }

    _storeData = async () => {
      try {
        await AsyncStorage.setItem('key:Password', window.password);
        await AsyncStorage.setItem('key:Token', window.access_token);
      } catch (error) {
        // Error saving data
      }
    }

  render() {
    return (
      <Root>
      <Container>
        <Header />

        <Modal swipeToClose={false} style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Image source={{uri:"https://image.ibb.co/e1pWu9/back.jpg"}} style={{height:'100%',width:'100%',position:'absolute'}}></Image>
          <Image source={{uri:"https://image.ibb.co/c3XUgp/Burux.png"}} style={{position:'absolute',width:100, height:110, alignSelf:'center'}} />
          <Item floatingLabel style={{width: '20%',left:'50%',marginTop:'28%'}}>
              <Label style={{color:"white"}}>کد</Label>
              <Input
                style={{color:"white"}}
                onChangeText={(text) => this.setState({verCode: text})}
                value={this.state.verCode}
              />
          </Item>
          <Button style={{width:'80%',alignSelf:'center',marginTop:'10%'}} full rounded
            onPress={()=> {
              //this.phone_auth_rec(); alert(this.state.verCode);
              this.fetch_register();
              // this.props.navigation.navigate('MainPage');

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
                style={{color:"white"}}
                onChangeText={(text) => {
                  this.setState({name: text})
                  }
                  }
                value={this.state.name}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="md-call" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>شماره موبایل</Label>
              <Input
                style={{color:"white"}}
                onChangeText={(text) => {
                this.setState({mobileNumber: text})
              }
              }
                value={this.state.mobileNumber}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="calculator" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>شماره مشتری</Label>
              <Input
                style={{color:"white"}}
                onChangeText={(text) => this.setState({customerNum: text})}
                value={this.state.customerNum}
                secureTextEntry={true}
              />
            </Item>
            <Item floatingLabel>
            <Icon name="lock" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>رمز عبور</Label>
              <Input
                style={{color:"white"}}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                secureTextEntry={true}
              />
            </Item>
            <Button style={{width:'80%',alignSelf:'center', marginTop:40}} full rounded
            // onPress={()=> {this.props.navigation.navigate('MainPage')}}>
            onPress={()=>{
              if(this.state.name.length < 5) {
                Toast.show({
                  text: 'نام و نام خانوادگی باید بیشتر از 5 حرف باشد',
                  duration: 3000
                });
              }
              else if(this.state.mobileNumber.length != 11) {
                Toast.show({
                  text: 'شماره موبایل شما معتبر نمی باشد',
                  duration: 3000
                });
              }
              else if(this.state.password.length < 6) {
                Toast.show({
                  text: 'رمز عبور باید بیشتر از 6 حرف باشد',
                  duration: 3000
                });
              }
              else if(this.state.customerNum.length ==0) {
                Toast.show({
                  text: 'شماره مشتری شما معتبر نیست',
                  duration: 3000
                });
              }
              else {
                //this.phone_auth_send();
                this.refs.modal3.open();
              }
              }}>
            <Text style={{color:"white"}}>ارسال کد</Text>
            </Button>
          </Form>
        </Content>
      </Container>
      </Root>


    );
  }
}

export default register;