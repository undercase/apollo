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
import CheckIn from './checkin';
import Candidate from './candidate';

export default class apollo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screens: {
        practice: <Practice switchScreen={this.handleScreen} />,
        add: <Add switchScreen={this.handleScreen} />,
        home: <Home switchScreen={this.handleScreen} />,
        name: <Name switchScreen={this.handleScreen} changeName={this.changeName.bind(this)} />,
        register: <Register switchScreen={this.handleScreen} enroll={this.enroll.bind(this)} />,
        checkin: <CheckIn switchScreen={this.handleScreen} chooseCandidate={this.chooseCandidate.bind(this)} />,
        candidate: <Candidate switchScreen={this.handleScreen} getCandidate={() => this.state.candidate} />
      },
      name: '',
      candidate: {},
      currentScreen: 'home'
    };
  }
  handleScreen = (screen) => {
    this.setState({currentScreen: screen});
  }
  changeName(name) {
    this.setState({
      name
    });
  }
  enroll(image) {
    fetch('https://api.kairos.com/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'app_id': '45a0d854',
        'app_key': '6ed2f59daeb956cae4ebc7237e8ceab6'
      },
      body: JSON.stringify({
        'image': image.data,
        'subject_id': this.state.name,
        'gallery_name': 'apollo-dev-1'
      })
    });
  }
  chooseCandidate(candidate) {
    this.setState({candidate});
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
