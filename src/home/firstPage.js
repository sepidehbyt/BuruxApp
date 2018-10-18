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
            <Image source={{uri : "https://image.ibb.co/iZdQVf/001.png"}} style={{width:30,height:30}} />
            </Button>
        </Left>
        <Right style={{flex:0.5}}>
            <Title style={{fontFamily:'Mj_Saudi Arabia'}}>خانه</Title>
        </Right>
        </Header>

        {/* <Image source={{uri : "https://image.ibb.co/dEzJFf/002.png"}} style={{ width:"100%", height:"100%"}} /> */}
        
        <View style={{flex:1,backgroundColor:"#00ccff"}}>
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:"3%",top:0, width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('catalogue')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"14%",width:"75.5%",aspectRatio:1}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon cataloge.png"}} style={{aspectRatio:1, height:"45%", left:"26%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-17, fontFamily:'Mj_Saudi Arabia'}}> کاتالوگ </Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:"47%",top:0, width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"14%",width:"74%",aspectRatio:1,}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon game.png"}} style={{aspectRatio:1, height:"45%", left:"26%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                  <Text style={{color:"black", alignSelf:"center",textAlign:'center',alignContent:'center', top:"50%", fontSize:14, marginTop:-17, fontFamily:'Mj_Saudi Arabia'}}> بازی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"3%",top:"36%", width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('ProductPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"14%",width:"75.5%",aspectRatio:1,}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon lamp.png"}} style={{aspectRatio:1, height:"45%", left:"26%", top:"15%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"40%", fontSize:14, marginTop:-20, fontFamily:'Mj_Saudi Arabia'}}>محصولات</Text>
                <Text style={{color:"black", alignSelf:"center", top:"40%", fontSize:14, fontFamily:'Mj_Saudi Arabia',marginTop:-8}}>جدید</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute" ,left:"47%",top:"36%", width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('WarrantyPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"14%",width:"75.5%",aspectRatio:1,}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon marju.png"}} style={{aspectRatio:1, height:"45%", left:"26%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-17, fontFamily:'Mj_Saudi Arabia'}}> ثبت مرجوعی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"3%",top:"66%", width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('photonPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"14%",width:"75.5%",aspectRatio:1,}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon foton.png"}} style={{aspectRatio:1, height:"45%", left:"26%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-17, fontFamily:'Mj_Saudi Arabia'}}> فوتون </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"47%",top:'66%', width:"40%", height:"30%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('NewsPage')}}>
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backShadow.png"}} style={{position:'absolute',left:1.5,top:0,width:"100%",height:"100%",borderRadius:10}} />
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/backWhite.png"}} style={{borderRadius:8,position:'absolute',left:"13.5%", top:"14%",width:"75.5%",aspectRatio:1,}} />  
                <Image source={{uri : "http://195.248.241.97/assets/firstpage/icon news.png"}} style={{aspectRatio:1, height:"45%", left:"26%", top:"20%", resizeMode:'stretch'}}/>
                <View style={{flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:14, marginTop:-17, fontFamily:'Mj_Saudi Arabia'}}> اخبار </Text>
                </View>
                </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default firstPage;





