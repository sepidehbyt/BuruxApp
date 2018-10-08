import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
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
    global.dataArray_lamp = [];
    global.dataArray_light = [];
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
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU3Yzc4YTM5Y2Q0NTRlNDIyY2ZjNGUyODM2YWVlZDkxZjVkY2M1Njk1ZGQ3MTJiOGExZTI4MjM4NmI5YWJlZmY2OTBmY2IzNWIzZWE1M2MxIn0.eyJhdWQiOiIxIiwianRpIjoiZTdjNzhhMzljZDQ1NGU0MjJjZmM0ZTI4MzZhZWVkOTFmNWRjYzU2OTVkZDcxMmI4YTFlMjgyMzg2YjlhYmVmZjY5MGZjYjM1YjNlYTUzYzEiLCJpYXQiOjE1Mzg5MDA0ODMsIm5iZiI6MTUzODkwMDQ4MywiZXhwIjoxNTcwNDM2NDgzLCJzdWIiOiIyNCIsInNjb3BlcyI6W119.C7ScRJtLu8pvB8E33BkZCq1rzVljLs9kbki9xeqMRzrXisjjkBYIVsrM-q8Cw1hPWCiv4w6rPOhmlHqB0SIucH3Z3rEL_KB_pWB5ddJY5N0jV-X3UCGz2X_Ai8Zi9E9Q0GqYOLS-zTHctztN4E4X2mHsRA5xAgvujECGbInWQd8rDciTm91xncTrcImI_zROTmDGflQXCn3a3Wr7OvnXqy4pYy7ubr0bZ4tRl4ysqCS31A7mdMG2yWrETgdNMdmDvfpDjzYDOTa73NKb8dCFNKE7Cy_WZI3IoX0cDopdKskYXh-J1zbgbhxoclTYfmcoQKDv9kKKAkXHCqVA9z-ABocToa905A-1Iaa2ZmtW_UemUNPwx8FAgPeB1b56LcLBg9Y0xmJvEOhmaZTb-bMQYxQ_5HeQkBJ0g7Sna_FIF_7U7pmRGcEpcxBOdz8hNrBoI46Mr_55jTRHncG1BtHllaQU5ilPQnwEO6s1hLJDQuYKZw_jqSJdnqqWMO5twBk3rjZ_w7hLnyyBrv9m0KUcgH0eQZ0w7DAARGP1V3oVl9paeBog0wZvgfuX_fDhnRlJ6eEX_6WmLWaFml06v31hHeIdXvYyDMnF1QIv7QA5LaWqq-Aa8sb2ZLw7QFV1IGgAa92c_2_6CVdcAwopoOHClcP2S78cCDu3SNVNHjcozEg',
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
            }
            else {
              global.dataArray_lamp.push({
                title: responseJson.message[i].families[j].title,
                content: responseJson.message[i].families[j].content
              });
              global.products_light[j] = responseJson.message[i].families[j].products; 
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

    if(this.state.bulb=="ios-bulb" && content.content +1 <= global.products_lamp.length){
      myproducts = global.products_lamp[content.content];
    }else if(this.state.bulb=="ios-bulb-outline" && content.content +1 <= global.products_light.length){
      myproducts = global.products_light[content.content];
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

          <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries")}}>
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
        <Button bordered badge vertical style={{marginTop:-8}}
        onPress={()=>{this.props.navigation.navigate('basket')}}>
              <Badge success style={{top:8}}><Text>2</Text></Badge>
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