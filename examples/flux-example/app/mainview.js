import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';

var {height, width} = Dimensions.get('window');

export default class MainView extends Component {
  render() {
    return (
      <View style={{alignItems: "center", height: 280, width: width}}>
        <TouchableOpacity
          style={{alignItems: "center", height: 280, width: width}}
          onPress={() => Actions.fullscreenVideo({src: {uri: "http://techslides.com/demos/sample-videos/small.mp4"}})}>
          <View style={{alignItems: "center", height: 280, width: width}}>
            <Video
              style={{height: 280, flex: 1, alignSelf: "stretch"}}
              resizeMode="cover"
              source={{uri: "http://techslides.com/demos/sample-videos/small.mp4"}} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
