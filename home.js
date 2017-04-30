import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './styles';
import background from './img/background.png';

class Home extends Component {
  render() {
    return (
      <Image source={background} style={styles.background}>
        <Text style={styles.logo}>apollo</Text>
        <View style={styles.buttons}>
          <TouchableHighlight onPress={() => {this.props.switchScreen('check')}} underlayColor="#e281a6" style={[styles.button, {marginBottom: 10}]}>
            <Text style={styles.buttonText}>CHECK IN</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.props.switchScreen('name')}} underlayColor="#e281a6" style={styles.button}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}

export default Home;
