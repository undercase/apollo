import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';
import Camera from 'react-native-camera';

import styles from './styles';

class Register extends Component {
  constructor(props) {
    super(props);
  }
  takePicture() {
    this.camera.capture()
      .then((image) => {
        this.props.enroll(image);
        alert("You've successfully registered")
        this.props.switchScreen('home');
      });
  }
  render() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.camera}
        type={Camera.constants.Type.front}
        aspect={Camera.constants.Aspect.fill}
        captureMode={Camera.constants.CaptureMode.temp}
        captureTarget={Camera.constants.CaptureTarget.memory}
        playSoundOnCapture={false}>
          <View style={styles.wrapper}>
            <TouchableHighlight activeOpacity={1} onPress={this.takePicture.bind(this)} underlayColor='transparent' style={[styles.button, styles.fullWidth, {
              borderRadius: 0,
              backgroundColor: 'transparent'
            }]}>
              <View style={styles.circle} />
            </TouchableHighlight>
          </View>
      </Camera>
    );
  }
}

export default Register;
