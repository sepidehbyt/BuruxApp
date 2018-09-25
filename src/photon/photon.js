import React, { Component } from 'react';
import { Container, Header, Body, Content, Form, Item, Input, Label, Button, Icon, Right, Left, Title, Card, CardItem, Thumbnail } from 'native-base';
import {Text, Image, FlatList, TouchableHighlight, StyleSheet} from 'react-native';


    const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#3f51b5',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'purple',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    box:{
        borderWidth: 2,
        borderColor: 'black',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        elevation: 1,marginLeft:10,width:150,height:262
    }
    })

class photon extends Component {

    render() {
    
    const dataBack = [
        {"Subcategory" : "اردیبهشت 97", "color": "white", "imageurl":"../../assets/F1.jpg"},
        {"Subcategory" : "تیر 97", "color": "white", "imageurl":"../../assets/F2.jpg"},
        {"Subcategory" : "مرداد 97", "color": "white", "imageurl":"../../assets/F3.jpg"},
        {"Subcategory" : "شهریور 97", "color": "white", "imageurl":"../../assets/F4.jpg"}
    ];
    
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
        <Title>فوتون</Title>
    </Right>
    </Header>
    
    <Content>
        <FlatList style={{marginTop:"4%"}}
            horizontal
            // extraData={this.state.color}
            // data={this.flatlistdata()}
            data = {dataBack}
            renderItem={({ item: row2Data }) => {
            return (
                <Card style={styles.box}>
                <CardItem cardBody style={{width:150,height:212}}>
                <TouchableHighlight style={{height : 212,width:150}} onPress={() => this.props.navigation.navigate('pdfPage')}>
                <Image source={require("../../assets/F3.jpg")} style={{height: 212,resizeMode:'stretch', width: null, flex: 1}}/>
                </TouchableHighlight>
                </CardItem>
                <CardItem style={{flex:1,backgroundColor:'grey'}}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('pdfPage')}>
                    <Icon name='download' style={{color:row2Data.color,textAlign:'center'}} />
                    </TouchableHighlight>
                    <Text note numberOfLines={1} style={{flex:1,fontSize:15,color:'white',textAlign:'center'}}>{row2Data.Subcategory}</Text>
                </CardItem>
            </Card>
            );
            }}
            keyExtractor={(item, index) => index}
        />

        <Card style={{flex: 0, marginTop:"4%"}}>
            <CardItem>
              <Left>
                <Thumbnail source={require("../../assets/F.jpg")} />
             </Left>
             <Body></Body>
                <Right>
                <Text>فوتون</Text>
                {/* <Text note>ماهنامه داخلی شرکت بروکس</Text> */}
                </Right>
            </CardItem>
            <CardItem>
              <Right>
                <Text>
                توضیحات خاص راجع به فوتون شاید :دی
                </Text>
              </Right>
            </CardItem>
          </Card>

    </Content>

        </Container>
    )}
}

export default photon;