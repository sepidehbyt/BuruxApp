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
import orders from '../orders/orders.js';
import catalogue from '../catalogue/catalogue.js';
import cataloguepage from '../catalogue/cataloguepage.js';

const home = DrawerNavigator(
  { 
    starter: { screen: starter},
    RegisterPage: { screen: RegisterPage},
    LoginPage: { screen: LoginPage},
    MainPage: { screen: MainPage},
    orders: { screen: orders},
    catalogue: { screen: catalogue},
    cataloguepage: { screen: cataloguepage},
    photonPage: { screen: photonPage},
    productList: { screen: productList},
    ProductPage : { screen: ProductPage},
    ProductSeries: { screen: ProductSeries},
    NewsPage: { screen: NewsPage},
    basket: { screen: basket},
    pdfPage: { screen: pdfPage},
    WarrantyPage: { screen: WarrantyPage}
  }
  ,
  {
    contentComponent: props => <SideBar {...props} />,
    drawerPosition : 'left',
    drawerWidth: 300,
    drawerLockMode : 'locked-closed'
  }
  
);
export default home;