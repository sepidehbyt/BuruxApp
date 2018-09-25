import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Left, Right, Title } from 'native-base';
import {Text, Image, ScrollView, View, TouchableOpacity} from 'react-native';
var API_URL = require('../config/config.js');

class firstPage extends Component {

  render() {
    return (
      <Container>
        
        <Header>
        <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
        </Left>
        <Right>
            <Title>خانه</Title>
        </Right>
        </Header>

        {/* <Image source={require('../../assets/back.jpg')} style={{position:"absolute", width:"100%", height:"100%"}} /> */}
        
        <View style={{flex:1}}>
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:0,top:0, width:"56%", height:"46%", borderRadius:8, marginHorizontal:"2%", marginVertical:"2%"}}>
                <View style={{backgroundColor:"green", flex:1, borderRadius:8}}>
                <Text style={{color:"black", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> کاتالوگ </Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this._onPressButton} style={{position:"absolute",left:"60%",top:0, width:"34%", height:"26%", borderRadius:8, marginHorizontal:"2%", marginVertical:"2%"}}>
                <View style={{backgroundColor:"blue", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> بازی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:0,top:"50%", width:"56%", height:"20%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('ProductPage')}}>
                <View style={{backgroundColor:"purple", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> محصولات جدید </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute" ,left:"60%",top:"31%", width:"34%", height:"48%", borderRadius:8, marginHorizontal:"2%"}}
                onPress={()=> {this.props.navigation.navigate('WarrantyPage')}}>
                <View style={{backgroundColor:"lightgreen", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> ثبت مرجوعی </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:0,top:"70%", width:"56%", height:"26%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
                onPress={()=> {this.props.navigation.navigate('photonPage')}}>
                <View style={{backgroundColor:"gray", flex:1, borderRadius:8}}>
                <Text style={{color:"white", alignSelf:"center", top:"50%", fontSize:20, marginTop:-10}}> فوتون </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={{position:"absolute",left:"60%",top:'79%', width:"34%", height:"16%", borderRadius:8, marginHorizontal:"2%", marginTop:"2%"}}
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