import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './styles';

class Candidate extends Component {
  yesClick() {
    alert("You've been successfully checked in");
    this.props.switchScreen('home');
  }
  noClick() {
    this.props.switchScreen('checkin');
  }
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.header}>Are you</Text>
        <Text style={styles.candidate}>{this.props.getCandidate().subject_id}</Text>
        <View style={styles.yesno}>
          <TouchableHighlight activeOpacity={0.5} onPress={this.yesClick.bind(this)} underlayColor='transparent' style={[styles.choice, {marginRight: 10}]}>
            <Text style={styles.choiceText}>YES</Text>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.5} onPress={this.noClick.bind(this)} underlayColor='transparent' style={styles.choice}>
            <Text style={styles.choiceText}>NO</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Candidate;
