import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';

import styles from './styles';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  changeText(text) {
    this.setState({
      name: text
    });
  }
  render() {
    return (
      <TextInput placeholder='Enter your name' style={styles.name} onChangeText={this.changeText.bind(this)} value={this.state.name} />
    );
  }
}

export default Name;
