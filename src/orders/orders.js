import React, { Component } from 'react';
import { Image, Alert,TouchableOpacity,BackHandler, View, ListView } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Header, Content, Card, Radio, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

var API_URL = require('../config/config.js');

class orders extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dialogVisible: false,
      productName : "",
      count : 1,
      selected : 0,
      response : [],
      renderer: [],
      products:[],
      productRenderer:[]
    };
    global.renderer = [];
    global.text = [];
    global.myproducts = [];
    global.productRenderer= [];
  }

    fetch_orders() {
      fetch(API_URL + '/auth/showOrders' 
      , {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+window.access_token,
        },
      }).then((response) => response.json())
      .then((responseJson) => {
        variable = responseJson + '';
        if(variable != 'undefined'){
          var countType = Object.keys(responseJson).length;
          for(let i = 0 ; i < countType ; i++){
            global.renderer[i] = i;
          }
          this.setState({response : responseJson,renderer : global.renderer});
        }
        this.forceUpdate();
      })
      .catch((error) => {
          console.error(error);
      });
    }

      getrenderer(){
        if(this.state.response != undefined){
          return this.state.renderer;
        }else{
          return [];
        }
      }

      componentWillMount(){
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
          BackHandler.exitApp();
          return true;
        });
        this.fetch_orders();
      }

      getproductrenderer(rowData){
        if(this.state.response[rowData] != undefined) {
          var countType = Object.keys(this.state.response[rowData].products).length;
          for (let i = 0 ; i < countType ; i ++) {
            productRenderer[i] = i;
          }
            // console.warn(countType + ' ' + rowData);
            return(productRenderer);
        }else{
          return [];
        }
      }
      

    render() {
    return (
      <Container style={{backgroundColor:'#00ccff'}}>
      <Header style={{borderBottomStartRadius:10,borderBottomEndRadius:10,backgroundColor:'#336799'}}>
        <Left>
            <Button transparent onPress={()=>{this.props.navigation.openDrawer();}}>
            <Image source={{uri : "https://image.ibb.co/iZdQVf/001.png"}} style={{left:10,width:30,height:30}} />
            </Button>
        </Left>
        <Right style={{flex:0.5}}>
            <Title style={{fontFamily:'Mj_Saudi Arabia'}}>لیست سفارشات</Title>
        </Right>
        </Header>

        <Content>

            <ListView
                ref="ListView"
                
                dataSource ={ new ListView.DataSource({
                  rowHasChanged: (r1, r2) => r1 !== r2
                  }).cloneWithRows(this.getrenderer())
                }
                
                renderRow={(rowData) => (
                  <Card>
                    <CardItem>
                    <Left style={{flex:0.2,marginTop:-50}}>
                      <Thumbnail style={{width:25,height:25}} source={{uri:this.state.response[rowData].imageURL+""}} />
                      <Text note>{this.state.response[rowData].time}</Text>
                    </Left>
                    <Right style={{flex:0.8,marginTop: 30,}}>
                    <View style={{flexDirection:'row'}}>
                    <Text note>  {this.state.response[rowData].status}</Text>
                        <Text> وضعیت سفارش شما:</Text>
                    </View>
                        <Text>یادداشت های سفارش شما:</Text>
                        <Text note>  {this.state.response[rowData].notes}</Text>
                        {/* <View style={{flexDirection: 'row',}}>
                          <Text>تعداد : {this.state.response[rowData].count}</Text>
                        </View> */}
                        {/* <Text>{this.state.response[rowData].color} رنگ</Text>
                        <Text>{this.state.response[rowData].watt} وات</Text> */}
                    </Right>
                  </CardItem>

                  <ListView style={{marginBottom: 10,}}
                    dataSource ={ new ListView.DataSource({
                      rowHasChanged: (r1, r2) => r1 !== r2
                      }).cloneWithRows(this.getproductrenderer(rowData))
                    }
                    
                    renderRow={(rowData2) => (
                        <CardItem style={{marginVertical:-7}}>
                        <Body style={{flex:1}}>
                            <Text note style={{direction: 'rtl',alignSelf:'flex-end', fontSize:12}}>{this.state.response[rowData].products[rowData2].count} عدد {this.state.response[rowData].products[rowData2].name} {this.state.response[rowData].products[rowData2].family} {this.state.response[rowData].products[rowData2].watt} وات {this.state.response[rowData].products[rowData2].color}</Text>
                        </Body>
                      </CardItem>
                    )}
                />
              </Card>
                )}
            />
   
        </Content>

      </Container>
    );
  }
}

export default orders;