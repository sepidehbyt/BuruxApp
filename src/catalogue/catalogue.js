import React, { Component } from 'react';
import { Container, Header, Body, Content, Form, Item, Input, Label, Button, Icon, Right, Left, Title, Card, CardItem, Thumbnail } from 'native-base';
import {Text, Image, FlatList, TouchableHighlight, StyleSheet} from 'react-native';


var API_URL = require('../config/config.js');


    const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#3f51b5',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'purple',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    box:{
        borderWidth: 2,
        borderColor: 'black',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        elevation: 1,marginLeft:10,width:150,height:262
    }
    })

class catalogue extends Component {
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
          description:"",
          cataloguename:"",
          productRenderer:[]
        };
        global.renderer = [];
      }

    fetch_catalogues() {
        fetch(API_URL + '/auth/getCatalogue' 
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
            this.setState({response : responseJson,renderer : global.renderer,description:responseJson[0].description,cataloguename:responseJson[0].name});
            //alert(responseJson[0].name);
          }
          this.forceUpdate();
        })
        .catch((error) => {
            console.error(error);
        });
      }

      componentWillMount(){
        this.fetch_catalogues();
      }

      dataBack(){
          if(this.state.response != undefined){
                return(this.state.renderer);
          }else{
                return([]);
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
        <Icon name='arrow-back'/>
        </Button>
    </Left>
    <Right>
        <Title>کاتالوگ</Title>
    </Right>
    </Header>
    
    <Content>
        <FlatList style={{marginTop:"4%"}}
            horizontal
            data = {this.dataBack()}
            renderItem={({ item: rowData }) => {
            return (
                <Card style={styles.box}>
                <CardItem cardBody style={{width:150,height:212}}>
                <TouchableHighlight style={{height : 212,width:150}} onPress={() => this.setState({description : this.state.response[rowData].description, cataloguename : this.state.response[rowData].name})}>
                <Image source={{uri:this.state.response[rowData].imageURL+""}} style={{height: 212,resizeMode:'stretch', width: null, flex: 1}}/>
                </TouchableHighlight>
                </CardItem>
                <CardItem style={{flex:1,backgroundColor:'grey'}}>
                    <TouchableHighlight onPress={() => {this.props.navigation.navigate('cataloguepage',{catalogue_id : this.state.response[rowData].catalogue_id})}}>
                    <Icon name='download' style={{textAlign:'center'}} />
                    </TouchableHighlight>
                    <Text note numberOfLines={1} style={{flex:1,fontSize:15,color:'white',textAlign:'center'}}>{this.state.response[rowData].month} {this.state.response[rowData].year}</Text>
                </CardItem>
            </Card>
            );
            }}
            keyExtractor={(item, index) => index}
        />

        <Card style={{flex: 0, marginTop:"4%"}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:"https://image.ibb.co/kCf1SU/F.jpg"}} />
             </Left>
             <Body></Body>
                <Right>
                <Text>
                {this.state.cataloguename}
                </Text>
                </Right>
            </CardItem>
            <CardItem>
              <Right>
                <Text>
                {this.state.description}
                </Text>
              </Right>
            </CardItem>
          </Card>

    </Content>

        </Container>
    )}
}

export default catalogue;