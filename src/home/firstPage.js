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
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:"3%",top:0, width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('catalogue')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"10%",width:"74%",height:"79%"}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon-cataloge.jpg"}} style={{width:"40%", height:"45%", left:"30%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-10, fontFamily:'Mj_Saudi Arabia'}}> کاتالوگ </Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:"47%",top:0, width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"10%",width:"74%",height:"79%"}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon-game.jpg"}} style={{width:"40%", height:"45%", left:"30%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-10, fontFamily:'Mj_Saudi Arabia'}}> بازی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"3%",top:"36%", width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('ProductPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"10%",width:"75.5%",height:"79%"}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon-lamp.jpg"}} style={{width:"40%", height:"45%", left:"30%", top:"15%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"40%", fontSize:14, marginTop:-10, fontFamily:'Mj_Saudi Arabia'}}>محصولات</Text>
                <Text style={{color:"black", alignSelf:"center", top:"40%", fontSize:14, marginTop:-10, fontFamily:'Mj_Saudi Arabia'}}>جدید</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute" ,left:"47%",top:"36%", width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('WarrantyPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"10%",width:"75.5%",height:"79%"}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon-marju.jpg"}} style={{width:"40%", height:"45%", left:"30%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-10, fontFamily:'Mj_Saudi Arabia'}}> ثبت مرجوعی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"3%",top:"66%", width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('photonPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"10%",width:"75.5%",height:"79%"}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon-foton.jpg"}} style={{width:"40%", height:"45%", left:"30%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-10, fontFamily:'Mj_Saudi Arabia'}}> فوتون </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"47%",top:'66%', width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('NewsPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"10%",width:"75.5%",height:"79%"}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon-news.jpg"}} style={{width:"40%", height:"45%", left:"30%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-10, fontFamily:'Mj_Saudi Arabia'}}> اخبار </Text>
                </View>
                </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default firstPage;