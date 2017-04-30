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
            'gallery_name': 'apollo'
          })
        }).then(res => console.warn(JSON.stringify(res)));
      });
  }
  render() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.camera}
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
