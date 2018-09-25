import React from 'react';
import HomePage from "./src/home/home.js";
import LoginPage from "./src/login/login.js";
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return <HomePage />;
  }
}