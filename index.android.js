/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  Text,
  View
} from 'react-native';

import styles from './styles';

import Home from './home';
import Name from './name';
import Register from './register';

export default class apollo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: {
        practice: <Practice switchScreen={this.handleScreen} />,
        add: <Add switchScreen={this.handleScreen} />,
        home: <Home switchScreen={this.handleScreen} />,
        name: <Name switchScreen={this.handleScreen} />,
        register: <Register />
      },
      currentScreen: 'home'
    };
  }
  handleScreen = (screen) => {
    this.setState({currentScreen: screen});
  }
  render() {
    let screen = this.state.screens[this.state.currentScreen];
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {screen}
      </View>
    );
  }
}

AppRegistry.registerComponent('apollo', () => apollo);
