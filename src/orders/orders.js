import React, { Component } from 'react';
import { Image, Alert,TouchableOpacity, View, ListView } from 'react-native';
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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUzYTBiYjU0ZWVmMGFkNTBiYWUwY2U2Mjc1MjA5YTM1ZjM4MDkzMGViOTlkMTZhOWQxMDFkMjUxY2MwMTA3MzI4ZDg4ZjE0NmM3YzQyYTliIn0.eyJhdWQiOiIxIiwianRpIjoiZTNhMGJiNTRlZWYwYWQ1MGJhZTBjZTYyNzUyMDlhMzVmMzgwOTMwZWI5OWQxNmE5ZDEwMWQyNTFjYzAxMDczMjhkODhmMTQ2YzdjNDJhOWIiLCJpYXQiOjE1MzkyNDA0NDQsIm5iZiI6MTUzOTI0MDQ0NCwiZXhwIjoxNTcwNzc2NDQ0LCJzdWIiOiIyNCIsInNjb3BlcyI6W119.VT1TbNRKxkoi5I5wyAOTgurB-KOxBPUlbfA4GdLQmXk2cHQqZiA1ZNaKSPeGsXRKVuqJbHnAE4zU0eMj67_89Rdf69mT7reDdhZHHjzaP7f2SPl6oKdLwr2eZLp-bdBaHz7fIS6X2XTR8a8lJIvqbfOqqdL3VgsIG1aN-xGvLjZKfvPWQe9BsPcniDM16xFTqgmcHoQb204lj9G9HOYrbkgJT76WL08h06tuang93uJe8zUoG6k9jsGccNbgZhM9khcl8tT7eE9rf7Bx9O7msPOoiA5KvE0ezlXdGHPt_Osau9RMCxoE0q-r0JadnAKFJQpdOhHMmklG9U-DF3eHjSo79KTu4AbTxtXUqFBCSBSiM2E8pXS6-qb5DZx97MK3Y-t7fzOuocbh-ECVqc90krEB8m4DKmWqb8pQmJmP21rUaycvAK6s3Ed1tV7rygNCGpxRFnccMcva5XweUy88QUCP3fq3683EvZ2uLYawvng9AAfNsc-QNXq4WonjpIJSV4bmyu5jU4StLiQMePhUi69eBK81x0BYgGn1t4c30CWKyfEEkpVIb-oxinsAhOTqmu7xZtUB5iEbkOzY-OdrPTMPHOTPEtlUo1pnMrZGJjJv-pxX6xID4L7z5N2IoPjMX5yHU2RZRxbVi5xeuxt70iUVXqwuA8dDrXiHp0GJbF8',
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
      <Container>

        <Header>
        <Left>
        <Button transparent onPress={()=>{this.props.navigation.openDrawer();}}>
              <Icon name='menu' />
            </Button>
        </Left>
        <Right>
            <Title>لیست سفارشات</Title>
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