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

const dataArray_lamp = [
    { title: "خانواده حبابی", content: "salaaaam" },
    { title: "خانواده دکوراتیو", content: "Lorem ipsum dolor sit amet" },
    { title: "خانواده شمعی", content: "Lorem ipsum dolor sit amet" },
    { title: "خانواده تیوب", content: "Lorem ipsum dolor sit amet" },
    { title: "خانواده رفلکتور", content: "Lorem ipsum dolor sit amet" }
  ];

  const dataArray_light = [
    { title: "خانواده لاینر", content: "Lorem ipsum dolor sit amet" },
    { title: "خانواده پنل", content: "Lorem ipsum dolor sit amet" },
    { title: "خانواده پروژکتور", content: "Lorem ipsum dolor sit amet" }
  ];

class productLists extends Component {
  constructor(props) {
    super(props);
    this.state =  {
        height:0,
        bulb:"ios-bulb",
        type: "چراغ های",
        dataArray: dataArray_lamp,
        dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Simplicity Matters'
      ])
    };
  }

  _renderContent = (content) => {
    return (

    <View>
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries")}}>
            <Text
            style={{ backgroundColor: "#e3f1f1", padding: 10 }}
            >
            اشکی
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries")}}>
            <Text
            style={{ backgroundColor: "#e3f1f1", padding: 10 }}
            >
            حبابی
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries")}}>
            <Text
            style={{ backgroundColor: "#e3f1f1", padding: 10 }}
            >
            جنرال
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries")}}>
            <Text
                style={{ backgroundColor: "#e3f1f1", padding: 10 }}
            >
                جاینت
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate("ProductSeries")}}>
            <Text
            style={{ backgroundColor: "#e3f1f1", padding: 10 }}
            >
            یوفو
            </Text>
        </TouchableHighlight>
    </View>

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
                        dataArray:dataArray_light,
                        dataSource : new ListView.DataSource({
                            rowHasChanged: (r1, r2) => r1 !== r2
                          }).cloneWithRows([
                            'eli'
                          ])
                    });
                }else if(this.state.bulb="ios-bulb-outline"){
                    this.setState({
                        bulb:"ios-bulb",
                        type: "چراغ های",
                        dataArray:dataArray_lamp,
                        dataSource : new ListView.DataSource({
                            rowHasChanged: (r1, r2) => r1 !== r2
                          }).cloneWithRows([
                            'sela'
                          ])
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