import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
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
  this.fetch_productList();
}

  fetch_productList () {
    fetch(API_URL + '/auth/getProductFamilies' , {
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
          dataArray : global.dataArray_lamp
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

    if(this.state.bulb=="ios-bulb" && content.content +1 <= global.products_lamp.length){
      myproducts = global.products_light[content.content];
      myproductsid = global.products_lightid[content.content];
      myproductIMG = global.dataArray_lightIMG[content.content];
    }else if(this.state.bulb=="ios-bulb-outline" && content.content +1 <= global.products_light.length){
      myproducts = global.products_lamp[content.content];
      myproductsid = global.products_lampid[content.content];
      myproductIMG = global.dataArray_lampIMG[content.content];
      }

      // alert(myproducts + JSON.stringify(global.products_lamp) + this.state.bulb);

    return (

    <ListView
        ref="ListView"
        style={styles.container}
        
        dataSource ={ new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows(myproducts)
        }
        
        renderRow={(rowData) => (
          <View>

          <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries",{name : rowData,id : myproductsid,family : content.title, imageURL : myproductIMG})}}>
            <Text
            style={{ backgroundColor: "#e3f1f1", padding: 10 }}
            >
            {
              rowData
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
    <Container>
        <Header hasSegment>
        <Left>
          <Button transparent onPress={()=>{this.props.navigation.openDrawer();}}>
            <Icon name="menu"/>
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
                }}><Icon name={this.state.bulb}/></Button>
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
        ref="ListView"
        style={styles.container}
        //dataSource={ this.state.dataSource }
        dataSource ={this.state.dataSource}
        
        renderRow={(rowData) => (
            <View>


        <Accordion
            dataArray={this.state.dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
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
                <Image source={{uri: 'https://image.ibb.co/ecPbe9/Burux_Ads_8.jpg',
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT}}/>
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
                <Text style={ styles.sectionSpeakerText }>
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

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
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
    paddingTop: 100
  },
  avatar: {
    opacity:0,
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
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