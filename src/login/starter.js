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
        
        <Image source={{uri:"http://195.248.241.97/assets/starter/004.png"}} style={{position:"absolute", width:"100%", height:"100%", resizeMode:'stretch'}} />
        
        <Content>
        <Image source={{uri:"https://image.ibb.co/c3XUgp/Burux.png"}} style={{width:150, height:165, alignSelf:'center'}} />
            <Button style={{alignSelf:'center',marginTop:'23%',backgroundColor:'#008ed8', width:'40%',alignSelf:'center', borderRadius:8}} full blocked
             onPress={()=> {this.props.navigation.navigate('LoginPage')}}>
            <Text style={{color:'#89fafa', fontFamily:'Mj_Saudi Arabia', fontSize:17}}>ورود</Text>
            </Button>
            
            <Button style={{alignSelf:'center',backgroundColor:'#008ed8', width:'40%',alignSelf:'center',marginTop:'10%', borderRadius:8}} full blocked
            onPress={()=> {this.props.navigation.navigate('RegisterPage')}}>
            <Text style={{color:'#89fafa', fontFamily:'Mj_Saudi Arabia', fontSize:17}}>عضویت</Text>
            </Button>
        </Content>
      
      </Container>
    );
  }
}

export default starter;