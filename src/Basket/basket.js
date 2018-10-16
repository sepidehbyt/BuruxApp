import React, { Component } from 'react';
import { Image, Alert,TouchableOpacity, View, ListView,BackHandler } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Header, Content, Card, Radio, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

var API_URL = require('../config/config.js');

class basket extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      dialogVisible: false,
      productName : "",
      count : 1,
      response : [],
      renderer: []
    };
    global.renderer = [];
  }

      showDialog = () => {
        this.setState({ dialogVisible: true });
      };
    
      handleYes = () => {
        this.setState({ dialogVisible: false });
        this.make_order();
        this.setState({count : 1});
      };
    
      handleNo = () => {
        this.setState({ dialogVisible: false });
        this.setState({count : 1});
      };

      fetch_basket () {
        fetch(API_URL + '/auth/showBasket' 
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

      remove_basket (rowData) {
        fetch(API_URL + '/auth/deletBasketItem?product_id='+this.state.response[rowData].product_id 
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
            alert(JSON.stringify(responseJson));
            global.renderer = [];
            this.setState({response:[],renderer:global.renderer});
            this.fetch_basket();
          }
        })
        .catch((error) => {
            console.error(error);
        });
      }


      make_order () {
        fetch(API_URL + '/auth/addToOrders' 
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
            alert(JSON.stringify(responseJson));
            this.props.navigation.navigate('orders');
          }
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
          this.props.navigation.navigate('MainPage');
          return true;
        });
        this.fetch_basket();
      }

    render() {
    return (
      <Container>

        <Header>
        <Left>
            <Button transparent
            onPress={()=>{this.props.navigation.navigate('MainPage')}}
            >
              <Icon name='arrow-back' />
            </Button>
        </Left>
        <Right>
            <Title>سبد خرید</Title>
        </Right>
        </Header>

        <Content>

            <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>خرید کالا</Dialog.Title>
            <Dialog.Description>
                آیا از سفارشات خود مطمئن هستید؟
            </Dialog.Description>
            <Dialog.Button label="بله" onPress={this.handleYes} />
            <Dialog.Button label="خیر" onPress={this.handleNo} />
            </Dialog.Container>

            <ListView
                ref="ListView"
                
                dataSource ={ new ListView.DataSource({
                  rowHasChanged: (r1, r2) => r1 !== r2
                  }).cloneWithRows(this.getrenderer())
                }
                
                renderRow={(rowData) => (
                  <Card>
                    <CardItem>
                    <Left>
                      <Thumbnail style={{weight:200,height:110}} square source={{uri:this.state.response[rowData].imageURL}} />
                    </Left>
                    <Right>
                        <TouchableOpacity onPress={()=>{this.remove_basket(rowData)}}>
                            <Icon style={{color:'red',fontSize:30}} name="close"></Icon>
                        </TouchableOpacity>
                        <Text>خانواده {this.state.response[rowData].family}</Text>
                        <Text note>سری {this.state.response[rowData].name}</Text>
                        <View style={{flexDirection: 'row',}}>
                          <Text>تعداد : {this.state.response[rowData].count}</Text>
                        </View>
                        <Text>{this.state.response[rowData].color} رنگ</Text>
                        <Text>{this.state.response[rowData].watt} وات</Text>
                    </Right>
                  </CardItem>
              </Card>
                )}
            />

           <Card>
                <Button block
                style={{width:"100%"}}
                onPress={()=>{
                    this.setState({productName: "حبابی 12 وات مهتابی"});
                    this.showDialog();
                    }}>
                  <Icon active name="checkmark" />
                  <Text>تایید سفارشات</Text>
                </Button>
            </Card>
        
        </Content>

      </Container>
    );
  }
}

export default basket;