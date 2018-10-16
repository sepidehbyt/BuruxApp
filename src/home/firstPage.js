import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Left, Right, Title } from 'native-base';
import {Text, Image, ScrollView, View, TouchableOpacity,BackHandler} from 'react-native';
var API_URL = require('../config/config.js');

class firstPage extends Component {

  componentWillMount(){
    // window._username = "window.access_token";
    // alert(window._username);
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.ecitApp();
      return true;
    });
  }

  render() {
    return (
      <Container style={{backgroundColor:'#00ccff'}}>
        
        <Header style={{borderBottomStartRadius:10,borderBottomEndRadius:10,backgroundColor:'#336799'}}>
        <Left>
            <Button transparent onPress={()=>{this.props.navigation.openDrawer();}}>
              <Icon name='menu' />
            </Button>
        </Left>
        <Right>
            <Title>خانه</Title>
        </Right>
        </Header>

        {/* <Image source={{uri : "https://image.ibb.co/dEzJFf/002.png"}} style={{ width:"100%", height:"100%"}} /> */}
        
        <View style={{flex:1,backgroundColor:"#00ccff"}}>
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:0,top:0, width:"45%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginVertical:"2%"}}
                onPress={()=> {this.props.navigation.navigate('catalogue')}}>
                {/* <Image source={{uri : "https://image.ibb.co/gqyCrL/003.png"}} style={{left:"5%",top:"5%",width:"90%",height:"90%",borderRadius:10}} /> */}
                
                {/* <Image source={{uri : "https://image.ibb.co/c1gFBL/004.png"}} style={{width:"100%",height:"100%",resizeMode:'stretch'}} /> */}
                <View style={{backgroundColor:"green", flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> کاتالوگ </Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:"50%",top:0, width:"44%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginVertical:"2%"}}>
                <View style={{backgroundColor:"blue", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> بازی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:0,top:"36%", width:"45%", height:"30%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('ProductPage')}}>
                <View style={{backgroundColor:"purple", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> محصولات جدید </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute" ,left:"50%",top:"36%", width:"44%", height:"30%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('WarrantyPage')}}>
                <View style={{backgroundColor:"lightgreen", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> ثبت مرجوعی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:0,top:"66%", width:"45%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('photonPage')}}>
                <View style={{backgroundColor:"gray", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> فوتون </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"50%",top:'66%', width:"44%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('NewsPage')}}>
                <View style={{backgroundColor:"pink", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> اخبار </Text>
                </View>
                </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default firstPage;