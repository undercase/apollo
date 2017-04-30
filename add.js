import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight
} from 'react-native';

import styles from './styles';
import background from './img/background.png';

class Add extends Component {
  constructor(props) {
      super(props);
      this.state = {
        "address1":"address1",
        "address2":"address2",
        "city":"Austin",
        "departmentid":"1",
        "dob":"01\/01\/1996",
        "email":"patient@athenahealth.com",
        "firstname":"firstname",
        "homephone":"5129745000",
        "lastname":"lastname",
        "mobilephone":"5129745000",
        "state":"TX",
        "zip":"78717"
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit(event) {
      let add_endpoint = 'http://localhost:3000/add';
      fetch(add_endpoint, {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          data: this.state
        })
      })
      .then(this.props.switchScreen('home'))

      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            address1:
            <input
              name="address1"
              type="text"
              checked={this.state.address1}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            address2:
            <input
              name="address2"
              type="text"
              checked={this.state.address2}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            city:
            <input
              name="city"
              type="text"
              checked={this.state.city}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            departmentid:
            <input
              name="departmentid"
              type="text"
              checked={this.state.departmentid}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            dob:
            <input
              name="dob"
              type="text"
              checked={this.state.dob}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            email:
            <input
              name="email"
              type="text"
              checked={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            firstname:
            <input
              name="firstname"
              type="text"
              checked={this.state.firstname}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            lastname:
            <input
              name="lastname"
              type="text"
              checked={this.state.lastname}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            homephone:
            <input
              name="homephone"
              type="text"
              checked={this.state.homephone}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            lastname:
            <input
              name="lastname"
              type="text"
              checked={this.state.lastname}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            mobilephone:
            <input
              name="mobilephone"
              type="text"
              checked={this.state.mobilephone}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            state:
            <input
              name="state"
              type="text"
              checked={this.state.state}
              onChange={this.handleInputChange} />
          </label>
          <br />


          <label>
            zip:
            <input
              name="zip"
              type="text"
              checked={this.state.zip}
              onChange={this.handleInputChange} />
          </label>
          <br />

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }


export default Add;
