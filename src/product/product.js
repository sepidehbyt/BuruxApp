import React, { Component } from 'react';
import { Image, Alert,ListView } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

var API_URL = require('../config/config.js');

class product extends Component {
  constructor(props) {
    super(props);
    state = {
      renderer : [],
      refresher : [],
      dialogVisible: false,
      productName : "",
      count : 1,
      response : []
    };

    global.renderer = [];
  }
      showDialog = () => {
        this.setState({ dialogVisible: true });
      };
    
      handleYes = () => {
        this.setState({ dialogVisible: false });
        //TODO
        this.setState({count : 1});
      };
    
      handleNo = () => {
        this.setState({ dialogVisible: false });
        this.setState({count : 1});
      };


    fetch_newProducts(){
      fetch(API_URL + '/auth/getNewProduct' 
      //+  this.props.navigation.getParam('id')
      , {
        method: 'GET',
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
          this.setState({response : responseJson,refresher : global.renderer});
        }
        this.forceUpdate();
      })
      .catch((error) => {
          console.error(error);
      });
    }


    componentWillMount() {
      // alert(this.props.navigation.getParam('imageURL'));
      this.fetch_newProducts();
    }

    makerenderer(){
      if(this.state != null){
        return this.state.refresher;
      }else{
        return [];
      }
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
            <Title>محصولات جدید</Title>
        </Right>
        </Header>

        <Content>

         
          <ListView
              dataSource ={ new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
                }).cloneWithRows(this.makerenderer())
              }
              
              renderRow={(rowData) => (
                <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri:this.state.response[rowData].FimageURL+""}} />
                  </Left>
                  <Right>
                      <Text>خانواده {this.state.response[rowData].Fname}</Text>
                      <Text note>سری {this.state.response[rowData].name}</Text>
                  </Right>
                </CardItem>
                
                <CardItem cardBody>
                <Left></Left>
                <Body>
                  <Image source={{uri:this.state.response[rowData].imageURL+""}} style={{width: 100, height: 200}}/>
                </Body>
                <Right></Right>
                </CardItem>
                
                <CardItem>
                    <Text note style={{flex:1}}>
                    {this.state.response[rowData].description}
                    </Text>
                </CardItem>
    
                <CardItem>
                  <Body>
                    <Button block style={{flex:1}}
                    onPress={()=>{
                      this.props.navigation.navigate("ProductSeries",{name : this.state.response[rowData].name,id : this.state.response[rowData].productdetail_id,family : this.state.response[rowData].Fname, imageURL : this.state.response[rowData].FimageURL})}}>
                      <Icon active name="search" />
                      <Text>اطلاعات بیشتر</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
               )}
              />
        </Content>
      </Container>
    );
  }
}

export default product;