import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon, Left, Right, Title, Body, FooterTab, Footer } from 'native-base';
import {Text, Image} from 'react-native';
import { TabNavigator } from "react-navigation";
import register from '../register/register';
import firstPage from './firstPage';
import LoginPage from '../login/login';
import ProductLists from '../Products/productLists.js';
import orders from '../orders/orders.js';

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
          <FooterTab>
            <Button vertical
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("FirstPage")}>
              <Icon name="home" />
              <Text style={{color:"white"}}>خانه</Text>
            </Button>
            <Button vertical
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("JadeChat",{token : window.access_token})}>
              <Icon name="ios-archive" />
              <Text style={{color:"white"}}>ثبت سفارش</Text>
            </Button>
            <Button vertical active
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate("NineChat")}>
              <Icon name="ios-basket" />
              <Text style={{color:"white"}}>سفارش های من</Text>
            </Button>
            </FooterTab>
        </Footer>
    );
  }
}
)
);