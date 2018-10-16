import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Toast, Root } from 'native-base';
import {StyleSheet,Text, Image, AsyncStorage,BackHandler} from 'react-native';
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



class login extends Component {
constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
        mobileNumber: '', 
        customerNum: '',
        password: '',
        loadedpass:'',
        verCode: ''
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

    componentWillMount(){
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        this.props.navigation.navigate('starter');
        return true;
      });
      this._retrieveData();
    }


    // phone_auth_send () {
    //   fetch('http://api.mrapi.ir/sms/send' , {
    //     method: 'POST',
    //     headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authentication': 'MDkxMjE1MDI3MDc6NmM3NjI0YTc3MzIwYzRkMGJkYTFhOTRjYjgzMTE3Mzc='
    //     },
    //     body:
    //       JSON.stringify({
    //       PhoneNumber : this.state.mobileNumber ,
    //       PatternID : Pattern_ID  ,
    //       Token :  'YnVydXhkM2QzTG1KMWNuVjRMbU52YlE9PQ==' ,
    //       ProjectType: 1
          
    //     }),
    //   }).then((response) => response.json())
    //   .then((responseJson) => { 
    //     alert(JSON.stringify(responseJson));
    //     })
    //   .catch((error) => {
    //       console.error(error);
    //   });
    // }

    // phone_auth_rec () {
    //   fetch('http://api.mrapi.ir/sms/verify' , {
    //     method: 'POST',
    //     headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authentication': 'MDkxMjE1MDI3MDc6NmM3NjI0YTc3MzIwYzRkMGJkYTFhOTRjYjgzMTE3Mzc='
    //     },
    //     body:
    //       JSON.stringify({
    //           PhoneNumber : this.state.mobileNumber,
    //           Code : this.state.verCode
    //     }),
    //   }).then((response) => response.json())
    //   .then((responseJson) => { 
    //     alert(JSON.stringify(responseJson));
    //     })
    //   .catch((error) => {
    //       console.error(error);
    //   });
    // }

    fetch_login () {
      fetch(API_URL + '/auth/login?' + '&mobile=' + this.state.mobileNumber + '&password=' + this.state.loadedpass , {
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
            this._storeData();
            this.props.navigation.navigate('MainPage');
          }
          else if(responseJson.message == 'Unauthorized') {
            Toast.show({ 
              text: 'شماره موبایل شما قبلا در سیستم ثبت نشده است',
              duration: 3000
            });
          }
        }
      })
      .catch((error) => {
          console.error(error);
      });
    }

    fetch_login2 () {
      fetch(API_URL + '/auth/login?' + 'customerNum=' + this.state.customerNum + '&password=' + this.state.password , {
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
            this._storeDatas();
            this.props.navigation.navigate('MainPage');
          }
          else if(responseJson.message == 'Unauthorized') {
            Toast.show({
              text: 'شماره مشتری یا رمز عبور اشتباه است',
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
        await AsyncStorage.setItem('key:Token', window.access_token);
      } catch (error) {
        // Error saving data
      }
    }

    _storeDatas = async () => {
      try {
        await AsyncStorage.setItem('key:Token', window.access_token);
        await AsyncStorage.setItem('key:Password', this.state.password);
      } catch (error) {
        // Error saving data
      }
    }

    _retrieveData = async () => {
      try {
        window.Password = await AsyncStorage.getItem('key:Password');
        this.setState({
          loadedpass:window.Password
        });
        window.access_token = await AsyncStorage.getItem('key:Token');
        
        if(window.access_token !== null) {
          this.props.navigation.navigate('MainPage');
        }
       } catch (error) {
         // Error retrieving data
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
              <Input style={{color:"white"}}
                onChangeText={(text) => this.setState({verCode: text})}
                value={this.state.verCode}
              />
            </Item>
            <Button style={{width:'80%',alignSelf:'center',marginTop:'10%'}} full rounded
            onPress={()=> {
              //this.phone_auth_rec(); 
              //alert(this.state.verCode);
              this.fetch_login();
              }}>
            <Text style={{color:"white"}}>ثبت کد</Text>
            </Button>
          </Modal>
        <Image source={{uri:"https://image.ibb.co/e1pWu9/back.jpg"}} style={{position:"absolute", width:"100%", height:"100%"}} />
        
        <Content>
        <Image source={{uri:"https://image.ibb.co/c3XUgp/Burux.png"}} style={{width:150, height:165, alignSelf:'center', marginTop:0}} />
          <Form style={{alignSelf:'center'}}>
            <Item floatingLabel style={{width: '80%'}}>
              <Icon name="md-call" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>شماره موبایل</Label>
              <Input
                style={{color:"white"}}
                onChangeText={(text) => this.setState({mobileNumber: text})}
                value={this.state.mobileNumber}
              />
            </Item>
            <Button style={{width:'80%',alignSelf:'center',marginTop:'2%'}} full rounded
            // onPress={()=> {this.props.navigation.navigate('MainPage')}}>
            onPress={()=>{
              if(this.state.mobileNumber.length != 11) {
                Toast.show({ 
                  text: 'شماره موبایل وارد شده صحیح نمی باشد',
                  duration: 3000
                });
              }
              else if(this.state.loadedpass == '') {
                Toast.show({ 
                  text: 'برای اولین ورود نیاز به ورود با شماره مشتری و رمز عبور است',
                  duration: 5000
                });
              }
              else{
                
                //this.phone_auth_send();
                this.refs.modal3.open();
              }
              }}>
            <Text style={{color:"white"}}>ارسال کد</Text>
            </Button>
          </Form>

          <Form style={{alignSelf:'center'}}>
            <Item floatingLabel style={{width: '80%'}}>
              <Icon name="calculator" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>شماره مشتری</Label>
              <Input
                style={{color:"white"}}
                onChangeText={(text) => this.setState({customerNum: text})}
                value={this.state.customerNum}
              />
            </Item>
            <Item floatingLabel style={{width: '80%'}}>
              <Icon name="lock" style={{color:"white"}}></Icon>
              <Label style={{color:"white"}}>رمز عبور</Label>
              <Input
                style={{color:"white"}}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.password}
                secureTextEntry={true}
              />
            </Item>
            
            <Button style={{width:'80%',alignSelf:'center',marginTop:'2%'}} full rounded
              onPress={()=> {
                if(this.state.password.length < 6) {
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
                this.fetch_login2();
                }
                }}>
            <Text style={{color:"white"}}>ورود</Text>
            </Button>
          </Form>

        </Content>
      
      </Container>
      </Root>
    );
  }
}

export default login;