import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './styles';
import background from './img/background.png';

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let practice_endpoint = 'http://localhost:3000/practice';
    fetch(practice_endpoint, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        practiceid: this.state.value
      })
    })
    .then(this.props.switchScreen('home'));

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Practice ID:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default Practice;
