import React, { Component } from 'react';
import { AppRegistry, Image,View, StatusBar } from "react-native";
import {
  Text,
  Container,
  List,
  Content,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
export default class Side333Bar extends React.Component {

  render() {
    return (
      <Container style={{backgroundColor: 'white'}}>
        <View style={{flex:1}} >
          <Image
            style={{
              height: "30%",
              width: "100%",
              alignSelf: "stretch",
              marginBottom:' 1%'
            }}
            source={{uri : "http://195.248.241.97/assets/sidebar/001.png"}}
          />

          
          <View
                style = {{marginBottom:' 1%',width:"100%", height:"11.6%" , alignContent:"flex-end",justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end"}}>
                <Image source={{uri : "http://195.248.241.97/assets/sidebar/002.png"}} style={{position: 'absolute',height:"100%",width:"100%",alignSelf: "stretch",}} />
                <Text style = {{color:'white', justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end",marginRight:40,marginBottom:20,fontFamily:'Mj_Saudi Arabia',fontSize:17  }}>محصولات</Text>
          </View>
          <View
                style = {{marginBottom:' 1%',width:"100%", height:"11.6%" , alignContent:"flex-end",justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end"}}>
                <Image source={{uri : "http://195.248.241.97/assets/sidebar/003.png"}} style={{position: 'absolute',height:"100%",width:"100%",alignSelf: "stretch",}} />
                <Text style = {{color:'white',justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end",marginRight:40,marginBottom:20,fontFamily:'Mj_Saudi Arabia',fontSize:17  }}>محصولات جدید</Text>
          </View>
          <View
                style = {{marginBottom:' 1%',width:"100%", height:"11.6%" , alignContent:"flex-end",justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end"}}>
                <Image source={{uri : "http://195.248.241.97/assets/sidebar/004.png"}} style={{position: 'absolute',height:"100%",width:"100%",alignSelf: "stretch",}} />
                <Text style = {{color:'white',justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end" ,marginRight:40,marginBottom:20,fontFamily:'Mj_Saudi Arabia',fontSize:17 }}>دانلود اپ</Text>
          </View>
          <View
                style = {{marginBottom:' 1%',width:"100%", height:"11.6%" , alignContent:"flex-end",justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end"}}>
                <Image source={{uri : "http://195.248.241.97/assets/sidebar/005.png"}} style={{position: 'absolute',height:"100%",width:"100%",alignSelf: "stretch",}} />
                <Text style = {{color:'white',justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end" ,marginRight:40,marginBottom:20,fontFamily:'Mj_Saudi Arabia',fontSize:17}}>درباره بروکس</Text>
          </View>
          <View
                style = {{marginBottom:' 1%',width:"100%", height:"11.6%" , alignContent:"flex-end",justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end"}}>
                <Image source={{uri : "http://195.248.241.97/assets/sidebar/006.png"}} style={{position: 'absolute',height:"100%",width:"100%",alignSelf: "stretch",}} />
                <Text style = {{color:'white',justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end",marginRight:40,marginBottom:20,fontFamily:'Mj_Saudi Arabia',fontSize:17}}>خروج</Text>
          </View>
          <View
                style = {{marginBottom:' 1%',width:"100%", height:"11.6%" , alignContent:"flex-end",justifyContent:"flex-end",textAlign:"right",alignViews:"flex-end"}}>
                <Image source={{uri : "http://195.248.241.97/assets/sidebar/007.png"}} style={{position: 'absolute',height:"100%",width:"100%",alignSelf: "stretch",}} />
          </View>
        </View>
      </Container>
    );
  }
}