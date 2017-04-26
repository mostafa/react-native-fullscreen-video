import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import FullScreenVideo from 'react-native-fullscreen-video';
import MainView from './app/mainview';

export default class example extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="main" component={MainView} initial={true} hideNavBar={true} />
          <Scene
            key="fullscreenVideo"
            component={FullScreenVideo}
            hideNavBar={true}
            duration={1} />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('example', () => example);
