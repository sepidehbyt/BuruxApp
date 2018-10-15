import React, { Component } from 'react';
import { Container, Header, Content, Form, Button, Item, Input } from 'native-base';
import {Text, Image} from 'react-native';

var API_URL = require('../config/config.js');

class cataloguepage extends Component {
constructor(props) {
      super(props);
      this.state = {
        response : [],
        pageNumber : 1
      };
    }

    fetch_cataloguepages() {
      fetch(API_URL + '/auth/getCataloguePage?pagenumber=' + this.state.pageNumber + '&catalogue_id=' + this.props.navigation.getParam('catalogue_id')
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
          //alert(JSON.stringify(responseJson));
          this.setState({response : responseJson})
        }
        this.forceUpdate();
      })
      .catch((error) => {
          console.error(error);
      });
    }

  componentWillMount(){
    this.fetch_cataloguepages();
    if(this.state.response != undefined) {
      alert(JSON.stringify(this.state.response));        
    }

  }
  
  render() {
    return (
      <Container>
        
        <Image source={{uri:"https://image.ibb.co/e1pWu9/back.jpg"}} style={{position:"absolute", width:"100%", height:"100%"}} />
        
        <Content style={{flex:1}}>
            <Button style={{position:'absolute',width:'20%',alignSelf:'center',right:'1%',top:20}} full rounded
             onPress={()=> {if(this.state.page<this.state.maxpage){this.setState({page : parseInt(this.state.page) + 1})}}}>
            <Text style={{color:"white"}}>بعدی</Text>
            </Button>

            <Item style={{width: '10%',height:21,left:"40%",position:'absolute',top:35,backgroundColor:'white'}}>
              <Input numberOfLines={1}
                style={{color:"black"}}
                onChangeText={(text) => this.setState({page: text})}
                value={this.state.page+""}
              />
            </Item>

            <Text style={{width: '10%',position:'absolute',alignSelf:'center',left:"50%",top:35,backgroundColor:'white',fontSize:17}}>/ {this.state.maxpage}</Text>
            
            <Button style={{position:'absolute',alignSelf:'center',width:'20%',left:'1%',top:20}} full rounded
            onPress={()=> {if(this.state.page>1){this.setState({page : parseInt(this.state.page) - 1})}}}>
            <Text style={{color:"white"}}>قبلی</Text>
            </Button>
        </Content>
      
      </Container>
    );
  }
}

export default cataloguepage;