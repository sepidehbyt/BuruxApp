import React, { Component } from 'react';
import { Image,ListView, Alert,View,FlatList,BackHandler } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Header, Content, Card, CardItem, Thumbnail, Input, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import {ButtonGroup} from 'react-native-elements';

var API_URL = require('../config/config.js');


const buttons = ['آفتابی', 'مهتابی', 'یخی'];

class productSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.state = {
      dialogVisible: false,
      productName : "",
      count : 1,
      selected0 : true,
      selected1 : false,
      selected2 : false,
      selected3 : false,
      refresher : [],
      response : [],
      selectedwatt : 0,
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this)
    global.renderer = [];
  }

      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }

      showDialog = () => {
        this.setState({ dialogVisible: true });
      };
    
      handleYes = () => {
        this.fetch_addtobasket();
        this.setState({ dialogVisible: false });
        //TODO
        this.setState({count : 1});
      };
    
      splitter(){
        if(this.state.response.usages != undefined){
          return(this.state.response.usages.split('-'));
        }else
        {
          return([]);
        }
      }

      getlamps(){
        if(this.state.response.lamp != undefined){
          return(this.state.response.lamps);
        }else{
          return([]);
        }
    }

      handleNo = () => {
        this.setState({ dialogVisible: false });
        this.setState({count : 1});
      };

      componentWillMount() {
        // alert(this.props.navigation.getParam('imageURL'));
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
          this.props.navigation.navigate('MainPage');
          return true;
        });
        this.fetch_productSeries();
      }

    fetch_productSeries () {
      fetch(API_URL + '/auth/getProductSeries/'+this.props.navigation.getParam('id') 
      //+  this.props.navigation.getParam('id')
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
          // alert(this.props.navigation.getParam('id') + '     ' + API_URL + '/auth/getProductSeries/'+this.props.navigation.getParam('id') );
          var countType = Object.keys(responseJson.lamps).length;
          for(let i = 0 ; i < countType ; i++){
            global.renderer[i] = i;
          }
          this.setState({response : responseJson,refresher : global.renderer});
          // alert(JSON.stringify(responseJson));       
        }
        this.forceUpdate();
      })
      .catch((error) => {
          console.error(error);
      });
    }

    

    fetch_addtobasket () {
      fetch(API_URL + '/auth/addToBasket?count=' + this.state.count + '&productdetail_id=' + this.props.navigation.getParam('id') + '&watt=' + this.state.response.lamps[this.state.selectedwatt].watt + '&color=' + buttons[this.state.selectedIndex] +'&status=OK'
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
          alert(JSON.stringify(responseJson));       
        }
        this.forceUpdate();
      })
      .catch((error) => {
          console.error(error);
      });
    }


    returnlamp(){
      if(this.state.response != undefined){
        return (JSON.stringify(this.state.response));
      }else{
        return ([]);
      }
    }

    makerow(rowData){
      if(this.state.response.lamps != undefined){
        var countType = Object.keys(this.state.response.lamps[rowData].color).length;
      var tmp = [];
      for(let i = 0 ; i < countType ; i ++){
        tmp[i] = this.state.response.lamps[rowData].color[i].color;
      }
      // console.warn(tmp);
      return tmp;
        // return (JSON.stringify(this.state.response));
      }else{
        return ([]);
      }
      
    }

    getsqname(rowData){
      if(this.state.selectedwatt == rowData){
        return("ios-checkbox-outline");
      }else{
        return("ios-square");
      }
    }

    getsqheight(rowData){
      if(this.state.selectedwatt == rowData){
        return(25);
      }else{
        return(0);
      }
    }

    boxcount(){
      if(this.state.response.lamps != undefined)
        return this.state.response.lamps[this.state.selectedwatt].box;
      else
        return 0;
    }

    selectedbuy(){
      if(this.state.response.lamps != undefined){
        return this.state.response.lamps[this.state.selectedwatt].watt;
      }else{
        return '';
      }
    }

    render() {
      
const { selectedIndex } = this.state;


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
            <Title>محصولات بروکس</Title>
        </Right>
        </Header>

        <Content>

            <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>خرید کالا</Dialog.Title>
            <Dialog.Description>
                آیا از انتخاب {this.props.navigation.getParam('name')} خانواده {this.props.navigation.getParam('family')}  {this.selectedbuy()} وات اطمینان دارید ؟
            </Dialog.Description>
            <Dialog.Button label="بله" onPress={this.handleYes} />
            <Dialog.Button label="خیر" onPress={this.handleNo} />
            <Dialog.Input value={this.state.count} onChangeText={(text) => this.setState({count: text})} placeholder="تعداد"/>
            </Dialog.Container>
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:this.props.navigation.getParam('imageURL')+""}} />
              </Left>
              <Right>
                  <Text>خانواده {this.props.navigation.getParam('family')}</Text>
                  <Text note>سری {this.props.navigation.getParam('name')}</Text>
              </Right>
            </CardItem>
            
            <CardItem cardBody>
            <Left></Left>
            <Body>
              <Image source={{uri:this.state.response.imageURL + ""}} style={{width: 100, height: 200}}/>
            </Body>
            <Right></Right>
            </CardItem>
            
            <CardItem>
                <Text style={{flex:1}} note>
                {this.state.response.description}
                </Text>
            </CardItem>

            <CardItem style={{marginVertical:20}}>
              <Left style={{flex:0.2}}></Left>
              <Left style={{flex:0.5,direction:'rtl',flexDirection:'column',marginTop:20}}>
              <ListView
              dataSource ={ new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
                }).cloneWithRows(this.splitter())
              }
              
              renderRow={(rowData) => (
                <View>
                  <Text style={{backgroundColor:'lightblue',width:"90%",textAlign:'center',borderRadius:8,marginBottom:5}}>{rowData}</Text>
                </View>
               )}
              />
          </Left>
              <Right style={{flex:0.3,marginTop:-30}}>
                  <Text style={{fontSize:30}}>کاربرد ها</Text>
                  <Icon name="easel" style={{fontSize:30,right:"50%",marginRight:-20}}></Icon>
              </Right>
            </CardItem>
            
        <ListView
        ref="ListView"
        
        dataSource ={ new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
          }).cloneWithRows(this.state.refresher)
        }
        
        renderRow={(rowData) => (
              <Button block
              style={{marginBottom:5,flex:1}}
              onPress={()=>{
                  this.setState({selectedwatt : rowData});
                  }}>
                <Icon active name={this.getsqname(rowData)} style={{left:0,height:this.getsqheight(rowData)}}/>
                <Text style={{alignSelf:'center',flex:1}}>{this.state.response.lamps[rowData].watt} وات</Text>
              </Button>
              
         )}
        />
        {/* <ListView
                  ref="ListView"
                  style={{flexDirection:'row'}}
                  
                  dataSource ={ new ListView.DataSource({
                    rowHasChanged: (r1, r2) => r1 !== r2
                    }).cloneWithRows(this.makerow(0))
                  }
                  
                  renderRow={(rowData) => (
                          // <Text></Text>
                          <Button 
                          onPress={()=>{
                              this.setState({productName: "حبابی 12 وات مهتابی"});
                              this.showDialog();
                              }}>
                            <Icon active name="square" style={{left:0}} />
                            <Text>{rowData} رنگ نور</Text>
                          </Button>
                  )}
                  /> */}

             <ButtonGroup
              //style={{width:"40%", height:"10%"}}
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              buttons={buttons}
              containerStyle={{height: 50}}
              selectedButtonStyle={{backgroundColor:'blue'}}
            />

            <Button style={{alignSelf: 'center',}} iconLeft transparent primary>
            <Icon name='cube' />
            <Text style={{direction:'rtl'}}>تعداد در کارتن     {this.boxcount()}</Text>
            </Button>

            <CardItem>
              <Left></Left>
              <Body>
                <Button block
                onPress={()=>{
                    this.setState({productName: "حبابی 12 وات مهتابی"});
                    this.showDialog();
                    }}>
                  <Icon active name="basket" />
                  <Text>خرید</Text>
                </Button>
              </Body>
              <Right></Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default productSeries;