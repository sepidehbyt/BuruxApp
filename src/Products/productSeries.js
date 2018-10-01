import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Header, Content, Card, CardItem, Thumbnail,Item ,Radio, ListItem, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

class productSeries extends Component {
state = {
        dialogVisible: false,
        productName : "",
        count : 1,
        selected0 : true,
        selected1 : false,
        selected2 : false,
        selected3 : false
      };

      showDialog = () => {
        this.setState({ dialogVisible: true });
      };
    
      handleYes = () => {
        this.setState({ dialogVisible: false });
        //TODO
        this.setState({count : 1});
      };
    
      handleNo = () => {
        this.setState({ dialogVisible: false });
        this.setState({count : 1});
      };

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
            <Title>محصولات بروکس</Title>
        </Right>
        </Header>

        <Content>

            <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>خرید کالا</Dialog.Title>
            <Dialog.Description>
                آیا از انتخاب {this.state.productName} اطمینان دارید ؟
            </Dialog.Description>
            <Dialog.Button label="بله" onPress={this.handleYes} />
            <Dialog.Button label="خیر" onPress={this.handleNo} />
            <Dialog.Input value={this.state.count} onChangeText={(text) => this.setState({count: text})} placeholder="تعداد"/>
            </Dialog.Container>
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:"https://image.ibb.co/nR3zE9/product.jpg"}} />
              </Left>
              <Right>
                  <Text>خانواده حبابی</Text>
                  <Text note>سری جنرال</Text>
              </Right>
            </CardItem>
            
            <CardItem cardBody>
            <Left></Left>
            <Body>
              <Image source={{uri:"https://image.ibb.co/bH46u9/product.png"}} style={{width: 100, height: 200}}/>
            </Body>
            <Right></Right>
            </CardItem>
            
            <CardItem>
                <Text note>
                این لامپ را جايگزين لامپ‌هاي حبابي رشته‌اي وكم مصرف كرده ايم. با توجه به اهمیت انتقال حرارت، بدنه این لامپ ها از جنس آلومینیوم ساخته شده اند. لامپ‌های حبابی کلاسیک با سرپیچ‌های استاندارد E27 به راحتی با لامپ‌های قدیمی شما قابل تعویض‌اند.
                </Text>
            </CardItem>

            <CardItem style={{marginVertical:20}}>
              <Left style={{flex:0.2}}></Left>
              <Left style={{flex:0.5,direction:'rtl',flexDirection:'column',marginTop:20}}>
                  <Text style={{backgroundColor:'lightblue',width:"90%",textAlign:'center',borderRadius:8}}>روشنایی عمومی</Text>
                  <Text style={{backgroundColor:'lightblue',width:"90%",textAlign:'center',borderRadius:8,marginVertical:5}}>منازل مسکونی و هتل ها</Text>
                  <Text style={{backgroundColor:'lightblue',width:"90%",textAlign:'center',borderRadius:8}}>پارکینگ و سرویس پله</Text>
              </Left>
              <Right style={{flex:0.3,marginTop:-30}}>
                  <Text style={{fontSize:30}}>کاربرد ها</Text>
                  <Icon name="easel" style={{fontSize:30,right:"50%",marginRight:-20}}></Icon>
              </Right>
            </CardItem>

            <CardItem >
            <Left>
              <Text>100w</Text>
            </Left>
            <Body>
              <Text>2070 لومن</Text>
            </Body>
            <Right>
              <Radio
              onPress={()=>{this.setState({selected0:true,selected1:false,selected2:false,selected3:false})}}
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.selected0}
              />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>200w</Text>
            </Left>
            
            <Body>
              <Text>2220 لومن</Text>
            </Body>
            <Right>
              <Radio
              onPress={()=>{this.setState({selected1:true,selected0:false,selected2:false,selected3:false})}}
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.selected1}
              />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>300w</Text>
            </Left>
            
            <Body>
              <Text>2570 لومن</Text>
            </Body>
            <Right>
              <Radio
              onPress={()=>{this.setState({selected2:true,selected1:false,selected0:false,selected3:false})}}
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.selected2}
              />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>400w</Text>
            </Left>
            
            <Body>
              <Text>2970 لومن</Text>
            </Body>
            <Right>
              <Radio
              onPress={()=>{this.setState({selected3:true,selected1:false,selected2:false,selected0:false})}}
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.selected3}
              />
            </Right>
          </CardItem>
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