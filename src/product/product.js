import React, { Component } from 'react';
import { Image, Alert } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

class product extends Component {
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
            <Title>محصولات جدید</Title>
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
                <Thumbnail source={require('../../assets/product.jpg')} />
              </Left>
              <Right>
                  <Text>خانواده حبابی</Text>
                  <Text note>سری جنرال</Text>
              </Right>
            </CardItem>
            
            <CardItem cardBody>
            <Left></Left>
            <Body>
              <Image source={require('../../assets/product.png')} style={{width: 100, height: 200}}/>
            </Body>
            <Right></Right>
            </CardItem>
            
            <CardItem>
                <Text note>
                این لامپ را جايگزين لامپ‌هاي حبابي رشته‌اي وكم مصرف كرده ايم. با توجه به اهمیت انتقال حرارت، بدنه این لامپ ها از جنس آلومینیوم ساخته شده اند. لامپ‌های حبابی کلاسیک با سرپیچ‌های استاندارد E27 به راحتی با لامپ‌های قدیمی شما قابل تعویض‌اند.
                </Text>
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

export default product;