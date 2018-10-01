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
  TextInput
} from 'react-native';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

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
      sliderValue: 0.3
    };
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
          <Image source={{uri:"https://image.ibb.co/c3XUgp/Burux.png"}} style={{marginTop:10,height:100,width:100,marginLeft:-50,left:'50%'}}></Image>
          <ScrollView style={{marginHorizontal:8,marginVertical:8}}>
          <Text style={styles.text}>>بگذارید از زاویه ی دیگری با هم صحبت کنیم بهتر است بگوییم در دنیا برند های معتبر در تمام زمینه ها به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات
          بگذارید از زاویه ی دیگری با هم صحبت کنیم بهتر است بگوییم در دنیا برند های معتبر در تمام زمینه ها به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات
          </Text>
          </ScrollView>
         </Modal>

        <Content>
       
          <List>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator><ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body  style={{height:80}}>
              <TouchableOpacity
              onPress={()=>this.refs.modal3.open()}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={2}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
              <Thumbnail source={{uri:"https://image.ibb.co/fEREgp/news.jpg"}} />
              </Right>
            
            </ListItem>
            <Separator style={{height:1,marginTop:-0.5}}>
          </Separator>
          
          </List>
        </Content>
      </Container>
    );
  }
}

export default news;