import React, { Component } from 'react';
import { Container,Separator, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Button , Text, Title, Icon } from 'native-base';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
  } from 'react-native-popup-dialog';

import Modal from 'react-native-modalbox';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ListView,
  TextInput
} from 'react-native';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});


var API_URL = require('../config/config.js');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dialogContentView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    navigationBar: {
      borderBottomColor: '#b5b5b5',
      borderBottomWidth: 0.5,
      backgroundColor: '#ffffff',
    },
    navigationTitle: {
      padding: 10,
    },
    navigationButton: {
      padding: 10,
    },
    navigationLeftButton: {
      paddingLeft: 20,
      paddingRight: 40,
    },
    navigator: {
      flex: 1,
      // backgroundColor: '#000000',
    },
    wrapper: {
    paddingTop: 50,
    flex: 1
  },
  modal3: {
    height: '70%',
    width: '85%'
  },


  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 15,
    textAlign: 'center'
  }

  });

  
  const scaleAnimation = new ScaleAnimation();

class news extends Component {
    constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
      refresher:[],
      selected :0
    };

    global.renderer = [];
  }
  

  fetch_newProducts(){
    fetch(API_URL + '/auth/getNews' 
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

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  makerenderer(){
    if(this.state != null){
      return this.state.refresher;
    }else{
      return [];
    }
  }

  modaltext(){
    if(this.state.response != undefined){
      return(this.state.response[this.state.selected].description);
    }else{
      return("");
    }
  }
  fetchimage(){
    if(this.state.response != undefined){
      // alert(JSON.stringify(this.state.response[this.state.selected].dimageURL));
      return(this.state.response[this.state.selected].dimageURL);
    }else{
      return("");
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
            <Title>اخبار</Title>
        </Right>
        </Header>

        
        <Modal swipeToClose={false} style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
          <Image source={{uri:this.fetchimage()}} style={{marginTop:10,height:100,width:100,marginLeft:-50,left:'50%'}}></Image>
          <ScrollView style={{marginHorizontal:8,marginVertical:8}}>
          <Text style={styles.text}>{this.modaltext()}</Text>
          </ScrollView>
         </Modal>

        <Content>
        <List>
          <ListView
              dataSource ={ new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
                }).cloneWithRows(this.makerenderer())
              }
              
              renderRow={(rowData) => (
                <View>
                <ListItem avatar>
                  <Left>
                  <Text note>{this.state.response[rowData].time}</Text>
                  </Left>
                  <Body  style={{height:80}}>
                  <TouchableOpacity
                  onPress={()=>{this.refs.modal3.open(); this.setState({selected:rowData})}}
                  >
                    <Text>{this.state.response[rowData].title}</Text>
                    <Text note numberOfLines={2}>{this.state.response[rowData].description}</Text>
              </TouchableOpacity>
                  
                  </Body>
                  <Right>
                  <Thumbnail source={{uri:this.state.response[rowData].timageURL}} />
                  </Right>
                
                </ListItem>
                <Separator style={{height:1,marginTop:-0.5}}>
                </Separator>
                </View>
               )}
              />
       </List>
          
        </Content>
      </Container>
    );
  }
}

export default news;