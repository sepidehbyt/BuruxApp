import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
  BackHandler,
} from 'react-native';

import {Icon, Button, Container, Header, Left, Body, Segment,Badge, Right, Accordion, View, Text, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

var API_URL = require('../config/config.js');

class productLists extends Component {
  constructor(props) {
    super(props);
    this.state =  {
        height:0,
        bulb:"ios-bulb-outline",
        type: "چراغ های",
        dataArray: global.dataArray_light,
        dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows([
        'Simplicity Matters'
        ]),
        dataSourceProduct: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows([
          'Simplicity Matters'
        ])
    };
    global.products_light = [];
    global.products_lamp = [];
    global.products_lampid = [];
    global.products_lightid = [];
    global.dataArray_lamp = [];
    global.dataArray_light = [];
    global.dataArray_lampIMG = [];
    global.dataArray_lightIMG = [];
  }

componentWillMount() {
  // alert(window.access_token);
        
  this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp();
    return true;
  });
  this.fetch_productList();
}

  fetch_productList () {
      fetch(API_URL + '/auth/getProductFamilies' , {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUzOGUxOThjNDZjZDhlNzcwMTU1NTZhMTZkY2NkNGY4ZjY2MGNhZTUwNTM4ZWU2YjkyY2VhM2MyMzc5YzJmZDdjYzAwZTY3NzZiMjk4ZTZjIn0.eyJhdWQiOiIzIiwianRpIjoiZTM4ZTE5OGM0NmNkOGU3NzAxNTU1NmExNmRjY2Q0ZjhmNjYwY2FlNTA1MzhlZTZiOTJjZWEzYzIzNzljMmZkN2NjMDBlNjc3NmIyOThlNmMiLCJpYXQiOjE1Mzk3MTM5MTUsIm5iZiI6MTUzOTcxMzkxNSwiZXhwIjoxNTcxMjQ5OTE1LCJzdWIiOiIyNCIsInNjb3BlcyI6W119.vuYyHbQWZlRE7yUsRiv-VuZY5GDEiqqeJSqe_kV1eIvzQzM95qS3sNItnB4ZNlkLajCkk9H342esBPMyXGmXdsVttyqZ7WIWPdON46861V2KO2Hokp5H7R_MAns4sY-B3vGvlNzIVCwQpoU4zjUf-CZkygCwTP0C1GUZOrNT6BP6MR4G55og-7RwKYQoW13CnKU2cOfJvWpQxvWH-Yr3DqcH3v7oFI1Ap-Bi1lF3JortscR0yz4jXvced4nuHKYSuJcxhmZbfHOEG9UiR5rgL-77_bHk4_dN-k2NCCEe-6kULQumdGIzwrdAfLNHK2rUMXkhQ3PsxE5W-KhalbPQSxMpbzMRNqxT3W0t07znQW3EIyW3YvLjDnTSB7tLsPOZ92KgsxzE0xS_so73dCoAoQLpEE7vIWo-0DcNGw_lX1bxPCRfaffa5RCe9dRk6KrOW_Fl8zlk15DaY2Ysxd41I9Vv_ctwDqKcyLJXO1aiEWJpZwaqcBaJyIaanTq3BvnPMGJqBk4zYAULZCGaBlGIyWnIIkUx6x81vmFK6Binkima6MhxcFT0lUa1WNVCZPaUkQziP_zfUI6rPXMsVL4QLr07cbDf9Esar7i_gKDPQNzijq6L11mr_YP-dJIzaZWEI3aXgl5h43ayGqVz3TOrM2Sem_RHqJZYIh6jvDiOdsI',
        },
      }).then((response) => response.json())
      .then((responseJson) => {
        variable = responseJson + '';
        if(variable != 'undefined'){
          // alert(JSON.stringify(responseJson));
          var countType = Object.keys(responseJson.message).length;
          for(let i = 0; i < countType; i++) {
            var countTitle = Object.keys(responseJson.message[i].families).length;
            for(let j = 0; j <countTitle; j++) {
              if(responseJson.message[i].type == 'چراغ') {
                global.dataArray_light.push({
                  title: responseJson.message[i].families[j].title,
                  content: responseJson.message[i].families[j].content
                });
                global.products_light[j] = responseJson.message[i].families[j].products;
                global.products_lightid[j] = responseJson.message[i].families[j].id; 
                global.dataArray_lightIMG[j] = responseJson.message[i].families[j].imageURL;
              }
              else {
                global.dataArray_lamp.push({
                  title: responseJson.message[i].families[j].title,
                  content: responseJson.message[i].families[j].content
                });
                
                global.products_lamp[j] = responseJson.message[i].families[j].products;
                global.products_lampid[j] = responseJson.message[i].families[j].id;
                global.dataArray_lampIMG[j] = responseJson.message[i].families[j].imageURL;
              }
            }
          }
          this.setState({
            dataArray : global.dataArray_lamp,dataSource: new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
              }).cloneWithRows([
              'sela'
              ])
          });     
        }
      })
      .catch((error) => {
          console.error(error);
      });
    
  }



  _renderContent = (content) => {


    myproducts = [];
    myproductsid = 0;
    myproductIMG = 0;
    myproductrender = [];

    if(this.state.bulb=="ios-bulb" && global.products_light[content.content]){
      myproducts = global.products_light[content.content];
      myproductsid = global.products_lightid[content.content];
      myproductIMG = global.dataArray_lightIMG[content.content];
    }else if(this.state.bulb=="ios-bulb-outline"){
      myproducts = global.products_lamp[content.content];
      myproductsid = global.products_lampid[content.content];
      myproductIMG = global.dataArray_lampIMG[content.content];
      }
      // alert(myproductsid);
      // alert(myproducts + JSON.stringify(global.products_lamp) + this.state.bulb);

      for(let i = 0; i < Object.keys(myproducts).length; i++){
        myproductrender[i] = i;
      }
      


    return (
    <ListView
        ref="ListView"
        style={styles.container}

        dataSource ={ new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows(myproductrender)
        }
        
        renderRow={(rowData) => (
          <View>

          <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries",{name : myproducts[rowData],id : myproductsid[rowData],family : content.title, imageURL : myproductIMG})}}>
            <Text
            style={{alignSelf:'flex-end',direction:'rtl',textAlign:'right', padding: 10,paddingLeft:20 }}
            >
            {
              myproducts[rowData]
            }
            </Text>
          </TouchableHighlight>
        
          </View>
         )}
    />
    );
  }
  
  render() {
    const { onScroll = () => {} } = this.props;
    

    return (
      <Container style={{backgroundColor:'#00ccff'}}>
          <Header hasSegment style={{borderBottomStartRadius:10,borderBottomEndRadius:10,backgroundColor:'#336799'}}>
          <Left>
            <Button transparent onPress={()=>{this.props.navigation.openDrawer();}}>
            <Image source={{uri : "https://image.ibb.co/iZdQVf/001.png"}} style={{width:30,height:30}} />
            </Button>
          </Left>
          
          <Body>
              <Button rounded first style={{width:'30%',justifyContent:'center',borderColor:'white',borderWidth:2}} onPress={()=>{
                  if(this.state.bulb=="ios-bulb"){
                      this.setState({
                          bulb:"ios-bulb-outline",
                          type: "لامپ های",
                          dataArray:dataArray_lamp,
                          dataSource : new ListView.DataSource({
                              rowHasChanged: (r1, r2) => r1 !== r2
                            }).cloneWithRows([
                              'eli'
                            ]),
                          dataSourceProduct :global.products_lamp
                      });
                  }else if(this.state.bulb=="ios-bulb-outline"){
                      this.setState({
                          bulb:"ios-bulb",
                          type: "چراغ های",
                          dataArray:dataArray_light,
                          dataSource : new ListView.DataSource({
                              rowHasChanged: (r1, r2) => r1 !== r2
                            }).cloneWithRows([
                              'sela'
                            ]),
                          dataSourceProduct :global.products_light
                      });
                  }
                  }}><Icon name={this.state.bulb} style={{color:'white'}}/></Button>
          </Body>
          <Right>
          <Button bordered badge vertical style={{marginTop:0}} //-8
          onPress={()=>{this.props.navigation.navigate('basket')}}>
                {/* <Badge success style={{top:8}}><Text>2</Text></Badge> */}
                <Icon name="ios-basket" style={{color:"white"}} />
              </Button>
          </Right>
        </Header>
  
  
        <ListView
          removeClippedSubviews={false}
          ref="ListView"
          style={styles.container}
          //dataSource={ this.state.dataSource }
          dataSource ={this.state.dataSource}
          
          renderRow={(rowData) => (
              <View>
                <Accordion
                    dataArray={this.state.dataArray}
                    headerStyle={{ backgroundColor: "#b7daf8",fontFamily:'Mj_Saudi Arabia',direction:'rtl' }}
                    renderContent={this._renderContent}
                />
            {/* <TouchableHighlight
            onPress={()=> {this.setState({height:60});}}>
            <View key={rowData} style={ styles.row }>
              <Text>
                { rowData }
              </Text>
            </View>
            </TouchableHighlight> */}
  
            </View>
           )}
  
          renderScrollComponent={props => (
            <ParallaxScrollView
              onScroll={onScroll}
              backgroundColor="lightblue"
              headerBackgroundColor="#333"
              stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
              parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
              backgroundSpeed={10}
  
              renderBackground={() => (
                <View key="background">
                  <Image source={{uri: 'http://195.248.241.97/assets/ProductList/003.png',
                                  width: window.width,
                                  height: PARALLAX_HEADER_HEIGHT,
                                  resizeMode:'stretch'}}/>
                  <View style={{position: 'absolute',
                                top: 0,
                                width: window.width,
                                backgroundColor: 'rgba(0,0,0,.4)',
                                height: PARALLAX_HEADER_HEIGHT}}/>
                </View>
              )}
              

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Image style={ styles.avatar } source={{
                  uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE
                }}/>
                <Text style={ styles.sectionSpeakerText  }>
                 فروش محصولات شرکت بروکس
                </Text>
                <Text style={ styles.sectionTitleText }>
                  معرفی {this.state.type} شرکت بروکس
                </Text>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={{
                height: STICKY_HEADER_HEIGHT,
                width: 300,
                justifyContent: 'flex-end'}}>
            <Text style={{color: 'white',
                fontSize: 20,
                margin: 10}}>محصولات شرکت بروکس</Text>
              </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={{
                position: 'absolute',
                bottom: 10,
                right: 10}}>
                <Icon style={styles.fixedSectionText} name="ios-arrow-dropup"
                      onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                </Icon>
              </View>
            )}/>
        )}
      />
      </Container>
    );
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 220;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 500;
const STICKY_HEADER_HEIGHT = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    
  },
  fixedSection: {
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 30
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 2
  },
  avatar: {
    opacity:0,
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    fontFamily:'Mj_Saudi Arabia',
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    fontFamily:'Mj_Saudi Arabia',
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

export default withNavigation(productLists);