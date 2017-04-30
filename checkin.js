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

class CheckIn extends Component {
  constructor(props) {
    super(props);
  }
  takePicture() {
    this.camera.capture()
      .then((image) => {
        fetch('https://api.kairos.com/recognize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'app_id': '45a0d854',
            'app_key': '6ed2f59daeb956cae4ebc7237e8ceab6'
          },
          body: JSON.stringify({
            'image': image.data,
            'gallery_name': 'apollo-dev-1'
          })
        })
          .then(res => res.json())
          .then(res => {
            if ("Errors" in res) {
              alert("Your face wasn't recognized - please try again.")
            } else {
              this.props.chooseCandidate(res.images[0].candidates[0]);
              this.props.switchScreen('candidate');
            }
          });
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

export default CheckIn;
