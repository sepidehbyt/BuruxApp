import React, { Component } from 'react';
import { Container, Header, Content, Form, Button, Item, Input } from 'native-base';
import {Text, Image, BackHandler} from 'react-native';

var API_URL = require('../config/config.js');

class cataloguepage extends Component {
constructor(props) {
      super(props);
      this.state = {
        response : [],
        pageNumber : 1,
        page : 1,
        maxpage : 1,
        lastnum : 1,
        renderer : []
      };
      global.renderer = [];
    }

    fetch_cataloguepages() {
      fetch(API_URL + '/auth/getCataloguePage?pagenumber=' + this.state.pageNumber + '&catalogue_id=' + this.props.navigation.getParam('catalogue_id')
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
          // alert(JSON.stringify(responseJson[0].pagenumber));
          var countType = Object.keys(responseJson).length;
            for(let i = 0 ; i < countType ; i++){
              global.renderer[i] = i;
            }
            this.setState({response : responseJson,maxpage:this.props.navigation.getParam('pagenumber')});

        }
        this.forceUpdate();
      })
      .catch((error) => {
          console.error(error);
      });
    }

    getimage(){
      if(this.state.response[0] != undefined && this.state.page === this.state.lastnum && this.state.response[this.state.page-1]!= undefined)
        {
          // alert(this.state.page);
        return (this.state.response[this.state.page-1].imageURL);
        }
        else
          return '';
    }

  componentWillMount(){
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.navigate('catalogue');
      return true;
    });
    this.fetch_cataloguepages();

  }
  
  render() {
    return (
      <Container>
        
        <Image source={{uri:this.getimage()}} style={{position:"absolute", width:"100%", height:"100%"}} />
        
            
            <Button style={{position:'absolute',width:'20%',alignSelf:'center',right:'1%',top:100}} full rounded
             onPress={()=> this.props.navigation.navigate('catalogue')}>
            <Text style={{color:"white"}}>بازگشت</Text>
            </Button>


            <Button style={{position:'absolute',width:'20%',alignSelf:'center',right:'1%',top:20}} full rounded
             onPress={()=> {if(this.state.lastnum<this.state.maxpage){this.setState({lastnum : parseInt(this.state.lastnum) + 1,page: parseInt(this.state.lastnum) + 1})}}}>
            <Text style={{color:"white"}}>بعدی</Text>
            </Button>

            <Item style={{width: '10%',height:21,left:"40%",position:'absolute',top:35,backgroundColor:'white'}}>
              <Input numberOfLines={1}
                style={{color:"black",top:2}}
                onSubmitEditing={()=>{
                  if(parseInt(this.state.lastnum) < (parseInt(this.state.maxpage) + 1) & parseInt(this.state.lastnum) > 0){
                    if(parseInt(this.state.lastnum) > 0){
                      this.setState({page:this.state.lastnum});
                    }else{
                      this.setState({lastnum:this.state.page});
                    }
                  }else{
                    this.setState({lastnum:this.state.page});
                  }
                }}
                onChangeText={(text) => {
                    this.setState({lastnum : text});
                }}
                value={this.state.lastnum+""}
              />
            </Item>

            <Text style={{width: '10%',height:21,position:'absolute',alignSelf:'center',left:"50%",top:35,backgroundColor:'white',fontSize:17}}>/ {this.state.maxpage}</Text>
            
            <Button style={{position:'absolute',alignSelf:'center',width:'20%',left:'1%',top:20}} full rounded
            onPress={()=> {if(this.state.lastnum>1){this.setState({lastnum : parseInt(this.state.lastnum) - 1,page: parseInt(this.state.lastnum) - 1})}}}>
            <Text style={{color:"white"}}>قبلی</Text>
            </Button>
      
      </Container>
    );
  }
}

export default cataloguepage;