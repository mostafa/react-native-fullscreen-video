import React, { Component } from 'react';
import { View } from 'react-native';
import FullscreenVideo from 'react-native-fullscreen-video';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex: 1}}>
        <FullscreenVideo src={{uri: "http://techslides.com/demos/sample-videos/small.mp4"}} />
      </View>
    );
  }
}
