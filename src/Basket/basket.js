import React, { Component } from 'react';
import { Image, Alert,TouchableOpacity, View, ListView } from 'react-native';
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

      remove_basket (rowData) {
        fetch(API_URL + '/auth/deletBasketItem?product_id='+this.state.response[rowData].product_id 
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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUzYTBiYjU0ZWVmMGFkNTBiYWUwY2U2Mjc1MjA5YTM1ZjM4MDkzMGViOTlkMTZhOWQxMDFkMjUxY2MwMTA3MzI4ZDg4ZjE0NmM3YzQyYTliIn0.eyJhdWQiOiIxIiwianRpIjoiZTNhMGJiNTRlZWYwYWQ1MGJhZTBjZTYyNzUyMDlhMzVmMzgwOTMwZWI5OWQxNmE5ZDEwMWQyNTFjYzAxMDczMjhkODhmMTQ2YzdjNDJhOWIiLCJpYXQiOjE1MzkyNDA0NDQsIm5iZiI6MTUzOTI0MDQ0NCwiZXhwIjoxNTcwNzc2NDQ0LCJzdWIiOiIyNCIsInNjb3BlcyI6W119.VT1TbNRKxkoi5I5wyAOTgurB-KOxBPUlbfA4GdLQmXk2cHQqZiA1ZNaKSPeGsXRKVuqJbHnAE4zU0eMj67_89Rdf69mT7reDdhZHHjzaP7f2SPl6oKdLwr2eZLp-bdBaHz7fIS6X2XTR8a8lJIvqbfOqqdL3VgsIG1aN-xGvLjZKfvPWQe9BsPcniDM16xFTqgmcHoQb204lj9G9HOYrbkgJT76WL08h06tuang93uJe8zUoG6k9jsGccNbgZhM9khcl8tT7eE9rf7Bx9O7msPOoiA5KvE0ezlXdGHPt_Osau9RMCxoE0q-r0JadnAKFJQpdOhHMmklG9U-DF3eHjSo79KTu4AbTxtXUqFBCSBSiM2E8pXS6-qb5DZx97MK3Y-t7fzOuocbh-ECVqc90krEB8m4DKmWqb8pQmJmP21rUaycvAK6s3Ed1tV7rygNCGpxRFnccMcva5XweUy88QUCP3fq3683EvZ2uLYawvng9AAfNsc-QNXq4WonjpIJSV4bmyu5jU4StLiQMePhUi69eBK81x0BYgGn1t4c30CWKyfEEkpVIb-oxinsAhOTqmu7xZtUB5iEbkOzY-OdrPTMPHOTPEtlUo1pnMrZGJjJv-pxX6xID4L7z5N2IoPjMX5yHU2RZRxbVi5xeuxt70iUVXqwuA8dDrXiHp0GJbF8',
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