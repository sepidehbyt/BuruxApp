import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Button , Text, Title, Icon } from 'native-base';
import {Image, WebView, ScrollView,TouchableOpacity,View, StyleSheet} from 'react-native';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
  } from 'react-native-popup-dialog';

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
  });

  
  const scaleAnimation = new ScaleAnimation();

class news extends Component {
    state = {
        dialogShow: false,
      };

   

    showScaleAnimationDialog = () => {
        this.scaleAnimationDialog.show();
      }
    
      showSlideAnimationDialog = () => {
        this.slideAnimationDialog.show();
      }
    
      showFadeAnimationDialog = () => {
        this.fadeAnimationDialog.show();
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

        <PopupDialog
          ref={(popupDialog) => {
            this.scaleAnimationDialog = popupDialog;
          }}
          dialogAnimation={scaleAnimation}
          dialogTitle={<DialogTitle title="بسته بندی" />}
          actions={[
            <DialogButton
              text="فهمیدم"
              onPress={() => {
                this.scaleAnimationDialog.dismiss();
              }}
              key="button-1"
            />,
          ]}
        >
          <View style={styles.dialogContentView}>
          <ScrollView style={{marginVertical:10, marginHorizontal:10}}>
            <Text>بگذارید از زاویه ی دیگری با هم صحبت کنیم بهتر است بگوییم در دنیا برند های معتبر در تمام زمینه ها به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
        </ScrollView>
          </View>
        </PopupDialog>
        
        <Content>
       
          <List>
            <ListItem avatar>
              <Left>
              <Text note>3:43 pm</Text>
              </Left>
              <Body>
              <TouchableOpacity
              onPress={this.showScaleAnimationDialog}
              >
                <Text>بسته بندی ها عوض شد</Text>
                <Text note numberOfLines={1}> به این نتیجه رسیده اند که باید نیاز مخاطب را در شرح قابلیت های محصول گنجاند یعنی به زبان ساده تر به سوالات به وجود نیامده در ذهن مخاطب هم پیشاپیش پاسخ داد، آن هم به صورت واقعی وصادقانه. زمانی بود که تولید کنندگان لامپ ها انگشت شمار بودند و تقریبا در بسته بندی آنها هیچ تمایزی پیدا نمیشد، یک جعبه ی سفید معمولی و بدون اطلاعات دقیق با مشخصاتی از نام برند و وات مصرفی روی آن دیده می شد.چرا که آن زمان تمام لامپها تکلیفشان روشن بود مصرف بالا و نبودن اثری ازبرچسب انرژی. اما پیشرفت تکنولوژی و افزایش تقاضا در بازار روشنایی باعث شده تا تعداد عرضه کنندگان محصولات</Text>
          </TouchableOpacity>
              
              </Body>
              <Right>
                <Thumbnail source={ require('../../assets/news.jpg') } />
              </Right>
            
            </ListItem>
            
          </List>
        </Content>
      </Container>
    );
  }
}

export default news;