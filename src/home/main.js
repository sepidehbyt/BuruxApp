import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Left, Right, Title, Body, FooterTab, Footer } from 'native-base';
import {Text, Image} from 'react-native';
import { TabNavigator } from "react-navigation";
import register from '../register/register';
import firstPage from './firstPage';
import LoginPage from '../login/login';
import ProductLists from '../Products/productLists.js';
import orders from '../orders/orders.js';

var firstselectedTitle = 'خانه';
var secondselectedTitle = '';
var thirdselectedTitle = '';


export default (main = TabNavigator(
    {
      FirstPage: { screen: firstPage },
      JadeChat: { screen: ProductLists },
      NineChat: { screen: orders }
    },
    {
      tabBarPosition: "bottom",
      tabBarComponent: props => {
        return (
        <Footer>
          <FooterTab style={{backgroundColor:"#336799"}}>
            <Button vertical style={{backgroundColor:"#336799"}}
            active={props.navigationState.index === 0}
            onPress={() => {firstselectedTitle = 'خانه'; secondselectedTitle = ''; thirdselectedTitle = ''; props.navigation.navigate("FirstPage");}}>
              <Icon name="home" style={{fontWeight:'bold'}}/>
              <Text style={{color:"white", fontFamily:'Mj_Saudi Arabia'}}>{firstselectedTitle}</Text>
            </Button>
            <Button vertical style={{backgroundColor:"#336799"}}
            active={props.navigationState.index === 1}
            onPress={() => {firstselectedTitle = ''; secondselectedTitle = 'سفارش های من'; thirdselectedTitle = '';props.navigation.navigate("JadeChat",{token : window.access_token});}}>
              <Icon name="ios-archive" />
              <Text style={{color:"white", fontFamily:'Mj_Saudi Arabia'}}>{secondselectedTitle}</Text>
            </Button>
            <Button vertical style={{backgroundColor:"#336799"}}
            active={props.navigationState.index === 2}
            onPress={() => {firstselectedTitle = ''; secondselectedTitle = ''; thirdselectedTitle = 'سفارشات'; props.navigation.navigate("NineChat");}}>
              <Icon name="ios-basket" />
              <Text style={{color:"white", fontFamily:'Mj_Saudi Arabia'}}>{thirdselectedTitle}</Text>
            </Button>
            </FooterTab>
        </Footer>
    );
  }
}
)
);