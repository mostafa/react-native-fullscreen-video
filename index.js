import React, { Component } from 'react';
import { AppRegistry, View, Dimensions, StatusBar, PixelRatio, {/* TouchableOpacity */} } from 'react-native';
// import { VideoPlayer as Video } from 'react-native-video-controls';
import Video from 'react-native-video';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Actions } from 'react-native-router-flux';

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
      paused: true,
      muted: true,
      sourceFile: this.props.src,
    }
  }

  onVideoLoaded() {
    this.player.seek(1);
  }

  componentWillMount() {
    this.setState({
      paused: false,
      muted: false,
    });
  }

  render() {
    return (
      <View
        style={{flex: 1, backgroundColor: "black"}}>
        <StatusBar hidden={true} />
        <View style={{
          flex: 1,
          transform: [
            { rotateZ: '90deg'},
            { translateY: ((PixelRatio.getPixelSizeForLayoutSize(height)-PixelRatio.getPixelSizeForLayoutSize(width))/PixelRatio.get()) - statusBarSize },
          ],
          height: width,
          width: height,
          }}>
          <Video
            ref={(ref) => {
              this.player = ref
            }}
            repeat={true}
            paused={this.state.paused}
            muted={this.state.muted}
            resizeMode='cover'
            source={this.state.sourceFile}
            style={this.state.videoStyle}
            onLoad={this.onVideoLoaded.bind(this)}
          />
          {/* <View style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#0008',
            width: 50, // height,
            height: 75}}>
            <TouchableOpacity
              style={{
                position: "absolute",
                top: 36,
                left: 10,
              }}
              onPress={() => Actions.pop()}>
              <Icon name="close" size={26} color="white" />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
  }
}
