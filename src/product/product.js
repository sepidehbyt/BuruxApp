import React, { Component } from 'react';
import { Image, Alert,ListView,BackHandler } from 'react-native';
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
      // console.warn(window._username);
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        this.props.navigation.navigate('MainPage');
        return true;
      });
      this.fetch_newProducts();
    }

    makerenderer(){
      if(this.state != null){
      if(this.state.response[0].FimageURL != null){
        // alert('sela');
        return this.state.refresher;
      }else{
        return [];
      }
    }else
      return [];
    }

    getimage(rowData){
      if(this.state.response[rowData] != undefined){
        return this.state.response[rowData].FimageURL;
      }else{
        return "";
      }
    }

    getFname(rowData){
      if(this.state.response[rowData] != undefined){
        return this.state.response[rowData].Fname;
      }else
        return "";
    }

    getNname(rowData){
      if(this.state.response[rowData] != undefined){
        return this.state.response[rowData].name;
      }else
        return "";
    }

    getmyimage(rowData){
      if(this.state.response[rowData] != undefined){
        return this.state.response[rowData].imageURL;
      }else
        return "";
    }

    getDis(rowData){
      if(this.state.response[rowData] != undefined){
        return this.state.response[rowData].description;
      }else
        return "";
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
                    <Thumbnail source={{uri:this.getimage(rowData)+""}} />
                  </Left>
                  <Right>
                      <Text>خانواده {this.getFname(rowData)}</Text>
                      <Text note>سری {this.getNname(rowData)}</Text>
                  </Right>
                </CardItem>
                
                <CardItem cardBody>
                <Left></Left>
                <Body>
                  <Image source={{uri:this.getmyimage(rowData)+""}} style={{width: 100, height: 200}}/>
                </Body>
                <Right></Right>
                </CardItem>
                
                <CardItem>
                    <Text note style={{flex:1}}>
                    {this.getDis(rowData)}
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