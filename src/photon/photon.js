import React, { Component } from 'react';
import { Container, Header, Body, Content, Form, Item, Input, Label, Button, Icon, Right, Left, Title, Card, CardItem, Thumbnail } from 'native-base';
import {Text, Image, FlatList, TouchableHighlight, StyleSheet,BackHandler} from 'react-native';


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

class photon extends Component {
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
          productRenderer:[]
        };
        global.renderer = [];
      }

    fetch_photons() {
        fetch(API_URL + '/auth/getPhotons' 
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
            this.setState({response : responseJson,renderer : global.renderer,description:responseJson[0].description});
            // alert(JSON.stringify(responseJson));
          }
          this.forceUpdate();
        })
        .catch((error) => {
            console.error(error);
        });
      }

      componentWillMount(){
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.navigate('MainPage');
            return true;
          });
        this.fetch_photons();
      }

      dataBack(){
          if(this.state.response != undefined){
                return(this.state.renderer);
          }else{
                return([]);
          }
      }

      getimage(rowData){
          if(this.state.response[rowData] != undefined){
              return this.state.response[rowData].imageURL;
          }
          else
            return "";
      }

      getmonth(rowData){
          if(this.state.response[rowData] != undefined){
              return this.state.response[rowData].month;
          }
          else
            return "";
      }

      getyear(rowData){
          if(this.state.response[rowData] != undefined){
              return this.state.response[rowData].year;
          }
          else
            return "";
      }

    render() {
    
    return (
    <Container>

        <Header style={{borderBottomStartRadius:10,borderBottomEndRadius:10,backgroundColor:'#336799'}}>
        <Left>
            <Button transparent onPress={()=>{this.props.navigation.navigate('MainPage')}}>
            <Icon name='arrow-back' />
            </Button>
        </Left>
        <Right style={{flex:0.5}}>
            <Title style={{fontFamily:'Mj_Saudi Arabia'}}>فوتون</Title>
        </Right>
      </Header>

    
    <Content>
        <FlatList style={{marginTop:"4%"}}
            horizontal
            // extraData={this.state.color}
            // data={this.flatlistdata()}
            data = {this.dataBack()}
            renderItem={({ item: rowData }) => {
            return (
                <Card style={styles.box}>
                <CardItem cardBody style={{width:150,height:212}}>
                <TouchableHighlight style={{height : 212,width:150}} onPress={() => this.setState({description : this.state.response[rowData].description})}>
                <Image source={{uri:this.getimage(rowData)+""}} style={{height: 212,resizeMode:'stretch', width: null, flex: 1}}/>
                </TouchableHighlight>
                </CardItem>
                <CardItem style={{flex:1,backgroundColor:'grey'}}>
                    <TouchableHighlight onPress={() => {this.props.navigation.navigate('pdfPage',{pdfURL : this.state.response[rowData].pdfURL})}}>
                    <Icon name='download' style={{textAlign:'center'}} />
                    </TouchableHighlight>
                    <Text note numberOfLines={1} style={{flex:1,fontSize:15,color:'white',textAlign:'center'}}>{this.getmonth(rowData)} {this.getyear(rowData)}</Text>
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
                <Text>فوتون</Text>
                {/* <Text note>ماهنامه داخلی شرکت بروکس</Text> */}
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

export default photon;