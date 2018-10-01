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

const home = DrawerNavigator(
  {
    ProductSeries: { screen: ProductSeries},
    LoginPage: { screen: LoginPage},
    productList: { screen: productList},
    MainPage: { screen: MainPage},
    RegisterPage: { screen: RegisterPage},
    NewsPage: { screen: NewsPage},
    photonPage: { screen: photonPage},
    pdfPage: { screen: pdfPage},
    LoginPage: { screen: LoginPage},
    WarrantyPage: { screen: WarrantyPage},
    ProductPage : { screen: ProductPage}
  }
);
export default home;