import React from 'react';
import LoginPage from "../login/login.js";
import RegisterPage from "../register/register.js";
import MainPage from "./main.js";
import WarrantyPage from '../Warranty/warranty.js'
import ProductPage from '../product/product.js'
import { DrawerNavigator } from "react-navigation"; 
import photonPage from '../photon/photon.js';
import pdfPage from '../photon/pdf.js';
import NewsPage from '../news/news.js';
import ProductSeries from '../Products/productSeries.js';
import productList from '../Products/productLists.js';
import basket from '../Basket/basket.js';
import starter from '../login/starter.js';
import SideBar from '../sidebar/sidebar.js';

const home = DrawerNavigator(
  {
    starter: { screen: starter},
    LoginPage: { screen: LoginPage},
    basket: { screen: basket},
    productList: { screen: productList},
    ProductSeries: { screen: ProductSeries},
    MainPage: { screen: MainPage},
    RegisterPage: { screen: RegisterPage},
    NewsPage: { screen: NewsPage},
    photonPage: { screen: photonPage},
    pdfPage: { screen: pdfPage},
    WarrantyPage: { screen: WarrantyPage},
    ProductPage : { screen: ProductPage}
  }
  ,
  {
    contentComponent: props => <SideBar {...props} />,
    drawerPosition : 'left',
    drawerWidth: 250,
    drawerLockMode : 'locked-closed'
  }
  
);
export default home;