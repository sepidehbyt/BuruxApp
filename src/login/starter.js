import React, { Component } from 'react';
import { Container, Header, Content, Form, Button } from 'native-base';
import {Text, Image,BackHandler} from 'react-native';

class starter extends Component {
constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
        mobileNumber: '', 
        verCode: ''
      };
    }

  componentWillMount(){
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });
    console.disableYellowBox = true;
  }

  
  render() {
    return (
      <Container>
        <Header />
        
        <Image source={{uri:"https://image.ibb.co/e1pWu9/back.jpg"}} style={{position:"absolute", width:"100%", height:"100%"}} />
        
        <Content>
        <Image source={{uri:"https://image.ibb.co/c3XUgp/Burux.png"}} style={{width:150, height:165, alignSelf:'center'}} />
          <Form style={{alignSelf:'center',marginTop:'40%'}}>
            <Button style={{width:'80%',alignSelf:'center',marginTop:'2%'}} full rounded
             onPress={()=> {this.props.navigation.navigate('LoginPage')}}>
            <Text style={{color:"white"}}>ورود</Text>
            </Button>
            
            <Button style={{width:'80%',alignSelf:'center',marginTop:'2%'}} full rounded
            onPress={()=> {this.props.navigation.navigate('RegisterPage')}}>
            <Text style={{color:"white"}}>عضویت</Text>
            </Button>
          </Form>
        </Content>
      
      </Container>
    );
  }
}

export default starter;