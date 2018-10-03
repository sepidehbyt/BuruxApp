import React, { Component } from 'react';
import { Image, Alert,TouchableOpacity, View } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Header, Content, Card, Radio, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

class basket extends Component {
state = {
        dialogVisible: false,
        productName : "",
        count : 1
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
            <Title>سبد خرید</Title>
        </Right>
        </Header>

        <Content>

            <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>خرید کالا</Dialog.Title>
            <Dialog.Description>
                آیا از سفارشات خود مطمئن هستید؟
            </Dialog.Description>
            <Dialog.Button label="بله" onPress={this.handleYes} />
            <Dialog.Button label="خیر" onPress={this.handleNo} />
            </Dialog.Container>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:"https://image.ibb.co/nR3zE9/product.jpg"}} />
              </Left>
              <Right>
                  <TouchableOpacity onPress={()=>{console.log('sela')}}>
                      <Icon style={{color:'red',fontSize:30}} name="close"></Icon>
                  </TouchableOpacity>
                  <Text>خانواده حبابی</Text>
                  <Text note>سری جنرال</Text>
                  <View style={{flexDirection: 'row',}}>
                  <TouchableOpacity onPress={()=>{ 
                        this.setState({count: this.state.count + 1})
                    }}>
                    <Icon name="add" style={{color:"black"}}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ if(this.state.count != 0){
                        this.setState({count: this.state.count - 1});
                    }
                    }}>
                    <Icon name="remove" style={{marginHorizontal: 5,color:"black"}}></Icon>
                    </TouchableOpacity>
                    <Text>تعداد : {this.state.count}</Text>
                  </View>
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
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            </Right>
          </CardItem>

          </Card>

           <Card>
                <Button block
                style={{width:"100%"}}
                onPress={()=>{
                    this.setState({productName: "حبابی 12 وات مهتابی"});
                    this.showDialog();
                    }}>
                  <Icon active name="checkmark" />
                  <Text>تایید سفارشات</Text>
                </Button>
            </Card>
        </Content>
      </Container>
    );
  }
}

export default basket;