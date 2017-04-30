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
    this.props.changeName(text);
    this.setState({
      name: text
    });
  }
  handleButtonPress() {
    this.setState({
      name: ''
    });
    this.props.switchScreen('register');
  }
  render() {
    return (
      <View style={styles.nameWrapper}>
        <TextInput underlineColorAndroid='transparent' placeholder='Enter your name' style={[styles.fullWidth, styles.name]} onChangeText={this.changeText.bind(this)} value={this.state.name} />
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight activeOpacity={0.5} onPress={this.handleButtonPress.bind(this)} underlayColor='transparent' style={[styles.button, {
            margin: 10,
            backgroundColor: 'transparent'
          }]}>
            <Text style={[styles.buttonText, {
              color: '#e281a6',
              backgroundColor: 'transparent',
              fontFamily: 'Roboto-LightItalic',
              fontSize: 20
            }]}>Take a picture of yourself</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Name;
