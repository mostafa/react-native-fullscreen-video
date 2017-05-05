import React, { Component } from 'react';
import { AppRegistry, View, Dimensions, StatusBar, PixelRatio } from 'react-native';
import Video from 'react-native-video';

var Orientation = require('react-native-orientation');

var {height, width} = Dimensions.get('window');
const statusBarSize = 25;

export default class FullScreenVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoStyle: {
        height: width + statusBarSize,
        alignSelf: "stretch",
      },
      topViewStyle: {
        flex: 1,
        transform: [
          { rotateZ: '90deg'},
          { translateY: ((PixelRatio.getPixelSizeForLayoutSize(height)-
            PixelRatio.getPixelSizeForLayoutSize(width))/
            PixelRatio.get()) - statusBarSize },
        ],
        height: width,
        width: height,
      },
      paused: true,
      muted: true,
      sourceFile: this.props.src,
      resizeMode: "cover"
    }
  }

  onVideoLoaded() {
    this.player.seek(1);
  }

  componentWillMount() {
    Orientation.lockToPortrait();
    this.setState({
      paused: false,
      muted: false,
    });
  }

  componentWillUnmount() {
    Orientation.unlockAllOrientations();
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: "black"}}>
        <StatusBar hidden={true} />
        <View style={this.state.topViewStyle}>
          <Video
            ref={(ref) => {
              this.player = ref
            }}
            repeat={true}
            paused={this.state.paused}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            source={this.state.sourceFile}
            style={this.state.videoStyle}
            onLoad={this.onVideoLoaded.bind(this)}
          />
        </View>
      </View>
    );
  }
}
